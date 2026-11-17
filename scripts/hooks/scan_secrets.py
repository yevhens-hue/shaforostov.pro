#!/usr/bin/env python3
"""
Zero-dependency pre-push / pre-commit secret scanner.
Inspects added lines in git diff for exposed API keys, private keys, and tokens.
"""

import sys
import os
import re
import subprocess

PATTERNS = [
    ("OpenAI / DeepSeek Key", re.compile(r'\bsk-(?:proj-|ant-)?[A-Za-z0-9_\-]{24,}\b')),
    ("GitHub Personal Access Token", re.compile(r'\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{36}\b')),
    ("GitHub Fine-Grained Token", re.compile(r'\bgithub_pat_[A-Za-z0-9_]{50,}\b')),
    ("AWS Access Key ID", re.compile(r'\bAKIA[0-9A-Z]{16}\b')),
    ("Google / Firebase API Key", re.compile(r'\bAIza[0-9A-Za-z\-_]{35}\b')),
    ("Slack Token", re.compile(r'\bxox[baprs]-[0-9A-Za-z]{10,48}\b')),
    ("Stripe Live Secret Key", re.compile(r'\b[rs]k_live_[0-9a-zA-Z]{24,}\b')),
    ("Telegram Bot Token", re.compile(r'\b[0-9]{8,11}:AA[A-Za-z0-9_\-]{33}\b')),
    ("Private Key Block", re.compile(r'-----BEGIN [A-Z ]*PRIVATE KEY-----')),
]

IGNORED_PATTERNS = [
    re.compile(r'pragma:\s*allowlist secret', re.I),
    re.compile(r'#\s*nosec', re.I),
    re.compile(r'dummy|placeholder|example|test_token|fake_key|xxx{3,}', re.I),
    re.compile(r'sk-proj-test', re.I),
    re.compile(r'AKIAIOSFODNN7EXAMPLE'),
]

FORBIDDEN_FILE_PATTERNS = [
    re.compile(r'(^|/)\.env(\.(?!example)[a-zA-Z0-9_\-]+)?$', re.I),
    re.compile(r'(^|/)id_rsa(\.pub)?$', re.I),
    re.compile(r'\.(pem|key|p12|pfx|pkcs12)$', re.I),
    re.compile(r'(^|/)credentials\.json$', re.I),
]

def mask_secret(val: str) -> str:
    if len(val) <= 8:
        return "****"
    return val[:4] + "…" + val[-4:]

def run_git(args):
    res = subprocess.run(["git"] + args, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    return res.stdout, res.returncode

def get_diff_text():
    # If explicit --diff or diff passed via stdin
    if "--cached" in sys.argv:
        out, _ = run_git(["diff", "--cached"])
        return out

    stdin_data = ""
    if not sys.stdin.isatty():
        try:
            stdin_data = sys.stdin.read().strip()
        except Exception:
            pass

    if stdin_data:
        # Check if stdin is already a git diff
        if "diff --git" in stdin_data or stdin_data.startswith("---") or stdin_data.startswith("+++"):
            return stdin_data

        # Otherwise parse pre-push ref tuples: <local_ref> <local_sha> <remote_ref> <remote_sha>
        diffs = []
        for line in stdin_data.splitlines():
            parts = line.split()
            if len(parts) >= 4:
                local_ref, local_sha, remote_ref, remote_sha = parts[:4]
                if local_sha == "0000000000000000000000000000000000000000":
                    continue # branch deleted
                if remote_sha == "0000000000000000000000000000000000000000":
                    # New remote branch, compare against origin/main if exists
                    out, code = run_git(["rev-parse", "--verify", "origin/main"])
                    if code == 0:
                        diff, _ = run_git(["diff", "origin/main..." + local_sha])
                    else:
                        diff, _ = run_git(["diff", local_sha + "~1.." + local_sha])
                else:
                    diff, _ = run_git(["diff", f"{remote_sha}..{local_sha}"])
                diffs.append(diff)
        if diffs:
            return "\n".join(diffs)

    # Fallback for manual check: compare against upstream or cached
    out, code = run_git(["diff", "@{u}..HEAD"])
    if code == 0 and out.strip():
        return out
    
    out, code = run_git(["diff", "--cached"])
    if out.strip():
        return out

    out, code = run_git(["diff", "HEAD~1..HEAD"])
    return out

def scan():
    diff_text = get_diff_text()
    if not diff_text or not diff_text.strip():
        print("[OK] No changes to scan for secrets.")
        return 0

    current_file = "unknown"
    violations = []

    for line in diff_text.splitlines():
        if line.startswith("diff --git "):
            parts = line.split()
            if len(parts) >= 4:
                current_file = parts[3].lstrip("b/")
                # Check forbidden file names
                for forbidden in FORBIDDEN_FILE_PATTERNS:
                    if forbidden.search(current_file):
                        violations.append((current_file, 0, "Forbidden Secret File Committed", current_file))
            continue

        if not line.startswith("+") or line.startswith("+++"):
            continue

        added_content = line[1:].strip()
        if not added_content:
            continue

        # Check ignore markers
        if any(ign.search(added_content) for ign in IGNORED_PATTERNS):
            continue

        for rule_name, rx in PATTERNS:
            match = rx.search(added_content)
            if match:
                raw_match = match.group(0)
                # Ensure it's not a dummy/test token
                if any(ign.search(raw_match) for ign in IGNORED_PATTERNS):
                    continue
                violations.append((current_file, rule_name, mask_secret(raw_match)))

    if violations:
        print("\n" + "=" * 60)
        print("[FAIL] SECRET SCANNER: Exposed credentials detected!")
        print("Push blocked to prevent leaking secrets to remote repository.")
        print("=" * 60)
        for item in violations:
            if len(item) == 4:
                file_path, _, rule, masked = item
                print(f"  FILE: {file_path}")
                print(f"  RULE: {rule} -> {masked}")
            else:
                file_path, rule, masked = item
                print(f"  FILE: {file_path}")
                print(f"  RULE: {rule} -> {masked}")
        print("=" * 60)
        print("Remediation:")
        print("  1. Remove secret from file and load from os.environ / .env instead.")
        print("  2. If false positive, add '# pragma: allowlist secret' at end of line.")
        print("=" * 60 + "\n")
        return 1

    print("[OK] Secret scanner: 0 exposed credentials found.")
    return 0

if __name__ == "__main__":
    sys.exit(scan())

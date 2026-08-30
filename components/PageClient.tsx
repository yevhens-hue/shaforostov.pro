"use client";

import { useState } from "react";
import type { PageContent } from "@/lib/content";

type PageClientProps = {
  contentEn: PageContent;
  contentUk: PageContent;
};

export function PageClient({ contentEn }: PageClientProps) {
  const [selectedTopology, setSelectedTopology] = useState<"RAG" | "VOICE" | "AGENTS">("RAG");

  const topologyData = {
    RAG: {
      name: "In-Database Hybrid Search",
      precision: "99.8%",
      latency: "42ms",
      stack: "pgvector (HNSW) + BM25 Lexical + Cross-Encoder",
      barWidth: "95%"
    },
    VOICE: {
      name: "Sub-Second WebRTC Avatar",
      precision: "99.4%",
      latency: "380ms",
      stack: "LiveKit WebRTC + ElevenLabs + Silero VAD",
      barWidth: "88%"
    },
    AGENTS: {
      name: "LangGraph Multi-Agent Swarm",
      precision: "98.9%",
      latency: "120ms",
      stack: "Claude Code SDK + MCP Tools + Redis Redlock",
      barWidth: "92%"
    }
  };

  const currentTopology = topologyData[selectedTopology];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black antialiased relative overflow-x-hidden">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/85 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              YS
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
                Yevhen Shaforostov
              </span>
              <span className="block text-xs text-cyan-400 font-medium tracking-wide">
                Senior AI Systems Architect & Product Lead
              </span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Overview</a>
            <a href="#simulator" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              AI Agent Simulator
            </a>
            <a href="#blueprint" className="hover:text-cyan-400 transition-colors">Architecture</a>
            <a href="#cases" className="hover:text-cyan-400 transition-colors">Case Studies</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills & Stack</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Oracle Certified (2026)
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shaforostov.e@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[550px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-sm shadow-inner">
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-bold text-xs uppercase tracking-wider font-mono">
                  Oracle Certified
                </span>
                <span className="text-slate-300">Agentic AI Foundations (2026) · AI PM @ Adsy.com</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
                Architecting<br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  Autonomous AI Agents
                </span><br />
                & Enterprise Hybrid RAG
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
                Senior AI Systems Architect & Technical Product Lead with 8+ years engineering production agent fleets, pgvector knowledge engines, real-time WebRTC conversational avatars, and high-load MarTech/FinTech platforms.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://slides.pitchavatar.com/dkmrf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-cyan-500/25 flex items-center gap-3 transition-all hover:scale-[1.02]"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Live PitchAvatar Demo</span>
                </a>
                <a
                  href="https://github.com/yevhens-hue/claude-skills-starter-kit"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500 text-slate-200 font-semibold text-base transition-all flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Claude Skills Starter Kit ↗
                </a>
              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">198+</div>
                  <div className="text-xs sm:text-sm text-slate-400">Production AI Skills</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">&lt;500ms</div>
                  <div className="text-xs sm:text-sm text-slate-400">WebRTC Voice Latency</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">100k+</div>
                  <div className="text-xs sm:text-sm text-slate-400">Daily Leads & Records</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Live AI Agent & Hybrid RAG Simulator */}
            <div className="lg:col-span-5" id="simulator">
              <div className="rounded-3xl bg-slate-900/95 border border-slate-800 shadow-2xl p-6 relative backdrop-blur-xl">
                <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>
                  Agent Topology Simulator
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">LangGraph + pgvector Engine v3.2</span>
                </div>

                {/* Simulator Controls */}
                <div className="py-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 tracking-wider uppercase">Select Workload Topology:</span>
                    <div className="flex gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                      <button
                        onClick={() => setSelectedTopology("RAG")}
                        className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                          selectedTopology === "RAG"
                            ? "bg-cyan-500 text-cyan-950"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Hybrid RAG
                      </button>
                      <button
                        onClick={() => setSelectedTopology("VOICE")}
                        className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                          selectedTopology === "VOICE"
                            ? "bg-cyan-500 text-cyan-950"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Voice AI
                      </button>
                      <button
                        onClick={() => setSelectedTopology("AGENTS")}
                        className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                          selectedTopology === "AGENTS"
                            ? "bg-cyan-500 text-cyan-950"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Multi-Agent
                      </button>
                    </div>
                  </div>

                  {/* Active Simulator Status Box */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Active Topology:</span>
                      <span className="text-cyan-400 font-bold font-mono">{currentTopology.name}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Tool Governance & Safety:</span>
                      <span className="text-emerald-400 font-mono">Active (AST Threat + HITL Gate)</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-[10px] text-slate-400 uppercase">Retrieval Precision</div>
                        <div className="text-xl font-extrabold text-cyan-400 font-mono">{currentTopology.precision}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-[10px] text-slate-400 uppercase">Execution Latency</div>
                        <div className="text-xl font-extrabold text-indigo-400 font-mono">{currentTopology.latency}</div>
                      </div>
                    </div>
                  </div>

                  {/* Memory & Model Stack */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Active Pipeline Stack</span>
                      <span className="text-white font-bold font-mono text-[11px]">{currentTopology.stack}</span>
                    </div>
                    <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      <div
                        style={{ width: currentTopology.barWidth }}
                        className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Claude Code & MCP Harness</span>
                  <span className="text-emerald-400 font-mono">● Autonomous State OK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Scope / What I Do & Who I Help */}
      <section className="py-24 bg-slate-900/50 border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-widest">
              Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What I Do & Who I Help</h2>
            <p className="text-slate-400">Architecting production-grade AI systems, multi-agent workflows, and scalable B2B platforms.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Multi-Agent Topologies */}
            <div className="group p-8 rounded-3xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all"></div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 font-bold text-xl font-mono">01</div>
              <h3 className="text-2xl font-bold mb-3 text-white">AI Agents & Multi-Agent Topologies</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Orchestrating autonomous agents with deterministic state, AST threat scanning, and MCP tool execution.</p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>LangGraph & Claude Code SDK</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>Model Context Protocol (MCP)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>HITL Approval Gates & Redlock queues</li>
              </ul>
            </div>
            {/* Enterprise RAG & AI Search */}
            <div className="group p-8 rounded-3xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-all"></div>
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 font-bold text-xl font-mono">02</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Enterprise Hybrid RAG & GEO/AEO</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">In-database hybrid vector retrieval and Generative Engine Optimization for AI search overviews.</p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>pgvector (HNSW) + BM25 Lexical + RRF</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>Cross-Encoder Re-ranking & Prompt Caching</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>AEO/GEO (Perplexity, Gemini, ChatGPT)</li>
              </ul>
            </div>
            {/* Conversational Video & Voice AI */}
            <div className="group p-8 rounded-3xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all"></div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 font-bold text-xl font-mono">03</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Real-Time Voice & Video Avatars</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Building interactive conversational avatar pipelines with sub-second WebRTC streaming.</p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>WebRTC streaming & LiveKit pipelines</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>ElevenLabs voice synthesis & Silero VAD</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Real-time session scoring & lead routing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Production AI Architecture Blueprint */}
      <section id="blueprint" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              Methodology & Governance
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Production AI Architecture Blueprint</h2>
            <p className="text-slate-400">The 4-layer framework deployed at Adsy.com and PitchAvatar to eliminate hallucinations and achieve enterprise reliability.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 relative">
              <div className="text-3xl font-extrabold text-cyan-500/30 font-mono">01</div>
              <h3 className="text-lg font-bold text-white">Deterministic Ingestion & OCR</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Multimodal document parsing (Claude 3.5 Sonnet / Azure), preserving spatial bounding boxes and provenance metadata.</p>
            </div>
            {/* Step 2 */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 relative">
              <div className="text-3xl font-extrabold text-indigo-500/30 font-mono">02</div>
              <h3 className="text-lg font-bold text-white">Hybrid pgvector RAG</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Dense HNSW vector search fused with BM25 lexical ranking and Cross-Encoder re-ranking for sub-1% retrieval errors.</p>
            </div>
            {/* Step 3 */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 relative">
              <div className="text-3xl font-extrabold text-emerald-500/30 font-mono">03</div>
              <h3 className="text-lg font-bold text-white">AST Tool Governance & Gates</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Regex and AST threat scanning on tool parameters, $500 destructive approval gates, and Redis Redlock idempotency.</p>
            </div>
            {/* Step 4 */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 relative">
              <div className="text-3xl font-extrabold text-purple-500/30 font-mono">04</div>
              <h3 className="text-lg font-bold text-white">Eval-Driven Development (EDD)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Continuous trajectory testing with LLM-as-a-Judge, golden reference datasets, and -60% token cost optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section id="cases" className="py-28 bg-slate-900/40 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              Proven Impact
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Featured Case Studies</h2>
            <p className="text-slate-400">Real-world results delivered across conversational video AI, multi-agent frameworks, and high-load platforms.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Case 1: PitchAvatar */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold">Pitch Avatar Inc, Austria</span>
                <span className="text-xs text-slate-400 font-mono">04/2026 – Present</span>
              </div>
              <h3 className="text-2xl font-bold text-white">PitchAvatar — Real-Time Conversational AI Video Avatar Pipeline</h3>
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Problem</span>
                  <span className="text-slate-300 font-medium">Static videos cause high drop-offs in sales demos.</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Action</span>
                  <span className="text-slate-300 font-medium">Engineered sub-second WebRTC streaming avatar + ElevenLabs voice.</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Result</span>
                  <span className="text-cyan-400 font-bold">&lt;500ms latency, +28% ARPU via Listener Seats.</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Architected an interactive conversational avatar pipeline responding to live audience questions, integrated two-way CRM sync (HubSpot, Salesforce), and deployed commercial seat monetization.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://slides.pitchavatar.com/dkmrf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-xs text-cyan-300 font-mono flex items-center gap-1.5 transition-colors"
                >
                  <span>▶ Live Demo (slides.pitchavatar.com)</span>
                </a>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">WebRTC</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">ElevenLabs</span>
              </div>
            </div>

            {/* Case 2: Adsy.com */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono font-semibold">Adsy.com</span>
                <span className="text-xs text-slate-400 font-mono">2026 – Present</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Production Multi-Agent Systems & Enterprise Hybrid RAG</h3>
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Problem</span>
                  <span className="text-slate-300 font-medium">Context window decay & manual publisher verification.</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Action</span>
                  <span className="text-slate-300 font-medium">Built 84-skill JIT architecture + pgvector HNSW search.</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Result</span>
                  <span className="text-indigo-400 font-bold">100k+ publishers matched, -65% manual checks.</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Deployed autonomous multi-agent pipelines with Redis/PostgreSQL persistence, programmatic JSON-LD entity knowledge graphs, and content engines optimized for Perplexity, ChatGPT Search, and Google Gemini.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">pgvector RAG</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">GEO / AEO</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">Claude Code JIT</span>
              </div>
            </div>

            {/* Case 3: Paycord */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold">Paycord // Growe Group</span>
                <span className="text-xs text-slate-400 font-mono">03/2024 – 04/2026</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Automated Scoring & Market Intelligence Platform</h3>
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Problem</span>
                  <span className="text-slate-300 font-medium">Payment friction & slow competitive response.</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Action</span>
                  <span className="text-slate-300 font-medium">Built 300+ PSP scoring engine & resilient scraping pipelines.</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Result</span>
                  <span className="text-emerald-400 font-bold">+16% checkout conversion, 4-day validation cycles.</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Led 12+ engineers and data scientists, building real-time parsers with automated captcha handling and proxy rotation, and cutting payment friction in high-throughput transaction flows.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">High-Load Payments</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">Scraping Engine</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">R&D Leadership</span>
              </div>
            </div>

            {/* Case 4: LeadsMarket */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-mono font-semibold">LeadsMarket.com LLC, CA, USA</span>
                <span className="text-xs text-slate-400 font-mono">09/2021 – 05/2022</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Real-Time Auction Ping-Post & Document IDP</h3>
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Problem</span>
                  <span className="text-slate-300 font-medium">100k+ daily transaction auction latency & document bottleneck.</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Action</span>
                  <span className="text-slate-300 font-medium">Managed high-throughput ping-post & OCR vision pipelines.</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Result</span>
                  <span className="text-purple-400 font-bold">Sub-second auction routing & automated verification.</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Supervised real-time lead qualification auctions in insurance and lending, deploying OCR vision extraction with human-in-the-loop verification queues.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">Ping-Post Engine</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">Document IDP</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">FinTech Lead Gen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work History & Leadership Section */}
      <section id="experience" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              Career Timeline
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Work History & Experience</h2>
            <p className="text-slate-400">8+ years of engineering and technical product leadership from SpaceTech systems to autonomous AI agents.</p>
          </div>

          <div className="space-y-6">
            {/* Adsy.com */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6 relative">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">Adsy.com (High-Load B2B MarTech Platform)</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">AI Product Manager & Full-Stack AI Engineer</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">Wrocław, Poland</span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold">2026 – Present</span>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span><strong>Production Multi-Agent Systems:</strong> Architected autonomous agent pipelines with state persistence (Redis/PostgreSQL) and deterministic tool calling, eliminating hallucinations and reducing manual verification by 65%.</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span><strong>Modular Agent Skill Architecture:</strong> Engineered a Just-in-Time (JIT) 84-skill modular architecture for Claude Code & local agents, solving context window decay and optimizing inference latency.</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span><strong>Enterprise Hybrid Search (RAG):</strong> Implemented in-database RAG using pgvector (HNSW) + BM25 full-text search with Reciprocal Rank Fusion (RRF), cutting search latency by 45% with sub-1% retrieval errors.</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span><strong>Generative Engine Optimization (GEO/AEO):</strong> Deployed programmatic entity knowledge graphs (JSON-LD Schema.org) and content engines optimized for Perplexity, ChatGPT Search, and Google AI Overviews.</li>
              </ul>
            </div>

            {/* Pitch Avatar */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6 relative">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">Pitch Avatar Inc, Austria (Conversational AI & Interactive Lead Gen)</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">AI Product Owner & Conversational Systems Engineer</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">Wrocław, Poland</span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-mono font-bold">04/2026 – Present</span>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span><strong>Real-Time AI Streaming Avatars:</strong> Engineered interactive conversational video avatar pipelines with sub-second streaming, natural voice synthesis (ElevenLabs), and WebSockets (<a href="https://slides.pitchavatar.com/dkmrf" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">Live Demo</a>).</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span><strong>Autonomous Lead Scoring Engine:</strong> Launched an LLM analytics engine processing 50+ real-time session parameters for qualification, boosting accuracy by 35% and saving 15+ hrs/week of sales ops time.</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span><strong>Enterprise B2B Integrations:</strong> Built resilient two-way webhook sync with HubSpot, Salesforce, and Workday, accelerating lead conversion speed by 22%.</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span><strong>Monetization & Seat Model:</strong> Architected seat-based B2B subscription tier (Listener Seats), driving a +28% increase in B2B ARPU within 4 months.</li>
              </ul>
            </div>

            {/* Paycord */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6 relative">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">Paycord (Growe Group / Parimatch) | FinTech, iGaming & High-Load Payments</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">R&D Product Manager & Systems Architect</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">Warsaw, Poland</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">03/2024 – 04/2026</span>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span><strong>Automated Scoring & Ranking Engine:</strong> Engineered automated evaluation systems for 300+ merchants and PSPs, boosting checkout conversion by 16% and cutting payment friction.</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span><strong>Automated Scraping & Market Intelligence:</strong> Built real-time resilient web parsers and competitive monitoring pipelines with automated captcha handling and proxy rotation, accelerating strategic response by 50%.</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span><strong>Cross-Functional R&D Leadership:</strong> Led 12+ engineers and data scientists, slashing hypothesis validation cycles from 3 weeks to 4 days.</li>
              </ul>
            </div>

            {/* NDA */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6 relative">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">NDA | High-Load iGaming & Betting</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Senior Product Manager</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">Kyiv, Ukraine</span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-mono font-bold">05/2022 – 03/2024</span>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></span><strong>Revenue & GGR Optimization:</strong> Deployed AI-powered optimization tools for Gross Gaming Revenue, achieving a +14% uplift in ARPU.</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></span><strong>User Growth & CustDev:</strong> Conducted deep Customer Development across international payment segments, translating feedback into features that increased 30-day retention by 18%.</li>
              </ul>
            </div>

            {/* LeadsMarket */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6 relative">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">LeadsMarket.com LLC, CA, USA | FinTech, Lead Auctions & Document IDP</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Product Manager</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">Kyiv, Ukraine</span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-mono font-bold">09/2021 – 05/2022</span>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span><strong>Real-Time Auction & Ping-Post Engine:</strong> Managed high-throughput lead qualification systems handling 100k+ daily transactions.</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span><strong>Document OCR Parsing:</strong> Deployed automated OCR vision pipelines extracting structured financial data with human-in-the-loop review queues.</li>
              </ul>
            </div>

            {/* RemoteHub */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6 relative">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">RemoteHub Inc | Global SaaS & Two-Sided Marketplace</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Product Manager</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">New York, USA / Remote</span>
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-mono font-bold">06/2018 – 09/2021</span>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0"></span><strong>Scaled Two-Sided Marketplace Acquisition:</strong> Reduced Customer Acquisition Cost (CAC) by 45% and scaled Monthly Active Users (MAU) by +120%.</li>
              </ul>
            </div>

            {/* SpaceTech Yuzhnoye */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800/80 shadow-xl space-y-4 relative">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">Design Bureau "Yuzhnoye" (Rocket-Space Branch) | SpaceTech & Telemetry</span>
                  <h3 className="text-lg font-bold text-slate-200 mt-1">Engineer-Analyst</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-mono">Dnipro, Ukraine</span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-mono">12/2010 – 06/2014</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Architected and tested spacecraft navigation subsystems (MS-2-8, Sich-2-1), maintaining 99.9% telemetry compliance and system accuracy. Built rigorous engineering foundation in zero-defect fault tolerance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Stack Section */}
      <section id="skills" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Skills & Tech Stack</h2>
            <p className="text-slate-400">Comprehensive AI engineering stack backed by enterprise product management leadership.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AI Agents & Multi-Agent */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">AI & Agents</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">LangGraph</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">Claude Code SDK</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">MCP Servers</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">OpenAI Agents</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">AST Security</span>
              </div>
            </div>

            {/* RAG & Vectors */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">RAG & Search</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">pgvector (HNSW)</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">BM25 Lexical</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">Cross-Encoder</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">AEO / GEO</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">Prompt Caching</span>
              </div>
            </div>

            {/* Full-Stack & Backend */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Full-Stack & Data</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">Python (FastAPI)</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">TypeScript / Node</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">Next.js 15 / React</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">PostgreSQL / Supabase</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">Docker / Redis</span>
              </div>
            </div>

            {/* Credentials */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-cyan-400 font-mono">Oracle Agentic AI (2026)</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-indigo-400 font-mono">Microsoft MCP Azure</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-emerald-400 font-mono">GitHub Copilot Cert</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">DNU Master's (Physics)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <section id="contact" className="py-28 bg-gradient-to-t from-slate-950 to-slate-900 border-t border-slate-800 relative">
        <div className="absolute inset-0 bg-cyan-500/5 blur-[140px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-8">
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Let’s build production-grade<br />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">AI Systems together.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Available for Senior AI Systems Architect, Technical Product Lead, and AI Agent consulting contracts.
          </p>
          <div className="grid sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
            {/* Email */}
            <a
              href="mailto:shaforostov.e@gmail.com"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-all flex flex-col items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase">Email</span>
              <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors truncate max-w-full">shaforostov.e@gmail.com</span>
            </a>
            {/* Telegram */}
            <a
              href="https://t.me/erostov"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-all flex flex-col items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.195 1.006.132.832.943z"/>
                </svg>
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase">Telegram</span>
              <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">@erostov</span>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/yevhens-hue"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-all flex flex-col items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase">GitHub</span>
              <span className="text-xs font-bold text-white group-hover:text-indigo-400 transition-colors">yevhens-hue</span>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/shaforostov"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500 transition-all flex flex-col items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase">LinkedIn</span>
              <span className="text-xs font-bold text-white group-hover:text-purple-400 transition-colors">in/shaforostov</span>
            </a>
          </div>
          <div className="pt-12 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
            <div>© 2026 Yevhen Shaforostov. All rights reserved. · Wrocław, Poland 🇵🇱 (+48 452 885 004)</div>
            <div className="mt-4 sm:mt-0 flex gap-6">
              <a href="https://github.com/sponsors/yevhens-hue" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">Sponsor on GitHub 💜</a>
              <a href="#hero" className="hover:text-cyan-400 transition-colors">Back to Top ↑</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

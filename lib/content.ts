import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Metadata } from "next";

type ServiceGroup = { title: string; items: string[] };
type CaseStudy = {
  title: string;
  problem: string;
  action: string[];
  result: string[];
};
type WorkItem = {
  title: string;
  meta: string;
  bullets: string[];
};
type SkillGroup = { title: string; details: string };

export type PageContent = {
  heroTitle: string;
  heroBodyHtml: string;
  contactInline: string[];
  services: ServiceGroup[];
  achievements: string[];
  caseStudies: CaseStudy[];
  workHistory: WorkItem[];
  skillGroups: SkillGroup[];
  markets: string;
  contactIntro: string;
  contactItems: string[];
};

const CONTENT_PATH = path.join(process.cwd(), "content", "index.md");

export const renderMarkdown = (markdown: string) =>
  remark().use(html).processSync(markdown).toString();

const stripMarkdown = (value: string) =>
  value
    .replace(/\*\*/g, "")
    .replace(/__+/g, "")
    .replace(/`+/g, "")
    .trim();

const normalizeLines = (lines: string[]) =>
  lines
    .map((line) => line.trimEnd())
    .filter((line) => line.trim() !== "---");

const sectionMap = (body: string) => {
  const lines = normalizeLines(body.split(/\r?\n/));
  const sections: Record<string, string[]> = {};
  let current = "hero";
  sections[current] = [];

  lines.forEach((line) => {
    const match = line.match(/^##\s+(.+)/);
    if (match) {
      current = match[1].trim();
      sections[current] = [];
      return;
    }
    sections[current]?.push(line);
  });

  return sections;
};

const parseHero = (heroLines: string[]) => {
  const titleLineIndex = heroLines.findIndex((line) => line.startsWith("# "));
  const title = titleLineIndex >= 0 ? heroLines[titleLineIndex].replace(/^#\s+/, "") : "";
  const bodyLines = heroLines.slice(titleLineIndex + 1);
  const contactLineIndex = bodyLines.findIndex((line) => line.startsWith("**Contact:**"));
  const heroBodyLines = contactLineIndex >= 0 ? bodyLines.slice(0, contactLineIndex) : bodyLines;
  const heroBodyHtml = renderMarkdown(heroBodyLines.join("\n").trim());
  const contactItems =
    contactLineIndex >= 0
      ? bodyLines.slice(contactLineIndex + 1).filter((line) => line.startsWith("- "))
      : [];

  return {
    heroTitle: title,
    heroBodyHtml,
    contactInline: contactItems.map((line) => line.replace(/^- /, "").trim())
  };
};

const parseServices = (lines: string[]) => {
  const services: ServiceGroup[] = [];
  let current: ServiceGroup | null = null;

  lines.forEach((line) => {
    const match = line.match(/^###\s+(.+)/);
    if (match) {
      current = { title: match[1].trim(), items: [] };
      services.push(current);
      return;
    }
    if (line.startsWith("- ") && current) {
      current.items.push(line.replace(/^- /, "").trim());
    }
  });

  return services;
};

const parseAchievements = (lines: string[]) =>
  lines.filter((line) => line.startsWith("- ")).map((line) => line.replace(/^- /, "").trim());

const parseCaseStudies = (lines: string[]) => {
  const cases: CaseStudy[] = [];
  let current: CaseStudy | null = null;
  let activeKey: "problem" | "action" | "result" | null = null;

  const flushIfNeeded = () => {
    if (current) {
      cases.push(current);
      current = null;
    }
    activeKey = null;
  };

  lines.forEach((line) => {
    const headingMatch = line.match(/^###\s+(.+)/);
    if (headingMatch) {
      flushIfNeeded();
      current = { title: headingMatch[1].trim(), problem: "", action: [], result: [] };
      return;
    }

    if (!current) {
      return;
    }

    const labelMatch = line.match(/^\*\*(Problem|Action|Result):\*\*/i);
    if (labelMatch) {
      const label = labelMatch[1].toLowerCase();
      activeKey = label === "problem" ? "problem" : label === "action" ? "action" : "result";
      const remainder = line.replace(/^\*\*(Problem|Action|Result):\*\*/i, "").trim();
      if (remainder && activeKey === "problem") {
        current.problem = remainder;
      }
      return;
    }

    if (line.startsWith("- ") && activeKey && current) {
      const value = line.replace(/^- /, "").trim();
      if (activeKey === "action") {
        current.action.push(value);
      } else if (activeKey === "result") {
        current.result.push(value);
      } else if (!current.problem) {
        current.problem = value;
      }
      return;
    }

    if (line.trim() && activeKey === "problem") {
      current.problem = line.trim();
    }
  });

  flushIfNeeded();
  return cases;
};

const parseWorkHistory = (lines: string[]) => {
  const items: WorkItem[] = [];
  let current: WorkItem | null = null;

  lines.forEach((line) => {
    const headingMatch = line.match(/^###\s+(.+)/);
    if (headingMatch) {
      if (current) {
        items.push(current);
      }
      current = { title: headingMatch[1].trim(), meta: "", bullets: [] };
      return;
    }

    if (!current) {
      return;
    }

    if (line.startsWith("**") && line.endsWith("**")) {
      current.meta = stripMarkdown(line);
      return;
    }

    if (line.startsWith("- ")) {
      current.bullets.push(line.replace(/^- /, "").trim());
    }
  });

  if (current) {
    items.push(current);
  }

  return items;
};

const parseSkills = (lines: string[]) => {
  const groups: SkillGroup[] = [];
  let current: SkillGroup | null = null;

  lines.forEach((line) => {
    const labelMatch = line.match(/^\*\*(.+):\*\*/);
    if (labelMatch) {
      if (current) {
        groups.push(current);
      }
      current = { title: stripMarkdown(labelMatch[1]), details: "" };
      return;
    }

    if (current && line.trim()) {
      current.details = current.details ? `${current.details} ${line.trim()}` : line.trim();
    }
  });

  if (current) {
    groups.push(current);
  }

  return groups;
};

const parseMarkets = (lines: string[]) =>
  lines
    .filter((line) => line.trim())
    .map((line) => line.trim())
    .join(" ");

const parseContact = (lines: string[]) => {
  const introLine = lines.find((line) => line.startsWith("**"));
  const intro = introLine ? stripMarkdown(introLine) : "";
  const items = lines.filter((line) => line.startsWith("- ")).map((line) => line.replace(/^- /, ""));
  return { intro, items };
};

export const getSiteMetadata = (): Metadata => {
  const raw = fs.readFileSync(CONTENT_PATH, "utf8");
  const { data } = matter(raw);

  const title = data.title ?? "Yevhen Shaforostov";
  const description =
    data.description ??
    "Senior Product Manager / Head of Product building scalable FinTech & Payment products with AI automation.";

  return {
    title,
    description,
    metadataBase: new URL("https://shaforostov.pro"),
    openGraph: {
      title,
      description,
      type: "website",
      url: "https://shaforostov.pro",
      images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.svg"]
    }
  };
};

export const getPageContent = (): PageContent => {
  const raw = fs.readFileSync(CONTENT_PATH, "utf8");
  const { content } = matter(raw);
  const sections = sectionMap(content);

  const hero = parseHero(sections.hero ?? []);
  const services = parseServices(sections["What I Do & Who I Help"] ?? []);
  const achievements = parseAchievements(sections["Key Achievements"] ?? []);
  const caseStudies = parseCaseStudies(sections["Case Studies"] ?? []);
  const workHistory = parseWorkHistory(sections["Work History"] ?? []);
  const skillGroups = parseSkills(sections["Skills & Stack"] ?? []);
  const markets = parseMarkets(sections["Markets & Domains"] ?? []);
  const contact = parseContact(sections.Contact ?? []);

  return {
    heroTitle: hero.heroTitle,
    heroBodyHtml: hero.heroBodyHtml,
    contactInline: hero.contactInline,
    services,
    achievements,
    caseStudies,
    workHistory,
    skillGroups,
    markets,
    contactIntro: contact.intro,
    contactItems: contact.items
  };
};

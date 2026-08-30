---
title: Євген Шафоростов — Senior AI Agent Architect & Full-Stack AI Engineer | AI Product Lead
description: Senior AI Systems Architect & Technical Product Lead із 8+ роками досвіду інженерії автономних мультиагентних систем, enterprise RAG та високонавантажених SaaS/FinTech бекендів.
---

# Євген Шафоростов
**Senior AI Agent Architect & Full-Stack AI Engineer | AI Product Lead**

Senior AI Systems Architect & Technical Product Lead із 8+ роками досвіду інженерії автономних мультиагентних флотів, корпоративних пошукових RAG-рушіїв та високонавантажених SaaS/FinTech бекендів. Глибоке практичне володіння LangGraph, Model Context Protocol (MCP), Claude API/SDK, OpenAI Agents SDK, pgvector гібридним пошуком та стейтфул 3-рівневою пам'яттю. Поєднує промислову архітектуру ПЗ (TypeScript, Python, FastAPI, Docker) із продуктовим лідерством на основі даних (GoPractice, Unit Economics, масштабування ARPU). Автор модульної архітектури Claude Agent Architecture та Oracle Certified in Agentic AI Foundations.

**Контакт:**  
- Локація: Вроцлав, Польща 🇵🇱  
- Телефон: +48 452 885 004  
- Email: shaforostov.e@gmail.com  
- Telegram: [@erostov](https://t.me/erostov)  
- LinkedIn: [linkedin.com/in/shaforostov](https://linkedin.com/in/shaforostov)  
- GitHub: [github.com/yevhens-hue](https://github.com/yevhens-hue)  
- Спонсорство: [github.com/sponsors/yevhens-hue](https://github.com/sponsors/yevhens-hue)  

---

## Що роблю і кому допомагаю

### AI-агенти та автономні топології
- Мультиагентна оркестрація на LangGraph, Claude Code SDK та Model Context Protocol (MCP сервери та клієнти)
- Детермінований контроль інструментів, AST-сканування загроз та Human-in-the-Loop (HITL) гейти затвердження
- Патерни делегування під-агентам та подієво-орієнтовані бекенд-пайплайни (Redis Redlock, Streams, BullMQ)

### Корпоративний RAG та векторні архітектури (GEO/AEO)
- Внутрішньобазовий гібридний пошук (pgvector HNSW + повнотекстовий BM25 + Reciprocal Rank Fusion RRF)
- Переранжування Cross-Encoder, контекстне кешування та оптичне розпізнавання документів (Claude 3.5 Sonnet / Azure)
- Оптимізація під генеративні рушії (GEO/AEO) для Perplexity, ChatGPT Search та Google AI Overviews

### Реалтайм голосовий та відео ШІ
- Інтерактивні пайплайни розмовних AI-відеоаватарів із субсекундним стрімінгом (PitchAvatar)
- Природний синтез голосу (ElevenLabs), WebSockets, Silero VAD та довготривала міжсесійна пам'ять
- Автономні рушії кваліфікації сесій та лід-скорингу в реальному часі

### Високонавантажені SaaS, FinTech та B2B маркетплейси
- Продуктовий дискавері на високій швидкості, перехід MVP → PMF та оптимізація unit-економіки (GoPractice)
- Високопродуктивні аукціонні ping-post рушії лідів (100k+ щоденних транзакцій) та платіжна маршрутизація (300+ PSP)
- Автоматизований скрапінг, обхід капчі та системи конкурентної розвідки

---

## Ключові досягнення

- **Oracle Certified Associate: Agentic AI Foundations** (1Z0-1157-26, серпень 2026)
- **Microsoft Applied Skills:** Інтеграція інструментів MCP з Azure AI Agents (серпень 2026)
- **Microsoft & GitHub Credential:** Розробка кодових функцій за допомогою GitHub Copilot (серпень 2026)
- **AI Product Manager & Full-Stack AI Engineer в Adsy.com** — автономні мультиагентні системи та pgvector RAG
- **AI Product Owner & Conversational Systems Engineer в PitchAvatar** — реалтайм відео-аватари із субсекундним стрімінгом ([GitHub Architecture](https://github.com/yevhens-hue/Pitch-Avatar))
- **R&D Product Manager в Paycord** — автоматизовані системи оцінки для 300+ мерчантів та PSP (+16% конверсії)
- **Автор відкритого репозиторію [Claude Skills Starter Kit](https://github.com/yevhens-hue/claude-skills-starter-kit)** на GitHub
- **Інженерний бекграунд у SpaceTech** у КБ «Південне» (підсистеми навігації космічних апаратів МС-2-8, Січ-2-1)

---

## Кейси

### PitchAvatar — Пайплайн розмовних AI-відеоаватарів у реальному часі
**Проблема:**  
Традиційні відеопрезентації статичні та не взаємодіють із глядачем, що спричиняє високий відтік у продажах та навчанні.

**Дії:**  
- Спроєктував стейтфул-пайплайни розмовних відеоаватарів із субсекундним стрімінгом, синтезом мови ElevenLabs та WebSockets
- Запустив аналітичний LLM-рушій, що обробляє 50+ параметрів сесії для кваліфікації (+35% точності, економія 15+ год/тиждень)
- Побудував надійну двосторонню вебхук-синхронізацію з HubSpot, Salesforce та Workday, прискоривши конверсію лідів на 22%
- Спроєктував модель підписки на основі робочих місць (Listener Seats), що забезпечила +28% зростання B2B ARPU за 4 місяці ([GitHub Architecture](https://github.com/yevhens-hue/Pitch-Avatar))

**Результат:**  
Субсекундна затримка діалогу, 4-кратне зростання залученості та комерційний реліз для корпоративних клієнтів.

---

### Adsy.com — Продакшн мультиагентні системи та корпоративний Hybrid RAG
**Проблема:**  
Деградація контекстного вікна, висока затримка інференсу та ручна верифікація паблішерів у B2B MarTech маркетплейсі.

**Дії:**  
- Спроєктував автономні агентні пайплайни зі збереженням стану (Redis/PostgreSQL) та детермінованим викликом інструментів (-65% ручної перевірки)
- Розробив модульну Just-in-Time архітектуру на 84 скіли для Claude Code та локальних агентів
- Впровадив внутрішньобазовий RAG на pgvector (HNSW) + BM25 із Reciprocal Rank Fusion (RRF), знизивши затримку пошуку на 45%
- Розгорнув програмні графи знань сутностей (JSON-LD Schema.org) для генеративного пошуку Perplexity, ChatGPT Search та Google AI Overviews

**Результат:**  
Автоматична обробка 100,000+ сайтів, прискорення матчингу на 65%, масштабована багатокористувацька архітектура.

---

### Paycord (Growe Group / Parimatch) — Автоматизований скоринг та аналітика ринку
**Проблема:**  
Платіжне тертя, високий відсоток відхилень на чекауті та фрагментована аналітика платіжного ринку.

**Дії:**  
- Спроєктував автоматизовані системи оцінки для 300+ мерчантів та PSP, підвищивши конверсію чекауту на 16%
- Побудував стійкі парсери в реальному часі з автоматичним обходом капчі та ротацією проксі, прискоривши стратегічну реакцію на 50%
- Очолював 12+ інженерів та дата-сайєнтистів, скоротивши цикли валідації гіпотез із 3 тижнів до 4 днів

**Результат:**  
+16% зростання конверсії в успішну оплату та мільйонні обсяги оброблених транзакцій.

---

### LeadsMarket.com — Аукціонний Ping-Post реального часу та Document IDP
**Проблема:**  
Затримка в кваліфікації лідів при високому навантаженні та повільна ручна перевірка фінансових документів.

**Дії:**  
- Керував високонавантаженими системами кваліфікації лідів аукціонного типу (ping-post), що обробляли 100k+ щоденних транзакцій
- Розгорнув автоматизовані пайплайни OCR-бачення для вилучення структурованих фінансових даних із чергами ручної перевірки (HITL)

**Результат:**  
Субсекундна маршрутизація лідів на масштабі 100k+ транзакцій/день із автоматичною верифікацією документів.

---

## Досвід роботи

### AI Product Manager & Full-Stack AI Engineer
**Adsy.com (High-Load B2B MarTech & Content Platform) · 2026 – Зараз | Вроцлав, Польща**  
- **Production Multi-Agent Systems:** Спроєктував автономні агентні пайплайни зі збереженням стану (Redis/PostgreSQL) та детермінованим викликом інструментів, усунувши галюцинації та зменшивши ручну верифікацію на 65%.
- **Modular Agent Skill Architecture:** Розробив Just-in-Time (JIT) 84-модульну архітектуру скілів для Claude Code, усунувши деградацію контекстного вікна.
- **Enterprise Hybrid Search (RAG):** Впровадив in-database RAG на pgvector (HNSW) + BM25 з Reciprocal Rank Fusion (RRF), скоротивши затримку пошуку на 45%.
- **Generative Engine Optimization (GEO/AEO):** Розгорнув програмні графи сутностей (JSON-LD Schema.org) для генеративних пошуковиків Perplexity, ChatGPT Search та Google AI Overviews.

### AI Product Owner & Conversational Systems Engineer
**Pitch Avatar Inc, Austria (Conversational AI & Interactive Lead Generation) · 04/2026 – Зараз | Вроцлав, Польща**  
- **Real-Time AI Streaming Avatars:** Спроєктував інтерактивні пайплайни відеоаватарів із субсекундним стрімінгом, синтезом мови (ElevenLabs) та WebSockets.
- **Autonomous Lead Scoring Engine:** Запустив LLM-аналітику, яка обробляє 50+ параметрів сесії для кваліфікації (+35% точності, економія 15+ год/тиждень).
- **Enterprise B2B Integrations:** Побудував надійну двосторонню вебхук-синхронізацію з HubSpot, Salesforce та Workday, прискоривши конверсію на 22%.
- **Monetization & Seat Model:** Спроєктував модель підписки на робочі місця (Listener Seats), забезпечивши +28% зростання B2B ARPU за 4 місяці ([GitHub Architecture](https://github.com/yevhens-hue/Pitch-Avatar)).

### R&D Product Manager & Systems Architect
**Paycord (Growe Group / Parimatch) | FinTech, iGaming & High-Load Payments · 03/2024 – 04/2026 | Варшава, Польща**  
- **Automated Scoring & Ranking Engine:** Спроєктував автоматизовані системи оцінки для 300+ мерчантів та PSP, підвищивши конверсію чекауту на 16%.
- **Automated Scraping & Market Intelligence:** Побудував стійкі парсери з автоматичним обходом капчі та ротацією проксі, прискоривши реакцію на 50%.
- **Cross-Functional R&D Leadership:** Очолював 12+ інженерів та дата-сайєнтистів, скоротивши валідацію гіпотез із 3 тижнів до 4 днів.

### Senior Product Manager
**NDA | High-Load iGaming & Betting · 05/2022 – 03/2024 | Київ, Україна**  
- **Revenue & GGR Optimization:** Впровадив інструменти оптимізації Gross Gaming Revenue на базі ШІ, досягнувши +14% зростання ARPU.
- **User Growth & CustDev:** Провів масштабний Customer Development на міжнародних платіжних сегментах, збільшивши 30-денне утримання на 18%.

### Product Manager
**LeadsMarket.com LLC, CA, USA | FinTech, Lead Auctions & Document IDP · 09/2021 – 05/2022 | Київ, Україна**  
- **Real-Time Auction & Ping-Post Engine:** Керував високонавантаженими системами кваліфікації лідів (100k+ щоденних транзакцій).
- **Document OCR Parsing:** Розгорнув пайплайни оптичного розпізнавання документів для вилучення структурованих фінансових даних із чергами HITL.

### Product Manager
**RemoteHub Inc | Global SaaS & Two-Sided Marketplace · 06/2018 – 09/2021 | Нью-Йорк, США / Віддалено**  
- **Масштабування маркетплейсу:** Знизив вартість залучення клієнта (CAC) на 45% та масштабував кількість активних користувачів (MAU) на +120%.

### Інженер-аналітик
**КБ «Південне» (Ракетно-космічна галузь) | SpaceTech & Telemetry · 12/2010 – 06/2014 | Дніпро, Україна**  
- **Підсистеми навігації космічних апаратів:** Проєктував та тестував навігаційні підсистеми космічних апаратів (МС-2-8, Січ-2-1), забезпечуючи 99.9% відповідності телеметрії.

---

## Навички та стек

**AI Agents & Multi-Agent Systems:** LangGraph, LangChain, Model Context Protocol (MCP Servers & Clients), Claude API / Anthropic SDK, OpenAI Agents SDK, CrewAI, Subagent Delegation Patterns, Tool-Calling Guardrails, AST Threat Scanning, HITL Approval Gates  
**RAG & Vector Architectures:** pgvector (HNSW Indexing), Qdrant, ChromaDB, Hybrid Search (Dense Vectors + BM25 Lexical + Reciprocal Rank Fusion RRF), Cross-Encoder Re-ranking, Context Caching, Document OCR Vision (Claude 3.5 Sonnet / Azure)  
**Full-Stack & Data Engineering:** TypeScript/Node.js, Python (FastAPI, Celery, PyMuPDF, Playwright Stealth), Redis (Redlock, Streams), PostgreSQL (JSONB, RLS), Docker, WebSockets, CI/CD, Telegram Mini Apps (TMA/TON)  
**Product & AI Governance:** Token Cost Forensics (-60% via Hybrid Local/Cloud Routing), Eval-Driven Development (EDD, LLM-as-a-Judge), Product Roadmaps, RICE Prioritization, A/B Testing  

---

## Освіта

**Дніпровський національний університет імені Олеся Гончара (ДНУ) · 2004 – 2010**  
Магістр, Інформаційна безпека та комп'ютерні науки | Фізико-технічний факультет

---

## Сертифікати

- **Oracle Certified Associate:** Agentic AI Foundations (1Z0-1157-26, серпень 2026)
- **Microsoft Applied Skills:** Інтеграція інструментів MCP з Azure AI Agents (серпень 2026)
- **Microsoft & GitHub Credential:** Розробка кодових функцій за допомогою GitHub Copilot (серпень 2026)
- **AI FOR BUSINESS** — robotdreams.cc (2025) | **Startup School** — Y Combinator (2021)
- **Product Management Based on Analytics** — GoPractice Simulator | **Project Management** — Skillsetter.io

---

## Ринки та домени

Автономні AI-агенти · Корпоративний RAG та AI-пошук (GEO/AEO) · Реалтайм розмовний ШІ & WebRTC · FinTech та платежі · Високонавантажені B2B маркетплейси · Інтелектуальна обробка документів (IDP) · SpaceTech

---

## Контакт

**Створюймо надійні та масштабовані AI-системи разом.**  
- Локація: Вроцлав, Польща 🇵🇱  
- Телефон: +48 452 885 004  
- Email: shaforostov.e@gmail.com  
- Telegram: [@erostov](https://t.me/erostov)  
- LinkedIn: [linkedin.com/in/shaforostov](https://linkedin.com/in/shaforostov)  
- GitHub: [github.com/yevhens-hue](https://github.com/yevhens-hue)  
- Спонсорство: [github.com/sponsors/yevhens-hue](https://github.com/sponsors/yevhens-hue)  

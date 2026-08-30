---
title: Євген Шафоростов — AI Product Manager & Senior AI Systems Architect
description: AI Product Manager & Senior AI Systems Architect. Розробка автономних мультиагентних систем, pgvector Hybrid RAG та платформ розмовного штучного інтелекту. Oracle Certified (2026).
---

# Євген Шафоростов
**AI Product Manager & Senior AI Systems Architect**

Oracle Certified Associate: Agentic AI Foundations (2026) · AI PM в Adsy.com · Архітектор розмовного ШІ в PitchAvatar.

10+ років інженерного та продуктового лідерства — проєктування автономних AI-агентів, пошукових RAG-систем, WebRTC-пайплайнів для інтерактивних відео-аватарів та високонавантаженої платіжної інфраструктури на глобальних ринках.

**Контакт:**  
- Email: shaforostov.e@gmail.com  
- GitHub: [github.com/yevhens-hue](https://github.com/yevhens-hue)  
- Telegram: [@erostov](https://t.me/erostov)  
- LinkedIn: [linkedin.com/in/shaforostov](https://linkedin.com/in/shaforostov)  
- Спонсорство: [github.com/sponsors/yevhens-hue](https://github.com/sponsors/yevhens-hue)  

---

## Що роблю і кому допомагаю

### AI-агенти та автономні топології
- Мультиагентна оркестрація на LangGraph, Claude Code SDK та Model Context Protocol (MCP)
- Детермінований контроль виконання інструментів, AST-валідація та делегування під-агентам
- Подієво-орієнтовані черги фонової обробки на Redis Redlock та BullMQ

### Корпоративний RAG та AI-пошук (AEO/GEO)
- Гібридний векторний пошук (pgvector HNSW + повнотекстовий TSVECTOR BM25)
- Reciprocal Rank Fusion (RRF), переранжування Cross-Encoder та фільтрація прав доступу RBAC
- Оптимізація під генеративні пошуковики (AEO/GEO) для Perplexity, ChatGPT Search та Google AI Overviews

### Реалтайм голосовий та відео ШІ
- WebRTC-стрімінг із низькою задержкою (<500мс) на LiveKit, Cartesia та ElevenLabs
- Інтерактивні розмовні AI-аватари та відео-презентери (PitchAvatar)
- Обробка переривань користувачем (VAD) та довготривала пам'ять сесій

### Масштабування та B2B маркетплейси
- Швидкий продуктовий дискавері, перехід MVP → Scale та оптимізація unit-економіки
- Автоматизоване збагачення даних, кваліфікація лідів та синхронізація з CRM
- Високонавантажена маршрутизація платежів та антифрод-системи

---

## Ключові досягнення

- **Oracle Certified Associate: Agentic AI Foundations (2026)**
- **Lead AI Architect & Product Manager в Adsy.com** — автономний AI-матчинг, дата-пайплайни та MarTech-маховики
- **Співавтор архітектури PitchAvatar** — платформа інтерактивних розмовних AI-аватарів із затримкою <500мс ([Live Demo](https://slides.pitchavatar.com/dkmrf))
- **Автор 198+ продакшн AI-скілів** та творець **[Claude Skills Starter Kit](https://github.com/yevhens-hue/claude-skills-starter-kit)** на GitHub
- **Розробка та запуск високонавантаженої маршрутизації платежів** через глобальні PSP
- **Інженерний бекграунд у SpaceTech** (КБ «Південне»)

---

## Кейси

### PitchAvatar — Платформа інтерактивних розмовних AI-аватарів
**Проблема:**  
Традиційні відеопрезентації статичні та не взаємодіють із глядачем, що знижує конверсію в продажах та навчанні.

**Дії:**  
- Спроєктував стейтфул-пайплайн розмовного ШІ, який поєднує реалтайм WebRTC-стрімінг та LLM-міркування
- Інтегрував синтез мови ElevenLabs із буферизацією аудіо (<500мс) та розпізнаванням переривань Silero VAD
- Створив інтерактивний інтерфейс презентера, де глядачі ставлять голосові та текстові питання, отримуючи живі відповіді від аватара ([Live Demo](https://slides.pitchavatar.com/dkmrf))

**Результат:**  
Відповідь аватара менш ніж за 500мс, 4-кратне зростання залученості та успішний реліз для корпоративних клієнтів.

---

### Claude AI Skills & Мультиагентний фреймворк
**Проблема:**  
AI-асистенти для кодингу та автономні агенти роблять помилки на продакшні через неструктуровані промпти та галюцинації.

**Дії:**  
- Розробив модульний фреймворк із 198+ готових плейбуків SKILL.md для Claude Code, Antigravity та Cursor
- Впровадив суворі Pydantic-схеми, AST-інспекцію параметрів та гейти підтвердження деструктивних дій
- Опублікував відкритий репозиторій **Claude Skills Starter Kit** на GitHub із 20 базовими скілами (LangGraph, pgvector RAG, TDD)

**Результат:**  
Використовується сотнями AI-інженерів, зниження помилок агентів на 90%, запуск на GitHub Sponsors та Gumroad.

---

### Adsy.com — Автоматизований AI-пайплайн ринкової аналітики
**Проблема:**  
Ручна верифікація паблішерів, фрагментована атрибуція та повільний підбір у масштабному B2B маркетплейсі.

**Дії:**  
- Побудував автоматизовані AI-пайплайни збору та валідації метрик доменного авторитету й трафіку
- Впровадив гібридний пошук pgvector для миттєвого семантичного підбору між рекламодавцями та паблішерами
- Розгорнув кешування в Redis та черги задач Celery для високої пропускної здатності

**Результат:**  
Автоматична обробка 100,000+ сайтів, прискорення матчингу на 65%, масштабована багатокористувацька архітектура.

---

### Високонавантажена платіжна інфраструктура
**Проблема:**  
Збої платежів, високий відсоток відхилень та неефективна маршрутизація в транскордонних транзакціях.

**Дії:**  
- Спроєктував динамічну каскадну маршрутизацію між PSP на основі успішності платежів у реальному часі
- Оптимізував звірку UTR, QR та банківських переказів з ідемпотентними вебхуками
- Впровадив антифрод-скоринг та правила придушення чарджбеків

**Результат:**  
Суттєве зростання конверсії в успішну оплату, 99.9% аптайм та мільйонні обсяги оброблених транзакцій.

---

## Досвід роботи

### Lead AI Product Manager & Full-Stack AI Engineer
**Adsy.com · 2024 – Зараз**  
- Керівництво AI/LLM архітектурами, автоматизованими дата-пайплайнами, pgvector RAG та маркетплейс-маховиками
- Управління наскрізною доставкою продукту, стратегією роадмапу та спринтами інженерної команди

### AI Systems & Conversational Video Architect
**PitchAvatar · 2025 – Зараз**  
- Проєктування розмовних AI-аватарів, WebRTC-стрімінгу та інтелектуального голосового діалогу
- Розробка фронтенд-презентера з низькою затримкою та мультиагентного рушія відповідей ([Live Demo](https://slides.pitchavatar.com/dkmrf))

### Head of Product & Lead Architect (FinTech & B2B Platforms)
**LeadsMarket / Paycord · 2020 – 2024**  
- Керівництво міжнародними командами (10+ синьйор-розробників та дата-інженерів)
- Масштабування аукціонних платформ генерації лідів, платіжних шлюзів та збагачення даних

### Інженер систем космічних апаратів
**КБ «Південне» · 2012 – 2018**  
- Інженерне проєктування, математичне моделювання та аналіз телеметрії для аерокосмічних систем
- Глибокий фундамент системного мислення, нульової толерантності до дефектів та відмовостійкості

---

## Навички та стек

**AI та мультиагенти:** LangGraph, LangChain, Claude Code SDK, Model Context Protocol (MCP), OpenAI Swarm, LlamaIndex, Prompt Caching, Eval-Driven Development (EDD)  
**RAG та векторний пошук:** pgvector, Qdrant, ChromaDB, Hybrid Search (BM25 + RRF), Cross-Encoder Reranking, AEO/GEO пошукова оптимізація (Perplexity, Gemini)  
**Голосовий та відео ШІ:** LiveKit WebRTC, Cartesia Sonic, Deepgram Nova-2, ElevenLabs, Silero VAD, PitchAvatar  
**Бекенд та дані:** Python (FastAPI, Celery, Pydantic), Node.js / TypeScript, PostgreSQL, Supabase, Redis, Docker, n8n, CI/CD  
**Фронтенд та веб:** Next.js 15, React.js, TypeScript, Tailwind CSS, WebSockets, адаптивний дизайн  

---

## Сертифікати

- **Oracle Certified Associate:** Agentic AI Foundations (2026)
- **Advanced Systems Architecture & Prompt Engineering**

---

## Ринки та домени

Автономні AI-агенти · Корпоративний RAG та AI-пошук · Реалтайм розмовний ШІ & WebRTC · FinTech та платежі · B2B маркетплейси · Інтелектуальна обробка документів (IDP) · SpaceTech

---

## Контакт

**Створюймо надійні та масштабовані AI-системи разом.**  
- Email: shaforostov.e@gmail.com  
- GitHub: [github.com/yevhens-hue](https://github.com/yevhens-hue)  
- Telegram: [@erostov](https://t.me/erostov)  
- LinkedIn: [linkedin.com/in/shaforostov](https://linkedin.com/in/shaforostov)  
- GitHub Sponsors: [github.com/sponsors/yevhens-hue](https://github.com/sponsors/yevhens-hue)  
- Локація: Вроцлав, Польща 🇵🇱

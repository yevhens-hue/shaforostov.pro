# shaforostov.pro

Одностраничный сайт‑резюме (Next.js), оптимизированный для мгновенной загрузки и деплоя на Render как **Static Site**.

## Оптимизация

Сайт настроен на **Static Site Generation (SSG)**. Это означает:
1.  **0мс время запуска**: Сайт не «засыпает» и доступен мгновенно.
2.  **CDN**: Контент отдается максимально быстро из ближайшей точки к пользователю.
3.  **Бесплатно**: Static Sites на Render бесплатны и не требуют «пингеров» (UptimeRobot/Cron-job).

## Deploy на Render

1.  Создайте новый **Static Site** в Render.
2.  Подключите ваш GitHub репозиторий.
3.  Render автоматически применит настройки из `render.yaml`:
    - **Build Command**: `npm install && npm run build`
    - **Publish Directory**: `out`

## Подключение домена

1.  В Render откройте **Settings → Custom Domains** и добавьте `shaforostov.pro`.
2.  Следуйте инструкциям Render для настройки DNS (A-запись и CNAME).

## Локальный запуск

Для разработки:
```bash
npm run dev
```

Для проверки финальной сборки:
```bash
npm run build
npx serve out
```


<!-- activity-sync: 2026-08-28 -->


<!-- activity-sync: 2026-08-28 -->


<!-- activity-sync: 2026-08-29 -->

# shaforostov.pro

Одностраничный сайт‑резюме (RU/EN), готовый к деплою на Render.

## Deploy на Render

1. Создайте новый **Static Site** в Render и подключите репозиторий.
2. Build Command: оставить пустым.
3. Publish Directory: `.` (корень проекта).
4. Render автоматически подхватит `render.yaml`.

## Подключение домена

1. В Render откройте **Settings → Custom Domains** и добавьте `shaforostov.pro` и `www.shaforostov.pro`.
2. Render покажет нужные DNS записи:
   - для `www` обычно **CNAME** на домен Render;
   - для корневого домена обычно **A/ANAME** — используйте значения, которые покажет Render.
3. Примените записи в DNS‑панели домена и дождитесь обновления (обычно до 24 часов).

## Аналитика

Для включения аналитики задайте в `index.html` атрибуты `data-analytics-url` и `data-analytics-id` у тега `<body>`.
Пример для Umami:

```
data-analytics-url="https://analytics.example.com/script.js"
data-analytics-id="YOUR-WEBSITE-ID"
```

## Локальный запуск

Откройте `index.html` в браузере или запустите простой статический сервер:

```bash
python3 -m http.server 8080
```

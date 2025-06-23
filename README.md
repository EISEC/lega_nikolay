# 🚀 Modern Landing Page - Next.js Project

Современный лендинг-сайт, созданный с использованием актуальных технологий и лучших практик веб-разработки.

## 🛠 Технологический стек

- **Next.js 15** - React фреймворк с App Router
- **TypeScript** - Строгая типизация
- **Tailwind CSS** - Utility-first CSS фреймворк
- **React Hook Form** - Эффективная работа с формами
- **Zod** - Валидация схем данных
- **Axios** - HTTP клиент для API запросов

## ✨ Особенности

- 📱 **Полностью адаптивный дизайн** - отлично выглядит на всех устройствах
- ⚡ **Высокая производительность** - оптимизировано для скорости загрузки
- 🎨 **Современный UI/UX** - красивый и интуитивно понятный интерфейс
- 🔧 **SEO оптимизация** - настроенные мета-теги и структура
- 📝 **Валидация форм** - клиентская и серверная валидация данных
- 🚀 **API интеграция** - готовая система обработки форм
- 🎯 **TypeScript** - полная типизация для надежности кода

## 📦 Установка и запуск

1. **Клонируйте репозиторий:**
   ```bash
   git clone <repository-url>
   cd lega_nikolay
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Запустите проект в режиме разработки:**
   ```bash
   npm run dev
   ```

4. **Откройте в браузере:**
   ```
   http://localhost:3000
   ```

## 📁 Структура проекта

```
src/
├── app/                  # App Router (Next.js 13+)
│   ├── api/             # API routes
│   │   └── contact/     # Contact form endpoint
│   ├── globals.css      # Глобальные стили
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Главная страница
├── components/          # React компоненты
│   ├── Hero.tsx         # Hero секция
│   ├── Features.tsx     # Секция услуг
│   ├── ContactForm.tsx  # Контактная форма
│   ├── Footer.tsx       # Подвал сайта
│   └── Navigation.tsx   # Навигация
├── lib/                 # Утилиты и помощники
│   └── utils.ts         # Общие функции
└── public/              # Статические файлы
    ├── svg/             # SVG изображения из Figma
    │   ├── icons/       # Иконки
    │   ├── logos/       # Логотипы
    │   ├── illustrations/ # Иллюстрации
    │   └── ui/          # UI элементы
    └── img/             # Растровые изображения
        ├── photos/      # Фотографии
        ├── backgrounds/ # Фоновые изображения
        ├── products/    # Изображения товаров
        └── team/        # Фото команды
```

## 🔧 Доступные команды

```bash
# Разработка
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm start

# Проверка типов
npm run type-check

# Линтинг
npm run lint
```

## 📝 Компоненты лендинга

### 🎯 Hero секция
- Привлекательный заголовок с градиентом
- Статистика достижений
- Call-to-action кнопки
- Полностью адаптивная верстка

### 🛠 Секция услуг (Features)
- Карточки с описанием услуг
- Иконки и анимации при наведении
- Адаптивная сетка

### 📬 Контактная форма
- Валидация через Zod
- React Hook Form для оптимизации
- Обработка ошибок
- Успешная отправка с уведомлениями

### 🧭 Навигация
- Фиксированная навигация
- Smooth scroll к секциям
- Мобильное меню
- Backdrop blur эффект

## 🎨 Кастомизация

### Цвета и стили
Основные цвета определены в `tailwind.config.js` и могут быть легко изменены:

```javascript
// Основные цвета проекта
primary: '#2563eb',    // blue-600
secondary: '#7c3aed',  // purple-600
```

### Контент
Весь контент легко редактируется в соответствующих компонентах:
- Заголовки и описания в `Hero.tsx`
- Список услуг в `Features.tsx`
- Контактная информация в `ContactForm.tsx`

## 🚀 Развертывание

### Vercel (рекомендуется)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Загрузите папку .next на Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📧 API интеграция

Проект включает готовый API endpoint для обработки контактных форм:

```typescript
// src/app/api/contact/route.ts
export async function POST(request: NextRequest) {
  // Валидация данных через Zod
  // Обработка формы
  // Отправка email (настраивается)
}
```

## 🔐 Переменные окружения

Создайте файл `.env.local`:

```env
# Для отправки email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Для интеграций
TELEGRAM_BOT_TOKEN=your-bot-token
SLACK_WEBHOOK_URL=your-webhook-url
```

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/AmazingFeature`)
3. Сделайте коммит (`git commit -m 'Add some AmazingFeature'`)
4. Отправьте в ветку (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект распространяется под MIT лицензией. См. файл `LICENSE` для получения дополнительной информации.

## 📋 Правила разработки

Проект следует четким стандартам разработки:

- 📖 **[Полные правила разработки](./DEVELOPMENT_RULES.md)** - подробный гайд со всеми стандартами
- ⚡ **[Быстрые правила](./QUICK_RULES.md)** - краткая справка для ежедневного использования
- 🤖 **[Правила для Cursor AI](./.cursor/rules/rules.mdc)** - специальные инструкции для ИИ-ассистента

### 🎨 Работа с Figma и изображениями:
- **SVG файлы** из Figma → `public/svg/` (icons, logos, illustrations, ui)
- **Растровые изображения** → `public/img/` (photos, backgrounds, products, team)
- **Абсолютные пути** при работе с Figma → **правильные пути** в коде (/svg/, /img/)
- **Обязательное изучение правил** перед началом работы

Эти правила обеспечивают:
- Консистентность кода в команде
- Высокое качество и производительность
- Легкую поддержку и масштабирование
- Соответствие современным стандартам
- Правильную работу ИИ-ассистентов

## 📞 Поддержка

Если у вас есть вопросы или предложения, создайте Issue в репозитории или свяжитесь с нами:

- Email: contact@yourcompany.com
- Telegram: @yourcompany
- Website: https://yourcompany.com

---

Сделано с ❤️ используя Next.js и современные веб-технологии

# 📋 Правила разработки проекта

Данные правила основаны на лучших практиках современной веб-разработки и опыте создания данного проекта.

## 🏗 Архитектурные правила

### 1. Структура проекта
- **Обязательно использовать App Router** для новых Next.js проектов
- **Разделение по функциональности**: компоненты в `src/components/`, утилиты в `src/lib/`
- **API routes** должны находиться в `src/app/api/`
- **Один компонент = один файл** с именем компонента

### 2. Организация компонентов
```
src/
├── app/                  # App Router структура
│   ├── api/             # API маршруты
│   ├── globals.css      # Глобальные стили
│   ├── layout.tsx       # Корневой layout
│   └── page.tsx         # Страницы
├── components/          # Переиспользуемые компоненты
├── lib/                 # Утилиты и хелперы
└── types/              # TypeScript типы (при необходимости)
```

### 3. Именование файлов и папок
- **PascalCase** для компонентов React: `Hero.tsx`, `ContactForm.tsx`
- **camelCase** для утилит: `utils.ts`, `apiClient.ts`  
- **kebab-case** для API routes: `contact/route.ts`
- **lowercase** для папок: `components`, `lib`, `api`

## 💻 Технологические правила

### 1. Обязательный стек
- **Next.js** (последняя стабильная версия) с App Router
- **TypeScript** для типобезопасности
- **TailwindCSS** для стилизации
- **ESLint** для контроля качества кода

### 2. Рекомендуемые библиотеки
- **React Hook Form** + **Zod** для форм и валидации
- **Axios** для HTTP запросов
- **clsx** + **tailwind-merge** для работы с CSS классами

### 3. Версионирование
- Всегда использовать **точные версии** в production
- Регулярно обновлять зависимости
- Тестировать после каждого обновления

## 🎨 Правила UI/UX

### 1. Работа с Figma
- **При работе с Figma** - используй абсолютные пути для файлов
- **При написании кода** - трансформируй абсолютные пути в относительные
- **SVG экспорт** для статических изображений (иконки, логотипы)
- **PNG/JPG экспорт** для сложных изображений (фотографии)
- **Оптимизация SVG** перед добавлением в проект

### 2. Адаптивность
- **Mobile First** подход в разработке
- Обязательное тестирование на всех размерах экранов
- Использование **Tailwind breakpoints**: `sm:`, `md:`, `lg:`, `xl:`

### 3. Цветовая схема
```css
/* Основная палитра */
primary: blue-600    /* #2563eb */
secondary: purple-700 /* #7c3aed */
accent: yellow-400   /* #fbbf24 */
neutral: gray-50-900 /* от светлого к темному */
```

### 4. Типографика
- **Inter** шрифт с поддержкой кириллицы
- Использование **Tailwind typography** утилит
- Обязательная настройка `line-height` для читаемости

### 5. Интерактивные элементы
- **Hover эффекты** на всех интерактивных элементах
- **Transition анимации** для плавности (duration-200-300)
- **Focus states** для доступности
- Консистентные **border-radius** значения

## 📝 Правила кодирования

### 1. TypeScript
```typescript
// ✅ Правильно - явная типизация
interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

// ❌ Неправильно - any типы
const handleSubmit = (data: any) => { ... }
```

### 2. React компоненты
```typescript
// ✅ Правильно - функциональные компоненты с типами
interface HeroProps {
  title: string
  subtitle?: string
}

export function Hero({ title, subtitle }: HeroProps) {
  return <section>...</section>
}

// ❌ Неправильно - без типов и 'use client' где не нужно
```

### 3. Использование 'use client'
- **Только там, где действительно нужно**: формы, состояние, браузерные API
- **Server Components по умолчанию** для статичного контента
- **Минимизировать bundle size** клиентских компонентов

### 4. Обработка форм
```typescript
// ✅ Правильно - с валидацией
const schema = z.object({
  email: z.string().email('Некорректный email')
})

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema)
})
```

## 🔒 Правила безопасности

### 1. Валидация данных
- **Клиентская И серверная** валидация
- **Zod схемы** для всех форм
- **Sanitization** пользовательского ввода

### 2. API безопасность
```typescript
// ✅ Правильно - валидация в API
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactSchema.parse(body) // Валидация!
    // ... обработка
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 })
    }
  }
}
```

## 🚀 Правила производительности

### 1. Изображения и медиа
- Использовать **Next.js Image** компонент
- **WebP формат** по умолчанию
- **Lazy loading** для всех изображений
- **SVG файлы** хранить в `public/svg/` с подпапками:
  - `icons/` - иконки
  - `logos/` - логотипы
  - `illustrations/` - иллюстрации
  - `ui/` - UI элементы
- **Растровые изображения** хранить в `public/img/` с подпапками:
  - `photos/` - фотографии
  - `backgrounds/` - фоновые изображения
  - `products/` - изображения товаров
  - `team/` - фото команды

### 2. Шрифты
- **next/font** для оптимизации загрузки
- **Preload** критически важных шрифтов
- **font-display: swap** для быстрого отображения

### 3. Bundle оптимизация
- **Динамические импорты** для больших компонентов
- **Tree shaking** неиспользуемого кода
- **Code splitting** по страницам

## 🔍 SEO правила

### 1. Метаданные
```typescript
// ✅ Обязательные мета-теги
export const metadata: Metadata = {
  title: 'Заголовок страницы',
  description: 'Описание страницы (150-160 символов)',
  keywords: 'ключевые, слова',
  openGraph: {
    title: 'OG заголовок',
    description: 'OG описание',
    type: 'website'
  }
}
```

### 2. Семантическая разметка
- **Правильные HTML теги**: `<header>`, `<main>`, `<section>`, `<article>`
- **Accessibility attributes**: `aria-*`, `role`
- **Structured data** где применимо

### 3. URL структура
- **Понятные URL**: `/services`, `/contact`
- **Правильные HTTP статусы**
- **Sitemap.xml** и **robots.txt**

## 📚 Правила документации

### 1. README.md
- **Описание проекта** и его целей
- **Инструкции по установке** и запуску
- **Структура проекта**
- **API документация**
- **Deployment инструкции**

### 2. Комментарии в коде
```typescript
// ✅ Правильно - объяснение сложной логики
/**
 * Валидирует и отправляет контактную форму
 * @param data - Данные формы, прошедшие клиентскую валидацию
 * @returns Promise с результатом отправки
 */
const submitForm = async (data: ContactFormData) => { ... }

// ❌ Неправильно - очевидные комментарии
const name = 'John' // устанавливаем имя
```

### 3. Типы и интерфейсы
- **Документирование сложных типов**
- **JSDoc комментарии** для публичных API
- **Примеры использования** в комментариях

## 🧪 Правила тестирования

### 1. Тестирование компонентов
- **Unit тесты** для утилитарных функций  
- **Integration тесты** для ключевых компонентов
- **E2E тесты** для критичных пользовательских сценариев

### 2. API тестирование
- **Тесты валидации** входных данных
- **Тесты обработки ошибок**
- **Mock тестирование** внешних сервисов

## 🔄 Правила разработки

### 1. Git workflow
- **Conventional Commits**: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- **Feature branches** для новых функций
- **Pull Request** обязателен для main/master

### 2. Code Review
- **Минимум 1 reviewer** для каждого PR
- **Проверка соответствия** данным правилам
- **Тестирование** перед мержем

### 3. Deployment
- **CI/CD pipeline** для автоматического деплоя
- **Environment variables** для конфигурации
- **Health checks** после деплоя

## ⚠ Общие запреты

### ❌ Что НЕ делать:
- **НЕ использовать** `any` типы в TypeScript
- **НЕ смешивать** Pages Router и App Router в одном проекте
- **НЕ писать** инлайн стили без крайней необходимости
- **НЕ игнорировать** ESLint предупреждения
- **НЕ коммитить** `.env` файлы с секретами
- **НЕ использовать** устаревшие зависимости
- **НЕ создавать** компоненты больше 200 строк без разбиения
- **НЕ забывать** про обработку loading и error состояний

## 📋 Чеклист перед релизом

- [ ] Все TypeScript ошибки исправлены
- [ ] ESLint предупреждения устранены  
- [ ] Тесты проходят успешно
- [ ] Проект собирается без ошибок (`npm run build`)
- [ ] SEO метаданные заполнены
- [ ] Адаптивность проверена на всех устройствах
- [ ] Производительность оптимизирована
- [ ] Документация обновлена
- [ ] Environment variables настроены
- [ ] Security audit пройден (`npm audit`)

---

## 🎯 Заключение

Эти правила созданы для обеспечения высокого качества кода, производительности и поддерживаемости проектов. Они должны эволюционировать вместе с развитием технологий и накоплением опыта команды.

**Помните**: правила созданы для того, чтобы помочь, а не помешать разработке. В исключительных случаях они могут быть нарушены, но это должно быть осознанное решение с документированием причин. 
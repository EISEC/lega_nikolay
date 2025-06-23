# ⚡ Быстрые правила разработки

## 🏗 Архитектура
- **App Router только** для Next.js
- **TypeScript обязательно**
- **src/** структура с разделением по типу файлов
- **PascalCase** для компонентов, **camelCase** для утилит

## 💻 Технологии
- **Next.js 15+ с TypeScript**
- **TailwindCSS** для стилей
- **React Hook Form + Zod** для форм
- **Axios** для API запросов

## 🎨 UI/UX
- **Mobile First** подход
- **blue-600 + purple-700** основные цвета
- **Inter** шрифт с кириллицей
- **Hover + transition** на всех интерактивных элементах

## 📝 Код
```typescript
// ✅ Хорошо
interface Props { name: string }
export function Component({ name }: Props) { ... }

// ❌ Плохо  
export function Component(props: any) { ... }
```

## 🔒 Безопасность
- **Zod валидация** на клиенте И сервере
- **Никогда any типы**
- **Обработка всех ошибок**

## 🚀 Производительность
- **next/font** для шрифтов
- **next/image** для картинок
- **'use client'** только когда нужно

## 🔍 SEO
- **Metadata** на каждой странице
- **Семантичная разметка**
- **OpenGraph + Twitter Cards**

## ⚠ Запреты
- ❌ `any` типы
- ❌ Инлайн стили
- ❌ Игнорирование ESLint
- ❌ Компоненты >200 строк
- ❌ Смешивание Pages/App Router

## 📋 Перед релизом
- [ ] TypeScript без ошибок
- [ ] ESLint чистый  
- [ ] `npm run build` успешно
- [ ] Адаптивность проверена
- [ ] SEO заполнено 
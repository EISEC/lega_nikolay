'use client'

import Image from 'next/image'
import { useState } from 'react'

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Наши работы', href: '#works' },
    { name: 'Услуги', href: '#services' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contact' },
  ]

  const categories = [
    { name: 'Сайты', active: true },
    { name: 'Логотипы', active: false },
    { name: 'Соцсети', active: false },
    { name: 'Директ', active: false },
  ]

  return (
    <section className="relative min-h-screen bg-[#020205] overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0">
        <Image
          src="/img/backgrounds/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020205] via-[#020205]/90 to-transparent" />

      {/* Декоративные порталы */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/svg/ui/portal-1.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-[30%] right-[15%] w-20 h-20 lg:w-24 lg:h-24 opacity-60 animate-pulse-glow"
        />
        <Image
          src="/svg/ui/portal-2.svg"
          alt=""
          width={70}
          height={70}
          className="absolute top-[50%] right-[25%] w-14 h-14 lg:w-16 lg:h-16 opacity-40 animate-float"
        />
        <Image
          src="/svg/ui/portal-3.svg"
          alt=""
          width={50}
          height={50}
          className="absolute top-[70%] right-[10%] w-10 h-10 lg:w-12 lg:h-12 opacity-30"
        />
      </div>

      {/* Навигация */}
      <nav className="relative z-50 pt-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Логотип */}
            <div className="flex items-center">
              <Image
                src="/svg/ui/logo-lega.svg"
                alt="LEGA"
                width={160}
                height={52}
                className="h-10 w-auto lg:h-12"
              />
              <span className="ml-3 text-white text-lg lg:text-xl font-light tracking-wider">
                marketing
              </span>
            </div>

            {/* Десктопное меню */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#F2F2F2] hover:text-[#AAFF00] transition-colors duration-300 text-lg font-light"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Кнопка "Задай вопрос" в навигации */}
            <div className="hidden lg:block">
              <button className="border-2 border-[#AAFF00] text-[#AAFF00] px-6 py-2 rounded-lg text-lg font-medium hover:bg-[#AAFF00] hover:text-[#020205] transition-all duration-300">
                Задай вопрос
              </button>
            </div>

            {/* Мобильный гамбургер */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            >
              <div
                className={`w-6 h-0.5 bg-[#F2F2F2] transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-[#F2F2F2] transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-[#F2F2F2] transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          </div>

          {/* Мобильное меню */}
          {isMenuOpen && (
            <div className="lg:hidden mt-6 py-4 border-t border-[#F2F2F2]/10">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-[#F2F2F2] hover:text-[#AAFF00] transition-colors duration-300 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button className="w-full border-2 border-[#AAFF00] text-[#AAFF00] px-6 py-2 rounded-lg text-lg font-medium hover:bg-[#AAFF00] hover:text-[#020205] transition-all duration-300">
                  Задай вопрос
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Основной контент */}
      <div className="relative z-10 pt-16 lg:pt-24 pb-16 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            {/* Заголовок */}
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-[#F2F2F2] leading-tight mb-6">
                Современная упаковка
                <br />
                <span className="text-[#AAFF00]">твоего бизнеса</span>
              </h1>

              {/* Волнистая зеленая линия */}
              <div className="w-40 h-2 bg-[#AAFF00] rounded-full mb-8"></div>
            </div>

            {/* Описание */}
            <p className="text-[#F2F2F2] text-xl lg:text-2xl leading-relaxed mb-12 max-w-3xl">
              Комплексная прокачка бизнеса: от дизайна и разработки сайта до
              продвижения в поисковых системах и соцсетях. Мы точно знаем, как
              привлечь новых клиентов и увеличить продажи.
            </p>

            {/* Кнопка */}
            <button className="border-2 border-[#AAFF00] text-[#AAFF00] px-8 py-4 lg:px-12 lg:py-5 rounded-lg text-lg lg:text-xl font-medium hover:bg-[#AAFF00] hover:text-[#020205] transition-all duration-300">
              Задай вопрос
            </button>
          </div>
        </div>
      </div>

      {/* Секция "Наши работы" */}
      <div className="relative z-10 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#F2F2F2] mb-8">
              Наши работы
            </h2>

            {/* Категории фильтров */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-[#AAFF00] text-[#020205] border-2 border-[#AAFF00]'
                      : 'bg-transparent text-[#F2F2F2] border border-[#383838] hover:border-[#AAFF00] hover:text-[#AAFF00]'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

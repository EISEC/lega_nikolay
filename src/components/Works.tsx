'use client'

import Image from 'next/image'
import { useState } from 'react'
import { WavyLine } from './WavyLine'

export function Works() {
  const [activeCategory, setActiveCategory] = useState('Все')

  const categories = ['Все', 'Сайт', 'Лендинг', 'Приложение', 'Логотип']

  const works = [
    {
      id: 1,
      title: 'Сайт астрологических услуг',
      category: 'Сайт',
      image: '/img/works/astrology-site.jpg',
      description: 'Мистический дизайн с элементами астрологии',
    },
    {
      id: 2,
      title: 'Лендинг автобусных перевозок',
      category: 'Лендинг',
      image: '/img/works/bus-landing.jpg',
      description: 'Современный дизайн для транспортной компании',
    },
    {
      id: 3,
      title: 'Сервис компрессорного оборудования',
      category: 'Сайт',
      image: '/img/works/compressor-service.jpg',
      description: 'Технический сайт с каталогом оборудования',
    },
    {
      id: 4,
      title: 'Студия кухонной мебели',
      category: 'Сайт',
      image: '/img/works/kitchen-studio.jpg',
      description: 'Элегантный сайт мебельной студии',
    },
    {
      id: 5,
      title: 'Магический портал',
      category: 'Сайт',
      image: '/img/works/magic-site.jpg',
      description: 'Таинственный дизайн с магической тематикой',
    },
    {
      id: 6,
      title: 'Сайт психологических услуг',
      category: 'Сайт',
      image: '/img/works/psychology-site.jpg',
      description: 'Успокаивающий дизайн для психолога',
    },
    {
      id: 7,
      title: 'Приложение отзывов',
      category: 'Приложение',
      image: '/img/works/reviews-app.jpg',
      description: 'Мобильное приложение для сбора отзывов',
    },
    {
      id: 8,
      title: 'Сервис для США',
      category: 'Сайт',
      image: '/img/works/usa-service.jpg',
      description: 'Международный проект для американского рынка',
    },
  ]

  // Фильтрация работ по категории
  const filteredWorks =
    activeCategory === 'Все'
      ? works
      : works.filter((work) => work.category === activeCategory)

  return (
    <section id="works" className="relative bg-[#020205] py-20 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 right-16 w-32 h-32 bg-[#AAFF00] rounded-full opacity-10 animate-pulse-glow" />
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-[#AAFF00] rounded-full opacity-15 animate-float" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#AAFF00] rounded-full opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-[#F2F2F2] mb-6">
            Наши работы
          </h2>
          <div className="flex justify-center mb-8">
            <WavyLine width={200} height={8} className="text-[#AAFF00]" />
          </div>
          <p className="text-[#F2F2F2] text-lg lg:text-xl max-w-3xl mx-auto opacity-80">
            Мы создаем уникальные решения для каждого клиента, помогая бизнесу
            выделиться на рынке и достигать новых высот
          </p>
        </div>

        {/* Фильтры категорий */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#AAFF00] text-[#020205] shadow-lg shadow-[#AAFF00]/30'
                  : 'bg-transparent text-[#F2F2F2] border border-[#333] hover:border-[#AAFF00] hover:text-[#AAFF00]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="group relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-lg overflow-hidden hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Изображение */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Категория */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#AAFF00] text-[#020205] text-sm font-medium rounded-full">
                    {work.category}
                  </span>
                </div>
              </div>

              {/* Контент */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#F2F2F2] mb-3 leading-tight">
                  {work.title}
                </h3>
                <p className="text-[#F2F2F2] text-sm leading-relaxed opacity-80">
                  {work.description}
                </p>
              </div>

              {/* Hover эффект */}
              <div className="absolute inset-0 bg-[#AAFF00] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Специальное предложение */}
        <div className="relative bg-gradient-to-r from-[#AAFF00] to-[#88CC00] rounded-2xl p-8 lg:p-12 text-center overflow-hidden">
          {/* Декоративные элементы */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-20 translate-y-20" />

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-5xl font-bold text-[#020205] mb-4">
              Есть идея проекта?
            </h3>
            <WavyLine
              width={128}
              height={10}
              className="text-[#020205] mx-auto mb-6"
            />
            <p className="text-[#020205] text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
              Давайте обсудим ваши цели и создадим что-то удивительное вместе
            </p>
            <button className="bg-[#020205] text-[#AAFF00] px-8 py-4 lg:px-12 lg:py-5 rounded-lg text-lg lg:text-xl font-bold hover:bg-[#0a0a0a] transition-colors shadow-lg">
              Обсудить проект
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

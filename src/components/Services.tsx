'use client'

import { useState } from 'react'
import { WavyLine } from './WavyLine'

export function Services() {
  const [activeService, setActiveService] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      title: 'Веб-дизайн',
      shortDescription: 'разработка дизайн-макетов любой сложности',
      fullDescription:
        'Создаем современные, интуитивно понятные интерфейсы, которые повышают конверсию и улучшают пользовательский опыт. От лендингов до корпоративных сайтов.',
      features: [
        'UI/UX дизайн',
        'Адаптивная верстка',
        'Прототипирование',
        'Дизайн-система',
      ],
      price: 'от 50 000 ₽',
      icon: '🎨',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      title: 'Продвижение',
      shortDescription: 'контекстная реклама, таргет, SEO',
      fullDescription:
        'Комплексное продвижение вашего бизнеса в интернете. Настраиваем рекламные кампании, оптимизируем сайт для поисковых систем.',
      features: ['Google Ads', 'Яндекс.Директ', 'SEO оптимизация', 'Аналитика'],
      price: 'от 30 000 ₽/мес',
      icon: '📈',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      title: 'Соцсети',
      shortDescription: 'оформление, наполнение, продвижение',
      fullDescription:
        'Полное ведение социальных сетей: создаем контент, разрабатываем стратегию, привлекаем подписчиков и повышаем продажи.',
      features: ['Контент-план', 'Дизайн постов', 'Таргетинг', 'Аналитика'],
      price: 'от 25 000 ₽/мес',
      icon: '📱',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      title: 'Репутация',
      shortDescription: 'SERM, управление вашей репутацией в интернете',
      fullDescription:
        'Мониторим и формируем положительный имидж вашей компании в интернете. Работаем с отзывами, упоминаниями и репутационными рисками.',
      features: [
        'Мониторинг отзывов',
        'SERM стратегия',
        'Кризисный PR',
        'Репутационный аудит',
      ],
      price: 'от 40 000 ₽/мес',
      icon: '🛡️',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      title: 'Полиграфия',
      shortDescription: 'всё что только возможно напечатать',
      fullDescription:
        'Дизайн и печать любой полиграфической продукции: от визиток до крупноформатной рекламы. Высокое качество и быстрые сроки.',
      features: ['Визитки', 'Буклеты', 'Баннеры', 'Упаковка'],
      price: 'от 5 000 ₽',
      icon: '🖨️',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: 6,
      title: 'Логотипы',
      shortDescription: 'яркие, запоминающиеся, современные',
      fullDescription:
        'Разрабатываем уникальные логотипы и фирменный стиль, которые отражают суть вашего бизнеса и запоминаются клиентам.',
      features: [
        'Концепция бренда',
        'Векторная графика',
        'Фирменный стиль',
        'Брендбук',
      ],
      price: 'от 20 000 ₽',
      icon: '🎯',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      id: 7,
      title: 'Консультации',
      shortDescription: 'экспертные советы по развитию бизнеса',
      fullDescription:
        'Профессиональные консультации по маркетингу, digital-стратегии и развитию бизнеса в интернете от наших экспертов.',
      features: [
        'Аудит бизнеса',
        'Стратегия развития',
        'Персональные рекомендации',
        'Менторинг',
      ],
      price: 'от 5 000 ₽/час',
      icon: '💡',
      gradient: 'from-teal-500 to-blue-500',
    },
    {
      id: 8,
      title: 'Веб-разработка',
      shortDescription: 'крутые, функциональные, продающие сайты',
      fullDescription:
        'Создаем современные веб-сайты и приложения с использованием передовых технологий. От лендингов до сложных интернет-магазинов.',
      features: [
        'Landing Page',
        'Корпоративные сайты',
        'Интернет-магазины',
        'CRM системы',
      ],
      price: 'от 80 000 ₽',
      icon: '💻',
      gradient: 'from-rose-500 to-pink-500',
    },
  ]

  return (
    <section className="relative bg-[#020205] py-20 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        {/* Светящиеся точки */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#AAFF00] rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Порталы */}
        <div className="absolute top-32 right-20 w-20 h-20 bg-[#AAFF00] rounded-full opacity-20 animate-pulse-glow" />
        <div className="absolute bottom-40 left-32 w-16 h-16 bg-[#AAFF00] rounded-full opacity-15 animate-float" />
        <div className="absolute top-3/4 right-1/4 w-8 h-8 bg-[#AAFF00] rounded-full opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-bold text-[#F2F2F2] mb-6">
            Услуги
          </h2>
          <div className="flex justify-center mb-8">
            <WavyLine width={200} height={10} className="text-[#AAFF00]" />
          </div>
          <p className="text-[#F2F2F2] text-lg lg:text-xl max-w-3xl mx-auto opacity-80">
            Комплексные решения для цифрового продвижения вашего бизнеса. От
            идеи до реализации.
          </p>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer border border-[#333] hover:border-[#AAFF00]/50"
              onClick={() =>
                setActiveService(
                  activeService === service.id ? null : service.id
                )
              }
            >
              {/* Иконка и заголовок */}
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{service.icon}</div>
                <h3 className="text-[#F2F2F2] text-xl font-bold group-hover:text-[#AAFF00] transition-colors">
                  {service.title}
                </h3>
              </div>

              {/* Краткое описание */}
              <p className="text-[#F2F2F2] text-sm opacity-80 mb-4 leading-relaxed">
                {service.shortDescription}
              </p>

              {/* Цена */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#AAFF00] font-bold text-lg">
                  {service.price}
                </span>
                <span className="text-[#F2F2F2] text-sm opacity-60">
                  {activeService === service.id ? 'Свернуть' : 'Подробнее'}
                </span>
              </div>

              {/* Развернутая информация */}
              {activeService === service.id && (
                <div className="absolute top-full left-0 right-0 bg-[#1a1a1a] border border-[#AAFF00]/50 rounded-2xl p-6 mt-2 shadow-2xl z-10 animate-in slide-in-from-top-2 duration-300">
                  <p className="text-[#F2F2F2] text-sm mb-4 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-[#AAFF00] font-bold mb-2">
                      Что включено:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-[#F2F2F2] text-sm flex items-center"
                        >
                          <span className="text-[#AAFF00] mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-[#AAFF00] text-[#020205] py-2 px-4 rounded-lg font-bold hover:bg-[#88CC00] transition-colors">
                    Заказать услугу
                  </button>
                </div>
              )}

              {/* Hover эффект */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#AAFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Анимированные ленты */}
        <div className="relative overflow-hidden py-8">
          {/* Первая лента */}
          <div className="bg-[#AAFF00] py-4 transform -rotate-1 mb-6 shadow-lg">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-[#020205] text-xl lg:text-2xl font-bold mx-8">
                создаем ▸ ▸ ▸ продвигаем ▸ ▸ ▸ развиваем ▸ ▸ ▸ консультируем ▸ ▸
                ▸ дизайним ▸ ▸ ▸ программируем ▸ ▸ ▸ создаем ▸ ▸ ▸ продвигаем ▸
                ▸ ▸ развиваем ▸ ▸ ▸
              </span>
            </div>
          </div>

          {/* Вторая лента */}
          <div className="bg-[#AAFF00] py-4 transform rotate-1 shadow-lg">
            <div className="animate-marquee-reverse whitespace-nowrap">
              <span className="text-[#020205] text-xl lg:text-2xl font-bold mx-8">
                консультируем ▸ ▸ ▸ дизайним ▸ ▸ ▸ программируем ▸ ▸ ▸ создаем ▸
                ▸ ▸ продвигаем ▸ ▸ ▸ развиваем ▸ ▸ ▸ консультируем ▸ ▸ ▸
                дизайним ▸ ▸ ▸ программируем ▸ ▸ ▸
              </span>
            </div>
          </div>
        </div>

        {/* CTA секция */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#AAFF00] to-[#88CC00] rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#020205] mb-4">
              Готовы начать проект?
            </h3>
            <p className="text-[#020205] text-lg lg:text-xl mb-8 opacity-80">
              Обсудим ваши задачи и предложим оптимальное решение
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#020205] text-[#AAFF00] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#0a0a0a] transition-colors">
                Получить консультацию
              </button>
              <button className="border-2 border-[#020205] text-[#020205] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#020205] hover:text-[#AAFF00] transition-colors">
                Смотреть портфолио
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

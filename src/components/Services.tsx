'use client'

export function Services() {
  const services = [
    {
      id: 1,
      title: 'Дизайн',
      description: 'разработка дизайн-макетов любой сложности',
    },
    {
      id: 2,
      title: 'Продвижение',
      description: 'контекстная реклама, таргет, SEO',
    },
    {
      id: 3,
      title: 'Соцсети',
      description: 'оформление, наполнение, продвижение',
    },
    {
      id: 4,
      title: 'Репутация',
      description: 'SERM, управление вашей репутацией в интернете',
    },
    {
      id: 5,
      title: 'Полиграфия',
      description: 'всё что только возможно напечатать',
    },
    {
      id: 6,
      title: 'Логотипы',
      description: 'яркие, запоминающиеся, современные',
    },
    {
      id: 7,
      title: 'Предсказания',
      description: 'как карта ляжет, так и скажет',
    },
    {
      id: 8,
      title: 'Вебсайты',
      description: 'крутые, функциональные, продающие',
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
          <div className="w-32 h-2 bg-[#AAFF00] mx-auto rounded-full" />
        </div>

        {/* Сетка с восьмиугольными блоками */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="flex justify-center">
              {/* Восьмиугольный блок */}
              <div
                className="relative w-40 h-40 lg:w-48 lg:h-48 bg-[#AAFF00] flex flex-col items-center justify-center text-center p-6 hover:scale-105 transition-transform duration-300 cursor-pointer group"
                style={{
                  clipPath:
                    'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                }}
              >
                <h3 className="text-[#020205] text-lg lg:text-xl font-bold mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#020205] text-xs lg:text-sm leading-tight">
                  {service.description}
                </p>

                {/* Эффект hover */}
                <div
                  className="absolute inset-0 bg-[#88CC00] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    clipPath:
                      'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Анимированные ленты согласно дизайну */}
        <div className="relative overflow-hidden py-8">
          {/* Первая лента */}
          <div className="bg-[#AAFF00] py-4 transform -rotate-1 mb-6 shadow-lg">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-[#020205] text-xl lg:text-2xl font-bold mx-8">
                наполним ▸ ▸ ▸ продвинем ▸ ▸ ▸ поможем ▸ ▸ ▸ придумаем ▸ ▸ ▸
                нарисуем ▸ ▸ ▸ упакуем ▸ ▸ ▸ наполним ▸ ▸ ▸ продвинем ▸ ▸ ▸
                поможем ▸ ▸ ▸
              </span>
            </div>
          </div>

          {/* Вторая лента */}
          <div className="bg-[#AAFF00] py-4 transform rotate-1 shadow-lg">
            <div className="animate-marquee-reverse whitespace-nowrap">
              <span className="text-[#020205] text-xl lg:text-2xl font-bold mx-8">
                придумаем ▸ ▸ ▸ нарисуем ▸ ▸ ▸ упакуем ▸ ▸ ▸ наполним ▸ ▸ ▸
                продвинем ▸ ▸ ▸ поможем ▸ ▸ ▸ придумаем ▸ ▸ ▸ нарисуем ▸ ▸ ▸
                упакуем ▸ ▸ ▸
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

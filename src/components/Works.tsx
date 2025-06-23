'use client'

export function Works() {
  const works = [
    {
      id: 1,
      title: 'Сайт для астролога',
      description:
        'Красивый, легкий, сайт с описанием услуг и атмосферой магии',
      image: '/img/works/astrology-site.jpg',
      category: 'Сайты',
    },
    {
      id: 2,
      title: 'Сайт для психолога',
      description:
        'Простой, современный сайт с подробным описанием услуг и обратной связью',
      image: '/img/works/psychology-site.jpg',
      category: 'Сайты',
    },
    {
      id: 3,
      title: 'Сервис помощи переезжающим в США',
      description:
        'Простой понятный сайт, подробные отзывы и описание работы сервиса',
      image: '/img/works/usa-service.jpg',
      category: 'Сайты',
    },
    {
      id: 4,
      title: 'Сайт приложения для отзывов',
      description: 'Стильный легкий сайт с описанием партнерской программы',
      image: '/img/works/reviews-app.jpg',
      category: 'Сайты',
    },
    {
      id: 5,
      title: 'Студия авторской кухни на заказ',
      description: 'Легкий, светлый, располагающий сайт с квизом для помощи',
      image: '/img/works/kitchen-studio.jpg',
      category: 'Сайты',
    },
    {
      id: 6,
      title: 'Сайт магической помощи',
      description:
        'Мистический интересный нестандартный, но доступный и понятный сайт',
      image: '/img/works/magic-site.jpg',
      category: 'Сайты',
    },
    {
      id: 7,
      title: 'Сервис по ремонту компрессоров',
      description: 'Удобный информативный сайт с описанием услуг',
      image: '/img/works/compressor-service.jpg',
      category: 'Сайты',
    },
    {
      id: 8,
      title: 'Лендинг по продаже автобусов',
      description:
        'Современный минималистичный сайт с подробным описанием всех преимуществ и выгод',
      image: '/img/works/bus-landing.jpg',
      category: 'Сайты',
    },
  ]

  return (
    <section className="relative bg-[#020205] py-12 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-[#AAFF00] rounded-full opacity-20" />
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-[#AAFF00] rounded-full opacity-15" />
      <div className="absolute top-1/2 left-20 w-6 h-6 bg-[#AAFF00] rounded-full opacity-25" />

      <div className="container mx-auto px-6">
        {/* Сетка работ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {works.map((work) => (
            <div
              key={work.id}
              className="group bg-gradient-to-b from-[#333331] to-[#050505] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Изображение */}
              <div className="relative h-48 bg-gray-300 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${work.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Контент */}
              <div className="p-6 bg-[#AAFF00]">
                <h3 className="text-xl font-bold text-[#020205] mb-3 leading-tight">
                  {work.title}
                </h3>
                <p className="text-[#020205] text-sm leading-relaxed mb-4">
                  {work.description}
                </p>
                <button className="bg-[#020205] text-[#AAFF00] px-6 py-2 rounded text-sm font-medium hover:bg-[#333] transition-colors">
                  Смотреть
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Специальное предложение */}
        <div className="bg-[#AAFF00] rounded-lg p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <p className="text-[#020205] text-lg leading-relaxed">
              При заказе сео-продвижения на сумму от 60 000₽, Вы получаете
              разработку уникального сайта в подарок абсолютно бесплатно
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="w-32 h-24 lg:w-48 lg:h-32 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl lg:text-4xl">🎁</span>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <p className="text-center text-[#F2F2F2] text-lg mt-8 leading-relaxed">
          А также: на весь период разработки сайта Вы получаете временный сайт с
          основной информацией
        </p>
      </div>
    </section>
  )
}

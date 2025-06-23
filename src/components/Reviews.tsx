'use client'

import { WavyLine } from './WavyLine'

export function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      position: 'Владелица салона красоты',
      text: 'Невероятно профессиональный подход! Сайт получился именно таким, каким я его представляла. Клиенты стали чаще обращаться через интернет.',
      rating: 5,
      avatar: '/img/team/anna-petrova.jpg',
    },
    {
      id: 2,
      name: 'Михаил Иванов',
      position: 'Директор IT-компании',
      text: 'Команда LEGA превзошла все ожидания. Сайт работает быстро, выглядит современно и приносит реальные результаты.',
      rating: 5,
      avatar: '/img/team/mikhail-ivanov.jpg',
    },
    {
      id: 3,
      name: 'Елена Сидорова',
      position: 'Психолог',
      text: 'Очень довольна сотрудничеством. Учли все мои пожелания, работали быстро и качественно. Рекомендую!',
      rating: 5,
      avatar: '/img/team/elena-sidorova.jpg',
    },
    {
      id: 4,
      name: 'Дмитрий Козлов',
      position: 'Владелец ресторана',
      text: 'Отличная работа с продвижением в соцсетях. Количество заказов увеличилось в два раза за первый месяц.',
      rating: 5,
      avatar: '/img/team/dmitriy-kozlov.jpg',
    },
  ]

  return (
    <section className="relative bg-[#020205] py-20 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-16 left-16 w-20 h-20 bg-[#AAFF00] rounded-full opacity-20 animate-pulse-glow" />
      <div className="absolute bottom-24 right-24 w-16 h-16 bg-[#AAFF00] rounded-full opacity-25 animate-float" />
      <div className="absolute top-1/3 right-16 w-12 h-12 bg-[#AAFF00] rounded-full opacity-30" />

      <div className="container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-bold text-[#F2F2F2] mb-6">
            Отзывы клиентов
          </h2>
          <div className="flex justify-center">
            <WavyLine width={128} height={10} className="text-[#AAFF00]" />
          </div>
        </div>

        {/* Сетка отзывов */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 rounded-lg border border-[#333] hover:border-[#AAFF00] transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Рейтинг */}
              <div className="flex mb-6">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-[#AAFF00] fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Текст отзыва */}
              <p className="text-[#F2F2F2] text-lg leading-relaxed mb-8">
                "{review.text}"
              </p>

              {/* Автор */}
              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#AAFF00] rounded-full mr-4 flex items-center justify-center overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${review.avatar})` }}
                  />
                </div>
                <div>
                  <h4 className="text-[#F2F2F2] text-xl font-bold">
                    {review.name}
                  </h4>
                  <p className="text-[#AAFF00] text-sm">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

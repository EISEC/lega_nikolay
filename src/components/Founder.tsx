'use client'

export function Founder() {
  return (
    <section className="relative bg-[#020205] py-20 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-16 right-16 w-32 h-32 bg-[#AAFF00] rounded-full opacity-10 animate-pulse-glow" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#AAFF00] rounded-full opacity-15 animate-float" />
      <div className="absolute top-1/3 left-16 w-16 h-16 bg-[#AAFF00] rounded-full opacity-20" />

      {/* Геометрические фигуры */}
      <div className="absolute top-1/4 right-1/4 w-40 h-40 border-2 border-[#AAFF00] opacity-5 transform rotate-45" />
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 border-2 border-[#AAFF00] opacity-10 transform -rotate-12" />

      {/* Волнистые линии */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-5"
        viewBox="0 0 1200 800"
      >
        <path
          d="M0,200 Q300,100 600,200 T1200,200"
          fill="none"
          stroke="#AAFF00"
          strokeWidth="2"
        />
        <path
          d="M0,400 Q300,300 600,400 T1200,400"
          fill="none"
          stroke="#AAFF00"
          strokeWidth="2"
        />
        <path
          d="M0,600 Q300,500 600,600 T1200,600"
          fill="none"
          stroke="#AAFF00"
          strokeWidth="2"
        />
      </svg>

      <div className="relative z-10 container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-bold text-[#F2F2F2] mb-6">
            Отец-основатель
          </h2>
          <div className="w-32 h-2 bg-[#AAFF00] mx-auto rounded-full" />
        </div>

        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Фото */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-4 border-[#AAFF00]">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(/img/team/founder-nikolay.jpg)',
                  }}
                />
              </div>

              {/* Декоративные элементы вокруг фото */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#AAFF00] rounded-full opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#AAFF00] rounded-full opacity-40" />
            </div>
          </div>

          {/* Текстовый контент */}
          <div className="space-y-8">
            {/* Имя и должность */}
            <div>
              <h3 className="text-4xl font-bold text-[#F2F2F2] mb-2">
                Николай Лега
              </h3>
              <p className="text-2xl text-[#AAFF00] font-medium mb-4">
                Основатель и CEO LEGA Marketing
              </p>
              <div className="w-32 h-1 bg-[#AAFF00] rounded-full" />
            </div>

            {/* Описание */}
            <div className="space-y-6">
              <p className="text-[#F2F2F2] text-lg leading-relaxed">
                Привет! Меня зовут Николай, и я основатель LEGA Marketing. За 8
                лет работы в сфере цифрового маркетинга я помог более чем 150
                компаниям создать успешное онлайн-присутствие.
              </p>

              <p className="text-[#F2F2F2] text-lg leading-relaxed">
                Моя миссия — помочь каждому бизнесу найти своего клиента в
                цифровом мире. Мы не просто создаем сайты и настраиваем рекламу
                — мы строим долгосрочные отношения и гарантируем результат.
              </p>
            </div>

            {/* Призыв к действию */}
            <div className="pt-8">
              <button className="bg-[#AAFF00] text-[#020205] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#88CC00] transition-colors shadow-lg">
                Связаться со мной
              </button>
            </div>
          </div>
        </div>

        {/* Цитата */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto relative">
            <div className="text-6xl text-[#AAFF00] opacity-20 font-serif absolute -top-8 left-8">
              "
            </div>
            <blockquote className="text-2xl lg:text-3xl text-[#F2F2F2] font-light italic leading-relaxed mb-8">
              Успех в цифровом мире — это не только красивый дизайн или
              техническое совершенство. Это понимание клиента, его потребностей
              и создание решений, которые действительно работают.
            </blockquote>
            <div className="text-6xl text-[#AAFF00] opacity-20 font-serif absolute -bottom-8 right-8">
              "
            </div>
            <cite className="text-[#AAFF00] text-xl font-medium">
              — Николай Лега, основатель LEGA Marketing
            </cite>
          </div>
        </div>
      </div>
    </section>
  )
}

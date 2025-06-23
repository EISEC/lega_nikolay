'use client'

import { WavyLine } from './WavyLine'

export function Founder() {
  return (
    <section className="relative bg-[#020205] py-20 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-28 h-28 bg-[#AAFF00] rounded-full opacity-15 animate-pulse-glow" />
      <div className="absolute bottom-16 right-16 w-20 h-20 bg-[#AAFF00] rounded-full opacity-20 animate-float" />
      <div className="absolute top-1/2 right-32 w-12 h-12 bg-[#AAFF00] rounded-full opacity-25" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Левая колонка - Фото с треугольной рамкой */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Треугольная рамка как на изображении */}
                <div className="relative w-[400px] h-[500px] lg:w-[500px] lg:h-[600px]">
                  {/* Основная треугольная форма с зеленой заливкой */}
                  <div />

                  {/* Фото основателя */}
                  <img
                    src="img/photos/nikolay.png"
                    alt="Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Правая колонка - Контент */}
            <div className="text-right">
              {/* Заголовок */}
              <div className="mb-8">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-[#F2F2F2] mb-6 font-neue-machina">
                  Отец-основатель
                </h2>
                <div className="flex justify-end mb-8">
                  <WavyLine width={300} height={8} className="text-[#AAFF00]" />
                </div>
              </div>

              {/* Текстовый блок */}
              <div className="space-y-6 text-right">
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#F2F2F2] mb-2">
                    Николай Лега
                  </h3>

                  <p className="text-lg lg:text-xl text-[#F2F2F2] font-medium mb-4">
                    Руководитель команды LEGA IT Marketing
                  </p>
                </div>

                <div className="space-y-4 text-base lg:text-lg text-[#F2F2F2] leading-relaxed font-light font-panton tracking-wide">
                  <p>
                    С 2008 года активно изучает и применяет разнообразные
                    стратегии маркетинга и продвижения, получая ценный опыт
                    работы в различных отраслях. Успешно реализовывал проекты в
                    области розничной торговли, информационных технологий и
                    финансовых услуг.
                  </p>

                  <p>
                    Сосредоточен на поиске и использовании наиболее эффективных
                    инструментов для привлечения и удержания клиентов. Применяет
                    различные методы продвижения, включая поисковую оптимизацию
                    (SEO), контент-маркетинг, социальные сети, контекстную
                    рекламу, аналитика данных и многое другое.
                  </p>

                  <div className="mt-8">
                    <h4 className="text-lg font-medium text-[#F2F2F2] mb-4">
                      Создатель таких проектов как:
                    </h4>

                    <div className="grid grid-cols-1 gap-2 text-base">
                      <div className="flex justify-end space-x-8">
                        <span>Психология Онлайн</span>
                        <span>LEGA WORK</span>
                        <span>Вальхалла Онлайн</span>
                      </div>
                      <div className="flex justify-end space-x-8">
                        <span>Промо Help</span>
                        <span>Истории на ночь</span>
                        <span>Адвокатытут</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

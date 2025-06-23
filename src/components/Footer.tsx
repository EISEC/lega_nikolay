'use client'

import { WavyLine } from './WavyLine'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const contacts = [
    { type: 'Телефон', value: '+7 (999) 123-45-67' },
    { type: 'Email', value: 'hello@lega-marketing.ru' },
    { type: 'Telegram', value: '@lega_marketing' },
  ]

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'Telegram', href: '#', icon: '💬' },
    { name: 'VK', href: '#', icon: '🔵' },
    { name: 'YouTube', href: '#', icon: '📺' },
  ]

  return (
    <footer className="relative bg-[#020205] py-16 border-t border-[#333]">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#AAFF00] to-transparent opacity-50" />

      <div className="container mx-auto px-6">
        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - Контакты */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#F2F2F2] mb-4">
                Свяжитесь с нами
              </h3>
              <WavyLine width={96} height={8} className="text-[#AAFF00]" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#AAFF00] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#020205]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#F2F2F2] text-lg">Email</p>
                  <p className="text-[#AAFF00] text-xl font-medium">
                    hello@lega-marketing.ru
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#AAFF00] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#020205]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#F2F2F2] text-lg">Адрес</p>
                  <p className="text-[#AAFF00] text-xl font-medium">
                    Москва, Россия
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#AAFF00] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#020205]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#F2F2F2] text-lg">Телефон</p>
                  <p className="text-[#AAFF00] text-xl font-medium">
                    +7 (999) 123-45-67
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Правая часть - CTA */}
          <div className="text-center lg:text-right">
            <div className="bg-gradient-to-br from-[#AAFF00] to-[#88CC00] p-8 rounded-2xl">
              <h4 className="text-2xl lg:text-3xl font-bold text-[#020205] mb-4">
                Готовы начать?
              </h4>
              <p className="text-[#020205] text-lg mb-6">
                Обсудите ваш проект с нашими экспертами
              </p>
              <button className="bg-[#020205] text-[#AAFF00] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#0a0a0a] transition-colors shadow-lg">
                Написать
              </button>
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <div className="my-12">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#333] to-transparent" />
        </div>

        {/* Нижняя часть */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-[#AAFF00]">LEGA</div>
            <span className="text-[#F2F2F2] text-sm">marketing</span>
          </div>

          <div className="text-center">
            <p className="text-[#F2F2F2] text-sm opacity-80">
              © 2024 LEGA Marketing. Все права защищены.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-[#F2F2F2] hover:text-[#AAFF00] transition-colors"
            >
              Telegram
            </a>
            <a
              href="#"
              className="text-[#F2F2F2] hover:text-[#AAFF00] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="#"
              className="text-[#F2F2F2] hover:text-[#AAFF00] transition-colors"
            >
              ВКонтакте
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

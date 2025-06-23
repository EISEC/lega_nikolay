'use client'

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
    <footer
      id="contact"
      className="relative bg-[#020205] pt-20 pb-8 overflow-hidden"
    >
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#AAFF00] rounded-full opacity-10 animate-pulse-glow" />
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-[#AAFF00] rounded-full opacity-15 animate-float" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Основной контент футера */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Логотип и описание */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#AAFF00] rounded-lg flex items-center justify-center">
                <span className="text-[#020205] font-bold text-2xl">L</span>
              </div>
              <div>
                <div className="text-[#F2F2F2] text-3xl font-bold">LEGA</div>
                <div className="text-[#AAFF00] text-sm font-light tracking-wider">
                  marketing
                </div>
              </div>
            </div>
            <p className="text-[#F2F2F2] text-lg leading-relaxed mb-6 opacity-80">
              Современная упаковка твоего бизнеса.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg flex items-center justify-center border border-[#333] hover:border-[#AAFF00] hover:bg-[#AAFF00] hover:text-[#020205] transition-all duration-300 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-2xl font-bold text-[#F2F2F2] mb-6 relative">
              Контакты
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#AAFF00] rounded-full" />
            </h3>
            <ul className="space-y-4">
              {contacts.map((contact) => (
                <li key={contact.type} className="group">
                  <div className="text-[#AAFF00] text-sm font-medium mb-1">
                    {contact.type}
                  </div>
                  <a
                    href={
                      contact.type === 'Email'
                        ? `mailto:${contact.value}`
                        : contact.type === 'Telegram'
                        ? `https://t.me/${contact.value.replace('@', '')}`
                        : contact.type.includes('Телефон')
                        ? `tel:${contact.value}`
                        : '#'
                    }
                    className="text-[#F2F2F2] hover:text-[#AAFF00] transition-colors duration-300 opacity-80 hover:opacity-100"
                  >
                    {contact.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Быстрая связь */}
          <div>
            <h3 className="text-2xl font-bold text-[#F2F2F2] mb-6 relative">
              Связаться
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#AAFF00] rounded-full" />
            </h3>
            <div className="space-y-4">
              <button className="w-full bg-[#AAFF00] text-[#020205] px-6 py-4 rounded-lg font-bold hover:bg-[#88CC00] transition-colors shadow-lg">
                Написать
              </button>
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#AAFF00] to-transparent mb-8" />

        {/* Нижняя часть */}
        <div className="text-center">
          <div className="text-[#F2F2F2] opacity-60">
            © {currentYear} LEGA Marketing. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

const features = [
  {
    title: 'Веб-разработка',
    description: 'Создаем современные веб-приложения с использованием React, Next.js и других передовых технологий',
    icon: '🚀'
  },
  {
    title: 'Мобильные приложения',
    description: 'Разрабатываем нативные и кроссплатформенные мобильные приложения для iOS и Android',
    icon: '📱'
  },
  {
    title: 'UI/UX Дизайн',
    description: 'Создаем интуитивно понятные и красивые пользовательские интерфейсы',
    icon: '🎨'
  },
  {
    title: 'Облачные решения',
    description: 'Помогаем в миграции и разработке решений для облачных платформ',
    icon: '☁️'
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Настраиваем автоматизированные процессы развертывания и мониторинга',
    icon: '⚙️'
  },
  {
    title: 'Консультации',
    description: 'Предоставляем экспертные консультации по архитектуре и технологическим решениям',
    icon: '💡'
  }
]

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Предлагаем полный спектр услуг для цифровой трансформации вашего бизнеса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
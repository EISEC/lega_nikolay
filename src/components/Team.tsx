'use client'

export function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Николай',
      position: 'Основатель & CEO',
      description: 'Эксперт в области цифрового маркетинга с 8-летним опытом',
      image: '/img/team/nikolay.jpg',
      skills: ['Стратегия', 'Управление', 'Маркетинг'],
    },
    {
      id: 2,
      name: 'Анна',
      position: 'Lead Designer',
      description: 'Создает уникальные дизайны, которые продают',
      image: '/img/team/anna.jpg',
      skills: ['UI/UX', 'Брендинг', 'Веб-дизайн'],
    },
    {
      id: 3,
      name: 'Михаил',
      position: 'Senior Developer',
      description: 'Разрабатывает современные и быстрые веб-решения',
      image: '/img/team/mikhail.jpg',
      skills: ['React', 'Node.js', 'TypeScript'],
    },
    {
      id: 4,
      name: 'Елена',
      position: 'Marketing Manager',
      description: 'Специалист по продвижению и привлечению клиентов',
      image: '/img/team/elena.jpg',
      skills: ['SEO', 'Контекст', 'Соцсети'],
    },
  ]

  return (
    <section className="relative bg-[#020205] py-20 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#AAFF00] rounded-full opacity-10 animate-pulse-glow" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#AAFF00] rounded-full opacity-15 animate-float" />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-[#AAFF00] rounded-full opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-bold text-[#F2F2F2] mb-6">
            Команда
          </h2>
          <div className="w-32 h-2 bg-[#AAFF00] mx-auto rounded-full" />
        </div>

        {/* Сетка команды */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-lg overflow-hidden hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Фото */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Контент */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#F2F2F2] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#AAFF00] text-lg font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-[#F2F2F2] text-sm leading-relaxed mb-6 opacity-80">
                  {member.description}
                </p>

                {/* Навыки */}
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-[#AAFF00] text-[#020205] text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover эффект */}
              <div className="absolute inset-0 bg-[#AAFF00] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

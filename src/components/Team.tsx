'use client'

import { WavyLine } from './WavyLine'

export function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Анна Петрова',
      position: 'Дизайнер',
      description:
        'Создает уникальные и современные дизайны, которые привлекают внимание и продают',
      image: '/img/team/anna-petrova.jpg',
      skills: ['UI/UX', 'Брендинг', 'Веб-дизайн'],
    },
    {
      id: 2,
      name: 'Михаил Иванов',
      position: 'Разработчик',
      description:
        'Воплощает самые смелые идеи в жизнь с помощью современных технологий',
      image: '/img/team/mikhail-ivanov.jpg',
      skills: ['React', 'Node.js', 'TypeScript'],
    },
    {
      id: 3,
      name: 'Елена Сидорова',
      position: 'Маркетолог',
      description:
        'Эксперт по продвижению бизнеса в интернете и привлечению целевой аудитории',
      image: '/img/team/elena-sidorova.jpg',
      skills: ['SEO', 'Контекст', 'Аналитика'],
    },
    {
      id: 4,
      name: 'Дмитрий Козлов',
      position: 'Менеджер проектов',
      description:
        'Координирует работу команды и следит за качественным выполнением проектов',
      image: '/img/team/dmitriy-kozlov.jpg',
      skills: ['Управление', 'Планирование', 'Коммуникации'],
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
            Наша команда
          </h2>
          <div className="flex justify-center">
            <WavyLine width={128} height={10} className="text-[#AAFF00]" />
          </div>
        </div>

        {/* Сетка команды */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-lg overflow-hidden hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-[#333] hover:border-[#AAFF00]"
            >
              {/* Фото */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#AAFF00] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              {/* Контент */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#F2F2F2] mb-2">
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
            </div>
          ))}
        </div>

        {/* Дополнительная информация о команде */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#F2F2F2] text-lg lg:text-xl leading-relaxed opacity-90">
              Наша команда — это сплоченный коллектив профессионалов, где каждый
              эксперт в своей области. Мы объединяем креативность, технические
              навыки и маркетинговую экспертизу для создания успешных проектов,
              которые приносят реальные результаты нашим клиентам.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

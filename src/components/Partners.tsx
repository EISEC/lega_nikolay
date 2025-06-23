'use client'

export function Partners() {
  const partners = [
    {
      id: 1,
      name: 'TechCorp',
      logo: '/svg/logos/techcorp.svg',
    },
    {
      id: 2,
      name: 'DigitalFlow',
      logo: '/svg/logos/digitalflow.svg',
    },
    {
      id: 3,
      name: 'InnovateHub',
      logo: '/svg/logos/innovatehub.svg',
    },
    {
      id: 4,
      name: 'CloudSystems',
      logo: '/svg/logos/cloudsystems.svg',
    },
    {
      id: 5,
      name: 'DataVision',
      logo: '/svg/logos/datavision.svg',
    },
    {
      id: 6,
      name: 'WebMasters',
      logo: '/svg/logos/webmasters.svg',
    },
    {
      id: 7,
      name: 'MarketPro',
      logo: '/svg/logos/marketpro.svg',
    },
    {
      id: 8,
      name: 'BrandForce',
      logo: '/svg/logos/brandforce.svg',
    },
  ]

  return (
    <section className="relative bg-[#020205] py-20 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-16 w-20 h-20 bg-[#AAFF00] rounded-full opacity-15 animate-pulse-glow" />
      <div className="absolute bottom-16 right-20 w-16 h-16 bg-[#AAFF00] rounded-full opacity-20 animate-float" />
      <div className="absolute top-1/2 right-16 w-12 h-12 bg-[#AAFF00] rounded-full opacity-25" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-bold text-[#F2F2F2] mb-6">
            Партнеры
          </h2>
          <div className="w-32 h-2 bg-[#AAFF00] mx-auto rounded-full" />
        </div>

        {/* Сетка партнеров */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] p-6 rounded-lg border border-[#333] hover:border-[#AAFF00] hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Логотип */}
              <div className="w-full h-20 bg-[#F2F2F2] rounded flex items-center justify-center group-hover:bg-[#AAFF00] transition-colors">
                <div
                  className="w-16 h-12 bg-contain bg-center bg-no-repeat opacity-80 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${partner.logo})` }}
                />
              </div>

              {/* Название */}
              <h3 className="text-[#F2F2F2] text-sm font-bold text-center mt-4">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

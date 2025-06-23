'use client'

import { WavyLine } from './WavyLine'

export function Partners() {
  const partners = [
    {
      id: 1,
      name: 'TechCorp',
      logo: '/svg/logos/techcorp.svg',
    },
    {
      id: 2,
      name: 'InnovateHub',
      logo: '/svg/logos/innovatehub.svg',
    },
    {
      id: 3,
      name: 'DigitalFlow',
      logo: '/svg/logos/digitalflow.svg',
    },
    {
      id: 4,
      name: 'BrandForce',
      logo: '/svg/logos/brandforce.svg',
    },
    {
      id: 5,
      name: 'CloudSystems',
      logo: '/svg/logos/cloudsystems.svg',
    },
    {
      id: 6,
      name: 'DataVision',
      logo: '/svg/logos/datavision.svg',
    },
    {
      id: 7,
      name: 'WebMasters',
      logo: '/svg/logos/webmasters.svg',
    },
    {
      id: 8,
      name: 'MarketPro',
      logo: '/svg/logos/marketpro.svg',
    },
  ]

  return (
    <section className="relative bg-[#020205] py-20 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-[#AAFF00] rounded-full opacity-15 animate-pulse-glow" />
      <div className="absolute bottom-24 left-16 w-20 h-20 bg-[#AAFF00] rounded-full opacity-20 animate-float" />
      <div className="absolute top-1/2 right-32 w-16 h-16 bg-[#AAFF00] rounded-full opacity-10" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-bold text-[#F2F2F2] mb-6">
            Партнеры
          </h2>
          <div className="flex justify-center">
            <WavyLine width={128} height={10} className="text-[#AAFF00]" />
          </div>
        </div>

        {/* Сетка партнеров */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 rounded-lg border border-[#333] hover:border-[#AAFF00] transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center min-h-[120px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />

              {/* Hover эффект */}
              <div className="absolute inset-0 bg-[#AAFF00] opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

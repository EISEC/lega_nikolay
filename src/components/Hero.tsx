'use client'

import React, { useState } from 'react'

interface HeroProps {
  onWorksClick: () => void
  onServicesClick: () => void
  onReviewsClick: () => void
  onContactClick: () => void
}

const Hero: React.FC<HeroProps> = ({
  onWorksClick,
  onServicesClick,
  onReviewsClick,
  onContactClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (callback: () => void) => {
    callback()
    setIsMenuOpen(false)
  }

  return (
    <div className="relative bg-[#020205] w-full min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full">
        {/* Background Image */}
        <div
          className="absolute right-[-10%] top-[-10%] w-[60%] h-[120%] bg-cover bg-center bg-no-repeat opacity-60 lg:opacity-80"
          style={{ backgroundImage: 'url(/img/hero-background.png)' }}
        />

        {/* Portals - скрываем на мобильных */}
        <img
          src="/img/portal-large.svg"
          alt=""
          className="hidden md:block absolute w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px] right-[10%] lg:right-[15%] bottom-[10%] lg:bottom-[15%] animate-pulse-glow"
        />
        <img
          src="/img/portal-medium.svg"
          alt=""
          className="hidden md:block absolute w-[25px] md:w-[30px] lg:w-[35px] h-[25px] md:h-[30px] lg:h-[35px] right-[20%] lg:right-[25%] top-[30%] lg:top-[35%] animate-float"
        />
        <img
          src="/img/portal-small.svg"
          alt=""
          className="hidden lg:block absolute w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] right-[40%] lg:right-[45%] top-[50%] lg:top-[55%] opacity-80"
        />
      </div>

      {/* Read More Arrows */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <img
          src="/img/read-more-arrows.svg"
          alt=""
          className="w-[24px] md:w-[31px] h-[32px] md:h-[42px] animate-bounce"
        />
      </div>

      {/* Container for content */}
      <div className="relative z-10 min-h-screen container flex flex-col mx-auto">
        {/* Header Container */}
        <div className="w-full">
          {/* Header with wider container */}
          <header className="w-full mx-auto flex items-center justify-between px-4 pt-6 md:pt-8 pb-4">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/img/logo.svg"
                alt="LEGA"
                className="w-[100px] md:w-[120px] lg:w-[160px] h-auto"
              />
              <span className="ml-2 md:ml-3 lg:ml-5 text-white text-lg md:text-xl lg:text-[30px] font-light font-neue-machina leading-[1.5] tracking-[0.05em]">
                marketing
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-12">
              <button
                onClick={onWorksClick}
                className="text-[#F2F2F2] text-[16px] xl:text-[20px] font-light font-panton leading-[1.3] tracking-[0.05em] hover:text-[#AAFF00] transition-colors relative group"
              >
                Наши работы
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#AAFF00] transition-all duration-300 group-hover:w-full"></div>
              </button>
              <button
                onClick={onServicesClick}
                className="text-[#F2F2F2] text-[16px] xl:text-[20px] font-light font-panton leading-[1.3] tracking-[0.05em] hover:text-[#AAFF00] transition-colors relative group"
              >
                Услуги
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#AAFF00] transition-all duration-300 group-hover:w-full"></div>
              </button>
              <button
                onClick={onReviewsClick}
                className="text-[#F2F2F2] text-[16px] xl:text-[20px] font-light font-panton leading-[1.3] tracking-[0.05em] hover:text-[#AAFF00] transition-colors relative group"
              >
                Отзывы
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#AAFF00] transition-all duration-300 group-hover:w-full"></div>
              </button>
              <button
                onClick={onContactClick}
                className="text-[#F2F2F2] text-[16px] xl:text-[20px] font-light font-panton leading-[1.3] tracking-[0.05em] hover:text-[#AAFF00] transition-colors relative group"
              >
                Контакты
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#AAFF00] transition-all duration-300 group-hover:w-full"></div>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            >
              <div
                className={`w-6 h-0.5 bg-[#F2F2F2] transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-[#F2F2F2] transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-[#F2F2F2] transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          </header>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-[#020205] border-t border-[#333] z-50">
              <nav className="max-w-screen-xl mx-auto flex flex-col px-4 py-4 space-y-4">
                <button
                  onClick={() => handleNavClick(onWorksClick)}
                  className="text-[#F2F2F2] text-lg font-light font-panton hover:text-[#AAFF00] transition-colors text-left"
                >
                  Наши работы
                </button>
                <button
                  onClick={() => handleNavClick(onServicesClick)}
                  className="text-[#F2F2F2] text-lg font-light font-panton hover:text-[#AAFF00] transition-colors text-left"
                >
                  Услуги
                </button>
                <button
                  onClick={() => handleNavClick(onReviewsClick)}
                  className="text-[#F2F2F2] text-lg font-light font-panton hover:text-[#AAFF00] transition-colors text-left"
                >
                  Отзывы
                </button>
                <button
                  onClick={() => handleNavClick(onContactClick)}
                  className="text-[#F2F2F2] text-lg font-light font-panton hover:text-[#AAFF00] transition-colors text-left"
                >
                  Контакты
                </button>
              </nav>
            </div>
          )}

          {/* Navigation Underline - внутри контейнера */}
          <div className="w-full mx-auto px-4">
            <div className="w-full border-t border-[#AAFF00] opacity-30"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full flex items-center">
          <div className="w-full mx-auto pt-8 pb-16 md:pb-20">
            {/* Content with limited width for better readability */}
            <div className="max-w-5xl">
              {/* Main Heading */}
              <h1 className="text-[#F2F2F2] text-3xl md:text-4xl lg:text-6xl xl:text-[90px] font-medium font-neue-machina leading-[1.1] mb-6 md:mb-8 lg:mb-12">
                Современная упаковка твоего бизнеса
              </h1>

              {/* Wavy Line */}
              <div className="mb-6 md:mb-8 lg:mb-12">
                <img
                  src="/img/wavy-line.svg"
                  alt=""
                  className="w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px] h-auto"
                />
              </div>

              {/* Description */}
              <p className="text-[#F2F2F2] text-base md:text-lg lg:text-xl xl:text-[20px] font-light font-panton leading-[1.5] tracking-[0.05em] mb-6 md:mb-8 lg:mb-12 max-w-3xl">
                Комплексная прокачка бизнеса: от дизайна и разработки сайта до
                продвижения в поисковых системах и соцсетях. Мы точно знаем, как
                привлечь новых клиентов
                <br />и увеличить продажи.
              </p>

              {/* CTA Button */}
              <button className="border border-[#AAFF00] bg-transparent hover:bg-[#AAFF00] hover:text-[#020205] transition-all duration-300 group rounded-md px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 w-auto min-w-[180px] md:min-w-[200px] lg:min-w-[280px]">
                <span className="text-[#AAFF00] group-hover:text-[#020205] text-base md:text-lg lg:text-xl xl:text-[24px] font-light font-neue-machina">
                  Задай вопрос
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

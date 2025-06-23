'use client'

import { Footer } from '@/components/Footer'
import { Founder } from '@/components/Founder'
import Hero from '@/components/Hero'
import { Partners } from '@/components/Partners'
import { Reviews } from '@/components/Reviews'
import { Services } from '@/components/Services'
import { Team } from '@/components/Team'
import { Works } from '@/components/Works'

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen bg-[#020205]">
      <section id="hero">
        <Hero
          onWorksClick={() => scrollToSection('works')}
          onServicesClick={() => scrollToSection('services')}
          onReviewsClick={() => scrollToSection('reviews')}
          onContactClick={() => scrollToSection('footer')}
        />
      </section>
      <section id="works">
        <Works />
      </section>
      <section id="founder">
        <Founder />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="partners">
        <Partners />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  )
}

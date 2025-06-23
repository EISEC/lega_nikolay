import { Footer } from '@/components/Footer'
import { Founder } from '@/components/Founder'
import { Hero } from '@/components/Hero'
import { Partners } from '@/components/Partners'
import { Reviews } from '@/components/Reviews'
import { Services } from '@/components/Services'
import { Team } from '@/components/Team'
import { Works } from '@/components/Works'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020205]">
      <section id="hero">
        <Hero />
      </section>
      <section id="works">
        <Works />
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
      <section id="founder">
        <Founder />
      </section>
      <section id="partners">
        <Partners />
      </section>
      <Footer />
    </main>
  )
}

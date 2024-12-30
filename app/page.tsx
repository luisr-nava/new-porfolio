'use client'
import { About, Contact, Experiece, Header, Hero, Projects, SectionContainer } from '@/components'
import { GoogleAnalytics } from 'nextjs-google-analytics'
export default function Home() {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <main className='flex min-h-screen flex-col items-center justify-between py-24 px-8 md:px-24' id='top'>
        <Header />
        <SectionContainer className='py-24 md:py-36'>
          <Hero />
        </SectionContainer>
        <SectionContainer id='experiencia' className='py-16 md:py-32'>
          <Experiece />
        </SectionContainer>
        <SectionContainer id='proyectos' className='py-16'>
          <Projects />
        </SectionContainer>
        <SectionContainer id='sobre-mi' className='py-16'>
          <About />
        </SectionContainer>
        <SectionContainer id='contacto' className='py-16'>
          <Contact />
        </SectionContainer>
      </main>
    </>
  )
}

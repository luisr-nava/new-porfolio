import { About, Contact, Experiece, Header, Hero, Projects, SectionContainer } from '@/components'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Proyectos - Luis Rodolfo Navarro',
  description:
    'Una colección de proyectos desarrollados por Luis Rodolfo Navarro, que demuestran su habilidad en la creación de soluciones web dinámicas, eficientes y centradas en el usuario.'
}
export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between py-24 px-8 md:px-24'
      id='top'>Pagina en Remodelacion</main>
  )
}

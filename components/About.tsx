import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import React from 'react'

export const About = () => {
  return (
    <article className=' text-gray-700 dark:text-gray-300 md:flex-row'>
      <h2 className='flex items-center mb-14 text-3xl md:text-4xl font-bold gap-x-3 text-black/80 dark:text-white '>
        <Icon icon='mi:user-check' width='28' height='28' />
        Sobre mí
      </h2>
      <div className='md:flex grid md:gap-5 justify-items-center items-center'>
        <div className='items-center mb-10 md:mt-0 w-1/2 grid justify-items-center'>
          <Image
            src='/me.webp'
            alt='Luis Navarro'
            height={700}
            width={700}
            className='w-72 h-72 rotate-6 transition-all duration-300 rounded-lg shadow-xl justify-items-center'
          />
        </div>
        <div className='[&>p]:mb-4 [&>p>strong]:text-green-700/75 dark:[&>p>strong]:text-emerald-400 font-bold text-sm text-pretty md:w-1/2'>
          <p>
            ¡Hola! Soy Luis Navarro, un desarrollador Full Stack de Buenos Aires, Argentina. Desde hace tres
            años, he estado sumergido en el diseño y desarrollo web, siempre buscando nuevas maneras de
            mejorar la experiencia de los usuarios a través de la tecnología.{' '}
            <strong className='font-mono'>
              Mi enfoque se centra en crear soluciones innovadoras y útiles que hagan la vida más fácil para
              las personas.
            </strong>
          </p>
          <p>
            Durante mi trayectoria, he tenido la oportunidad de trabajar en diversos proyectos que me han
            permitido no solo aplicar mis conocimientos,{' '}
            <strong className='font-mono'>sino también aprender y adaptarme a nuevas tecnologías. </strong>
            Disfruto del proceso de colaborar en equipo, donde la combinación de ideas y habilidades lleva a
            la creación de productos de alta calidad.
          </p>
          <p>
            Además de mi trabajo, me interesa estar conectado con la comunidad tecnológica.{' '}
            <strong className='font-mono'>
              Me mantengo actualizado sobre las últimas tendencias y{' '}
              <em className='italic'>
                participo en eventos locales donde comparto mis experiencias y aprendo de otros profesionales.
              </em>{' '}
            </strong>
            Para mí, el desarrollo web no es solo un trabajo, sino una oportunidad constante para innovar y
            crecer.
          </p>
        </div>
      </div>
    </article>
  )
}

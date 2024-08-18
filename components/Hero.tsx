import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { LinkButton } from './LinkButton'

export const Hero = () => {
  return (
    <div className='max-w-full '>
      <div className='grid gap-4 mb-4'>
        <div className='flex items-center justify-around'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-800 lg:text-5xl  dark:text-white'>
            Hey, soy Luis Navarro
          </h1>
          <Image src='/hero.webp' alt='Luis Navarro' width={175} height={175} className='rounded-full' />
        </div>
        <div className='grid space-y-4'>
          <p className='mt-6 text-xl text-gray-800 dark:[&>strong]:text-strong-200   dark:text-gray-100'>
            Soy un desarrollador Full Stack con experiencia en diseño web y desarrollo backend utilizando
            tecnologías como{' '}
            <strong className='dark:text-emerald-400/90 font-semibold text-emerald-800'>
              React, Node.js, y bases de datos SQL/NoSQL.
            </strong>{' '}
            Me apasiona aprender nuevas herramientas y colaborar en proyectos que generen soluciones
            innovadoras y útiles.
          </p>
          <div className='flex flex-wrap'>
            <LinkButton href='https://www.linkedin.com/in/luis-navarro-282858243'>
              <Icon icon='devicon:linkedin' />
              LinkedIn
            </LinkButton>
            <LinkButton href='https://www.github.com/luisnava6667'>
              <Icon icon='mdi:github' width='24' height='24' />
              GitHub
            </LinkButton>
            <LinkButton href='mailto:navaluisrodolfo@gmail.com'>
              <Icon icon='icon-park-outline:send-email' width='24' height='24' />
              navaluisrodolfo@gmail.com
            </LinkButton>
            <LinkButton href='mailto:navaluisrodolfo@gmail.com' passHref>
              <Icon icon='line-md:document-list-twotone' width='24' height='24' />
              Mi CV
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  )
}

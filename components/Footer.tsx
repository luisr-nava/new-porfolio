import React from 'react'
import { LinkButton } from './LinkButton'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='bg-emerald-950 text-white py-5 opacity-80 mt-16 flex justify-around '>
      <h2>Luis Navarro</h2>
      <strong>-</strong>
      <Link
        href='https://www.linkedin.com/in/luis-navarro-282858243'
        className='flex items-center gap-x-2 font-semibold text-white hover:text-gray-400 transition-all'>
        <Icon icon='devicon:linkedin' />
        LinkedIn
      </Link>
      <Link
        href='https://www.github.com/luisnava6667'
        className='flex items-center gap-x-2 font-semibold text-white hover:text-gray-400 transition-all'>
        <Icon icon='devicon:github' width='24' height='24' />
        GitHub
      </Link>
    </footer>
  )
}

import React from 'react'
import { LinkButton } from './LinkButton'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { GitHubIcon, LinkedinIcon } from './icons'

export const Footer = () => {
  return (
    <footer className='bg-emerald-950 text-sm md:text-xl text-white py-5 opacity-80 mt-16 flex justify-around items-center'>
      <h2>Luis Navarro</h2>
      <strong>-</strong>
      <h3>navaluisrodolfo@gmail.com</h3>
      <strong>-</strong>
      <Link
        href='https://www.linkedin.com/in/luis-navarro-282858243'
        className='flex items-center gap-x-2 font-semibold text-white hover:text-gray-400 transition-all'>
        <LinkedinIcon />
        LinkedIn
      </Link>

      <Link
        href='https://www.github.com/luisnava6667'
        className='flex items-center gap-x-2 font-semibold text-white hover:text-gray-400 transition-all'>
        <GitHubIcon />
        GitHub
      </Link>
    </footer>
  )
}

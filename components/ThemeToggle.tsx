'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { MoonIcon, SunIcon } from './icons'
export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  useEffect(() => setMounted(true), [])
  if (!mounted) return <SunIcon />
  if (resolvedTheme === 'dark') {
    return (
      <button
        aria-label='light theme'
        onClick={() => setTheme('light')}
        className='transition hover:text-emerald-500 dark:hover:text-emerald-400'>
        <SunIcon />
      </button>
    )
  }
  if (resolvedTheme === 'light') {
    return (
      <button
        aria-label='dark theme'
        onClick={() => setTheme('dark')}
        className='transition hover:text-emerald-500 dark:hover:text-emerald-400'>
        <MoonIcon />
      </button>
    )
  }
}

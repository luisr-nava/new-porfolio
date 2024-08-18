'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Icon } from '@iconify/react'
export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  useEffect(() => setMounted(true), [])
  if (!mounted)
    return (
      <Image
        src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=='
        width={20}
        height={20}
        sizes='20x20'
        alt='Loading Light/Dark Toggle'
        priority={false}
        title='Loading Light/Dark Toggle'
      />
    )
  if (resolvedTheme === 'dark') {
    return (
      <button onClick={() => setTheme('light')}>
        <Icon
          icon='line-md:sun-rising-loop'
          width={25}
          height={25}
          className='transition hover:text-emerald-500 dark:hover:text-emerald-400'
        />
      </button>
    )
  }
  if (resolvedTheme === 'light') {
    return (
      <button onClick={() => setTheme('dark')}>
        <Icon
          icon='line-md:moon-alt-loop'
          width={25}
          height={25}
          className='transition hover:text-emerald-500 dark:hover:text-emerald-400'
        />
      </button>
    )
  }
}

import Link from 'next/link'
import React from 'react'
interface LinkButtonProps {
  children: React.ReactNode
  classname?: string
  href: string
  passHref?: boolean
}
export const LinkButton = ({ children, classname, href, passHref }: LinkButtonProps) => {
  return (
    <Link
      passHref={passHref}
      target='_blank'
      href={href}
      className='flex items-center gap-x-2 font-semibold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition'>
      {children}
    </Link>
  )
}

import React from 'react'
interface SectionContainerProps {
  children: React.ReactNode
  id?: string
  className: string
}
export const SectionContainer = ({ children, id, className }: SectionContainerProps) => {
  return (
    <section
      className={`${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`}
      id={id}>
      {children}
    </section>
  )
}

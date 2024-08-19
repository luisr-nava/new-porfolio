import { projects, tags } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LinkButton } from './LinkButton'
import { CodeIcon, GitHubIcon, LinkIcon } from './icons'

export const Projects = () => {
  return (
    <div>
      <h2 className='flex items-center mb-6 text-3xl md:text-4xl font-bold gap-x-3 text-black/80 dark:text-white'>
        <CodeIcon />
        Projects
      </h2>
      <div className='flex flex-col gap-y-16'>
        {projects.map((project, index) => (
          <article
            key={index}
            className='flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0'>
            {' '}
            <div className='w-full md:w-1/2 '>
              <div className='relative grid  col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl  overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50'>
                <Image
                  width={300}
                  height={100}
                  alt={`${project.title}`}
                  className='object-cover object-top w-full h-56 items-center  transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105 '
                  loading='lazy'
                  src={project.image}
                />
              </div>
            </div>
            <div className='w-full md:w-1/2 md:max-w-lg'>
              <h3 className='text-2xl font-bold  text-emerald-800 dark:text-white'>{project.title}</h3>
              <div className='flex flex-wrap mt-2'>
                <ul className='flex flex-row flex-wrap mb-2 gap-2'>
                  {project.tags.map((tag, index) => (
                    <li key={index}>
                      <span
                        className={`text-black flex items-center gap-x-2 rounded-full text-xs  bg-white py-1 px-2 `}>
                        {tag.icon}
                        {tag.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className='mt-2 text-gray-700 dark:text-gray-200'>{project.description}</div>
                <div className='flex mt-5 md:mt-2'>
                  <LinkButton href={project.github}>
                    <GitHubIcon/>
                    Code
                  </LinkButton>
                  <LinkButton href={project.link}>
                    <LinkIcon />
                    Preview
                  </LinkButton>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <Link
        href='/projects'
        className=' mt-5 inline-flex items-center px-4 py-2 text-sm md:text-xl font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-emerald-700 focus:z-10 
      focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-emerald-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white
      dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition'>
        Ver Más
      </Link>
    </div>
  )
}

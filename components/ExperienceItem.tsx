import { ExperienceItemProps } from '@/types'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

export const ExperienceItem = ({
  description,
  date,
  link,
  tecnology,
  title,
  softSkills
}: ExperienceItemProps) => {
  return (
    <li className='mb-10 ms-6'>
      <span className='absolute flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full -start-3 ring-8 ring-emerald-500 dark:ring-emerald-500 dark:bg-emerald-700'>
        <Icon icon='lets-icons:calendar-fill' />
      </span>
      <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>{title}</h3>
      <time className='block mb-2 text-sm font-bold leading-none text-emerald-700 dark:text-gray-100'>
        {date}
      </time>
      <p className='mb-4 text-base font-normal'>{description}</p>
      {tecnology && (
        <p className='text-lg font-bold text-gray-600 dark:text-white mb-5'>
          <strong className='font-bold text-emerald-700 dark:text-emerald-300'>Tecnologías: </strong>
          {tecnology}
        </p>
      )}
      {softSkills && (
        <p className='text-lg font-bold text-gray-600 dark:text-white'>
          <strong className='font-bold text-emerald-700 dark:text-emerald-300'>Soft Skills: </strong>
          {softSkills}
        </p>
      )}
      {link && (
        <Link
          href='https://www.linkedin.com/company/footalentgroup/'
          className=' mt-5 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-emerald-700 focus:z-10 
      focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-emerald-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white
      dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition'>
          Ver Más
        </Link>
      )}
    </li>
  )
}

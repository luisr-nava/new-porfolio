import { ExperienceItemProps, NavItems, ProjectsProps, TagProps } from '@/types'
import { Icon } from '@iconify/react'
import { ReactElement } from 'react'
import { createIcon } from './createIcon'

export const navItems: NavItems[] = [
  { title: '</LN>', label: 'inicio', url: '#top' },
  { title: 'Experiencia', label: 'experiencia', url: '#experiencia' },
  { title: 'Proyectos', label: 'proyectos', url: '#proyectos' },
  { title: 'Sobre Mí', label: 'sobre-mi', url: '#sobre-mi' },
  { title: 'Contacto', label: 'contacto', url: '#contacto' }
]
export const experienceItems: ExperienceItemProps[] = [
  {
    date: 'Enero 2023 - Actualmente',
    title: 'Desarrollador Full-Stack - FooTalenGroup ',
    description: `Como desarrollador full-stack, me enfoco en optimizar la experiencia del usuario mediante la colaboración estrecha con equipos de front-end, utilizando herramientas como React, Next.js y Tailwind CSS. Desarrollo APIs escalables con Node.js y Express, integrando bases de datos como PostgreSQL y MongoDB, y mejoro las aplicaciones a través de la integración de servicios externos.Mi capacidad para liderar proyectos, gestionar el tiempo eficazmente y mantener una comunicación clara me permite ofrecer soluciones eficientes y de alta calidad.`,
    link: 'https://www.linkedin.com/company/footalentgroup/',
    tecnology:
      'Astro, React, TypeScript, Next.js, Node.js, Clerk, Liveblocks, Convex, Tailwind CSS, Jest, Swagger, Sequelize.',
    softSkills:
      'Comunicación efectiva, Trabajo en equipo, Resolución de problemas, Pensamiento crítico, Adaptabilidad, Gestión del tiempo, Atención al detalle, Paciencia y persistencia, Colaboración en entornos ágiles, Curiosidad y deseo de aprendizaje continuo, Ética profesional.'
  },
  {
    date: 'Noviembre 2016 - Actualmente',
    title: 'Policía - Gobierno de la Ciudad de Buenos Aires',
    description:
      'En estos 8 años he desarrollado sólidas habilidades en comunicación y liderazgo, coordinando equipos y asegurando la claridad en la ejecución de tareas. Me destaco por ser un trabajador puntual y eficiente, tanto en equipos como de manera independiente',
    softSkills:
      'Comunicación efectiva, Trabajo en equipo, Liderazgo, Resolución de problemas, Adaptabilidad, Pensamiento crítico, Gestión del tiempo, Empatía, Creatividad, Capacidad de negociación, Toma de decisiones, Orientación a resultados, Capacidad de motivar a otros,'
  }
]

export const tags: { [key: string]: TagProps } = {
  NEXT: {
    name: 'Next.js',
    icon: createIcon('nonicons:next-16')
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    icon: createIcon('devicon:tailwindcss')
  },
  CLERK: {
    name: 'Clerk',
    icon: createIcon('simple-icons:clerk')
  },
  TYPESCRIPT: {
    name: 'Typescript',
    icon: createIcon('devicon:typescript')
  },
  REACT: {
    name: 'React',
    icon: createIcon('logos:react')
  },
  VUEJS: {
    name: 'Vuejs',
    icon: createIcon('vscode-icons:file-type-vue')
  }
}
export const projects: ProjectsProps[] = [
  {
    title: 'Mirro Clone',
    description:
      'Mirro Clone es una réplica funcional de Mirro, diseñada para proporcionar una plataforma donde los equipos pueden mantenerse organizados, alineados y comprometidos. La aplicación permite la creación de perfiles de equipo, la organización de objetivos y la gestión del feedback entre los miembros del equipo',
    link: 'https://mirro-clone.vercel.app/',
    github: 'https://github.com/luisnava6667/mirro-clone',
    image: '/projects/mirro-clone.webp',
    tags: [tags.NEXT, tags.TYPESCRIPT, tags.CLERK, tags.TAILWIND]
  },
  {
    title: 'Administrador Pacientes Vue',
    description:
      'Aplicación desarrollada con Vue.js que permite gestionar y organizar la información de pacientes. Es ideal para su uso en clínicas médicas, veterinarias o cualquier otro entorno que requiera un seguimiento detallado de los pacientes.',
    link: 'https://administrador-pacientes-vue-js.vercel.app/',
    github: 'https://github.com/luisnava6667/Administrador-Pacientes-VueJs',
    image: '/projects/segimiento.webp',
    tags: [tags.VUEJS, tags.TAILWIND]
  },
  {
    title: 'AppDolar',
    description:
      'Aplicación que permite consultar en tiempo real el precio del dólar en Argentina. Proporciona diferentes cotizaciones, incluyendo el dólar oficial, blue, y otras variantes, brindando información actualizada y accesible para los usuarios',
    link: 'https://app-dolar-cotizacion.vercel.app/',
    github: 'https://github.com/luisnava6667/app-dolar',
    image: '/projects/appdolar.webp',
    tags: [tags.NEXT, tags.TAILWIND]
  }
]

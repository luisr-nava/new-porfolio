import {
  ExperienceItemProps,
  NavItems,
  ProjectsProps,
  TagProps,
} from "@/types";
import {
  ClerkIcon,
  NextJsIcon,
  ReactIcon,
  TalwindIcon,
  TypescriptIcon,
  VueIcon,
} from "@/components/icons";

export const navItems: NavItems[] = [
  { title: "</LN>", label: "inicio", url: "#top" },
  { title: "Experiencia", label: "experiencia", url: "#experiencia" },
  { title: "Proyectos", label: "proyectos", url: "#proyectos" },
  { title: "Sobre Mí", label: "sobre-mi", url: "#sobre-mi" },
  { title: "Contacto", label: "contacto", url: "#contacto" },
];
export const experienceItems: ExperienceItemProps[] = [
  {
    date: "Septiembre 2024 - Actualidad",
    title: "Desarrollador FrontEnd - Agora Partnerships",
    description: `Desarrollo de componentes de interfaz de usuario utilizando React, TypeScript, Zustand, y Ant Design, incluyendo formularios dinámicos, tablas interactivas, y modales personalizados. Integración de React Router DOM para el manejo de tabs dinámicos en la interfaz, sincronizando la URL con el estado actual de las tabs y filtros aplicados. Mejora del rendimiento de la aplicación, optimizando el Speed Index y manejando la asignación de clases condicionales en Tailwind CSS para mejorar la experiencia de usuario. Colaboración estrecha con el equipo de diseño para asegurar la implementación precisa de las interfaces de usuario, utilizando Figma para mantener la consistencia visual y la interacción en la aplicación. Gestión de flujos de estado complejos con Zustand, incluyendo la actualización de datos en modales y tablas, soporte para múltiples escenarios de creación y actualización de registros, y lógica de filtrado y paginación.`,
    link: "https://agorapartnerships.org",
    tecnology:
      "React, TypeScript, React Router DOM, Zustand, Ant Design, Tailwind CSS",
    softSkills:
      "Colaboración en equipo, atención al detalle, comunicación efectiva, gestión de tiempo, solución de problemas",
  },
  {
    date: "Enero 2023 - Septiembre 2024",
    title: "Desarrollador Full-Stack - FooTalenGroup ",
    description: `Como desarrollador full-stack, me enfoco en optimizar la experiencia del usuario mediante la colaboración estrecha con equipos de front-end, utilizando herramientas como React, Next.js y Tailwind CSS. Desarrollo APIs escalables con Node.js y Express, integrando bases de datos como PostgreSQL y MongoDB, y mejoro las aplicaciones a través de la integración de servicios externos.Mi capacidad para liderar proyectos, gestionar el tiempo eficazmente y mantener una comunicación clara me permite ofrecer soluciones eficientes y de alta calidad.`,
    link: "https://www.linkedin.com/company/footalentgroup/",
    tecnology:
      "Astro, React, TypeScript, Next.js, Node.js, Clerk, Liveblocks, Convex, Tailwind CSS, Jest, Swagger, Sequelize.",
    softSkills:
      "Comunicación efectiva, Trabajo en equipo, Resolución de problemas, Pensamiento crítico, Adaptabilidad, Gestión del tiempo, Atención al detalle, Paciencia y persistencia, Colaboración en entornos ágiles, Curiosidad y deseo de aprendizaje continuo, Ética profesional.",
  },
  {
    date: "Noviembre 2016 - Octubre 2024",
    title: "Policía - Gobierno de la Ciudad de Buenos Aires",
    description:
      "En estos 8 años he desarrollado sólidas habilidades en comunicación y liderazgo, coordinando equipos y asegurando la claridad en la ejecución de tareas. Me destaco por ser un trabajador puntual y eficiente, tanto en equipos como de manera independiente",
    softSkills:
      "Comunicación efectiva, Trabajo en equipo, Liderazgo, Resolución de problemas, Adaptabilidad, Pensamiento crítico, Gestión del tiempo, Empatía, Creatividad, Capacidad de negociación, Toma de decisiones, Orientación a resultados, Capacidad de motivar a otros,",
  },
];

export const tags: { [key: string]: TagProps } = {
  NEXT: {
    name: "Next.js",
    icon: NextJsIcon(),
  },
  TAILWIND: {
    name: "Tailwind CSS",
    icon: TalwindIcon(),
  },
  CLERK: {
    name: "Clerk",
    icon: ClerkIcon(),
  },
  TYPESCRIPT: {
    name: "Typescript",
    icon: TypescriptIcon(),
  },
  REACT: {
    name: "React",
    icon: ReactIcon(),
  },
  VUEJS: {
    name: "Vuejs",
    icon: VueIcon(),
  },
};
export const projects: ProjectsProps[] = [
  {
    title: "Mirro Clone",
    description:
      "Mirro Clone es una réplica funcional de Mirro, diseñada para proporcionar una plataforma donde los equipos pueden mantenerse organizados, alineados y comprometidos. La aplicación permite la creación de perfiles de equipo, la organización de objetivos y la gestión del feedback entre los miembros del equipo",
    link: "https://mirro-clone.vercel.app/",
    github: "https://github.com/luisnava6667/mirro-clone",
    image: "/projects/mirro-clone.webp",
    tags: [tags.NEXT, tags.TYPESCRIPT, tags.CLERK, tags.TAILWIND],
  },
  {
    title: "Administrador Pacientes Vue",
    description:
      "Aplicación desarrollada con Vue.js que permite gestionar y organizar la información de pacientes. Es ideal para su uso en clínicas médicas, veterinarias o cualquier otro entorno que requiera un seguimiento detallado de los pacientes.",
    link: "https://administrador-pacientes-vue-js.vercel.app/",
    github: "https://github.com/luisnava6667/Administrador-Pacientes-VueJs",
    image: "/projects/segimiento.webp",
    tags: [tags.VUEJS, tags.TAILWIND],
  },
  {
    title: "AppDolar",
    description:
      "Aplicación que permite consultar en tiempo real el precio del dólar en Argentina. Proporciona diferentes cotizaciones, incluyendo el dólar oficial, blue, y otras variantes, brindando información actualizada y accesible para los usuarios",
    link: "https://app-dolar-cotizacion.vercel.app/",
    github: "https://github.com/luisnava6667/app-dolar",
    image: "/projects/appdolar.webp",
    tags: [tags.NEXT, tags.TAILWIND],
  },
];

import { z } from 'zod'
import { Contact } from '../components/Contact'

export interface IconsProps {
  id?: string
  className?: string
}
export interface NavItems {
  title: string
  label: string
  url: string
}
export interface ExperienceItemProps {
  date: string
  title: string
  description: string
  link?: string
  tecnology?: string
  softSkills?: string
}
export interface TagProps {
  name: string
  icon: JSX.Element
}
export interface ProjectsProps {
  title: string
  description: string
  link: string
  github: string
  image: string
  tags: TagProps[]
}
const contactSchema = z.object({
  user_name: z.string(),
  user_email: z.string().email(),
  message: z.string()
})

type Contact = z.infer<typeof contactSchema>
export type ContactForm = Pick<Contact, 'user_email' | 'message' | 'user_name'>

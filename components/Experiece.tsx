import { experienceItems } from '@/utils'
import { ExperienceItem } from './ExperienceItem'
import { BriefcaseIcon } from './icons'

export const Experiece = () => {
  return (
    <div className='grid gap-y-7 space-x-3'>
      <h2 className='flex items-center mb-6 text-3xl md:text-4xl font-bold gap-x-3 text-black/80 dark:text-white'>
        <BriefcaseIcon />
        Experiencia Laboral
      </h2>
      <ol className='relative border-s border-emerald-600 dark:border-white'>
        {experienceItems.map((exp, index) => (
          <ExperienceItem
            key={index}
            date={exp.date}
            title={exp.title}
            description={exp.description}
            link={exp.link}
            tecnology={exp.tecnology}
            softSkills={exp.softSkills}
          />
        ))}
      </ol>
    </div>
  )
}

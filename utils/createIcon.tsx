import { Icon } from '@iconify/react/dist/iconify.js'
import { ReactElement } from 'react'

export const createIcon = (type: string, className?: string): ReactElement => {
  return <Icon icon={type} className={className} />
}

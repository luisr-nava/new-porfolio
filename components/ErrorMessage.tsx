import React from 'react'

export const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <div className='text-start my-2  text-red-500 font-bold p-1 uppercase text-sm'>{children}</div>
}

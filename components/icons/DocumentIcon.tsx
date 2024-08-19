import React from 'react'

export const DocumentIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
      <path fill='currentColor' fillOpacity={0} d='M5 3H12.5V8.5H19V21H5V3Z'>
        <animate fill='freeze' attributeName='fill-opacity' begin='2.8s' dur='0.3s' values='0;0.3'></animate>
      </path>
      <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'>
        <g strokeWidth={2}>
          <path strokeDasharray={64} strokeDashoffset={64} d='M13 3L19 9V21H5V3H13'>
            <animate fill='freeze' attributeName='stroke-dashoffset' dur='1.2s' values='64;0'></animate>
          </path>
          <path strokeDasharray={6} strokeDashoffset={6} d='M9 13H13'>
            <animate
              fill='freeze'
              attributeName='stroke-dashoffset'
              begin='2s'
              dur='0.4s'
              values='6;0'></animate>
          </path>
          <path strokeDasharray={8} strokeDashoffset={8} d='M9 16H15'>
            <animate
              fill='freeze'
              attributeName='stroke-dashoffset'
              begin='2.4s'
              dur='0.4s'
              values='8;0'></animate>
          </path>
        </g>
        <path strokeDasharray={14} strokeDashoffset={14} d='M12.5 3V8.5H19'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='1.4s'
            dur='0.4s'
            values='14;0'></animate>
        </path>
      </g>
    </svg>
  )
}

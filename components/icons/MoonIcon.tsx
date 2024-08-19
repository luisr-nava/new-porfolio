import React from 'react'

export const MoonIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 24 24'>
      <g
        fill='none'
        stroke='currentColor'
        strokeDasharray={4}
        strokeDashoffset={4}
        strokeLinecap='round'
        strokeLinejoin='round'>
        <path d='M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5'>
          <animate
            id='lineMdMoonAltLoop0'
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='1.4s;lineMdMoonAltLoop0.begin+12s'
            dur='0.8s'
            values='4;0'></animate>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='lineMdMoonAltLoop0.begin+4s;lineMdMoonAltLoop0.begin+8s'
            dur='0.8s'
            values='4;0'></animate>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='lineMdMoonAltLoop0.begin+2.4s;lineMdMoonAltLoop0.begin+6.4s;lineMdMoonAltLoop0.begin+10.4s'
            dur='0.8s'
            values='0;4'></animate>
          <set
            attributeName='d'
            begin='lineMdMoonAltLoop0.begin+3.6s'
            to='M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5'></set>
          <set
            attributeName='d'
            begin='lineMdMoonAltLoop0.begin+7.6s'
            to='M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5'></set>
          <set
            attributeName='d'
            begin='lineMdMoonAltLoop0.begin+11.6s'
            to='M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5'></set>
        </path>
        <path d='M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5'>
          <animate
            id='lineMdMoonAltLoop1'
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='2.2s;lineMdMoonAltLoop1.begin+12s'
            dur='0.8s'
            values='4;0'></animate>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='lineMdMoonAltLoop1.begin+4s;lineMdMoonAltLoop1.begin+8s'
            dur='0.8s'
            values='4;0'></animate>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='lineMdMoonAltLoop1.begin+2.4s;lineMdMoonAltLoop1.begin+6.4s;lineMdMoonAltLoop1.begin+10.4s'
            dur='0.8s'
            values='0;4'></animate>
          <set
            attributeName='d'
            begin='lineMdMoonAltLoop1.begin+3.6s'
            to='M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5'></set>
          <set
            attributeName='d'
            begin='lineMdMoonAltLoop1.begin+7.6s'
            to='M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5'></set>
          <set
            attributeName='d'
            begin='lineMdMoonAltLoop1.begin+11.6s'
            to='M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5'></set>
        </path>
        <path d='M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5'>
          <animate
            id='lineMdMoonAltLoop2'
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='5.8s;lineMdMoonAltLoop2.begin+12s'
            dur='0.8s'
            values='4;0'></animate>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='lineMdMoonAltLoop2.begin+4s'
            dur='0.8s'
            values='4;0'></animate>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='lineMdMoonAltLoop2.begin+2.4s;lineMdMoonAltLoop2.begin+6.4s'
            dur='0.8s'
            values='0;4'></animate>
          <set
            attributeName='d'
            begin='lineMdMoonAltLoop2.begin+3.6s'
            to='M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5'></set>
          <set
            attributeName='d'
            begin='lineMdMoonAltLoop2.begin+11.6s'
            to='M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5'></set>
        </path>
      </g>
      <path
        fill='none'
        stroke='currentColor'
        strokeDasharray={56}
        strokeDashoffset={56}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z'>
        <animate fill='freeze' attributeName='stroke-dashoffset' dur='1.2s' values='56;0'></animate>
      </path>
    </svg>
  )
}

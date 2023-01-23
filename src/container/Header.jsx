import React from 'react'
import {Hero, Companies } from '../components'
import '../index.css'

const Header = () => {
  return (
      <div className='w-full'>
          <Hero />
          <Companies />
      </div>
  )
}

export default Header
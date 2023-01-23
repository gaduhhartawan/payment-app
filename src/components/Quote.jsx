import React from 'react'
import { quote } from '../assets'

const Quote = ({desc}) => {
    return (
        <div className='rounded-[20px] bg-[#C4C4C4] p-8 bg-opacity-[0.3] relative md:mt-0 mt-10'>
            <img src={quote} className="absolute top-[-20px]" />
            <p className="sm:w-[350px] mb-5">
                {desc}
            </p>
            <p>
                - Gaduh Hartawan, Web Designer -
            </p>
        </div>
  )
}

export default Quote
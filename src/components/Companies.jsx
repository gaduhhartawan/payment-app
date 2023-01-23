import React from 'react'
import styles from '../style'
import { companies } from '../constants'

const Companies = () => {
  return (
    <section className="text-center bg-[#F5F6F8] py-10 px-6">
      <h2 className="font-poppins font-semibold xs:text-[22px] text-[18px] text-black xs:leading-[30.8px] leading-[20.8px] w-full">Over 32k+ software  businesses growing with AR Shakir.</h2>
      <div className="flex flex-row flex-wrap items-center justify-center mt-8">
        {companies.map(company => (
          <img src={company.img} className="object-contain mx-4 sm:mt-0 mt-5" />
        ))}
      </div>
    </section>
  )
}

export default Companies
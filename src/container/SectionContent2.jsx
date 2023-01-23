import React from 'react'
import styles from '../style'
import { Content, Quote } from '../components'
import { Content2 } from '../assets'

const SectionContent2 = () => {
  return (
      <section className={`${styles.section} justify-center lg:mt-[-130px] p-7 md:px-6`}>
          <div className="flex flex-col justify-center gap-y-12">
              <Content
                  opt="why choose us"
                  title="Save money with
                  proper transaction"
                  desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own."
              />
              <Quote
                  desc={'Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows .'}
              />
          </div>
          <img src={Content2} alt="" />
      </section>
  )
}

export default SectionContent2
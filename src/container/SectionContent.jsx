import React from 'react'
import { Client, Ceklis } from '../assets'
import styles from '../style'
import { Content } from '../components'

const TextContent = ({text}) => (
    <div className="flex mt-3">
        <img src={Ceklis} alt="" />
        <p className="ml-3">{text}</p>
    </div>
)

const SectionContent = () => {
  return (
      <section className={`${styles.sectionReverse} p-7 md:px-6`}>
          <img src={Client} className="md:mt-0 mt-7"/>
          <div className='flex flex-col'>
              <Content
                opt="why choose us"
                title="Track your payments
                on the go with the
                best way possible"
                desc="Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. "
              />
              <div className='flex flex-col mt-6 border-t-[2px] border-gray-300 pt-4'>
                  <TextContent text={'Get Overview at a glance'}/>
                  <TextContent text={'Deposit funds easily, securlity'}/>
                  <TextContent text="Get Live Support"/>
              </div>
          </div>
      </section>
  )
}

export default SectionContent
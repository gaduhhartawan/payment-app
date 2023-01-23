import React from 'react'
import styles from '../style'

const Content = ({opt, title, desc}) => {
    return (
        <div className='flex flex-col justify-start sm:w-[550px] mt-6'>
            <p className='text-purple-700 uppercase font-[700]'>
                {opt}
            </p>
            <h2 className={`${styles.heading2}`}>{title}</h2>
            <p className={`${styles.paragraph} sm:w-[500px] mt-4`}>{desc}</p>
        </div>
  )
}

export default Content
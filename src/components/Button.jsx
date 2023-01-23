import React from 'react'
import styles from '../style'

const Button = ({ style, title }) => {
  return (
    <button className={`${style} mt-10`}>
      {title}
    </button>
  )
}

export default Button
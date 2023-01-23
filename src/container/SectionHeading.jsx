import React from 'react'
import { Content, Quote } from '../components'
import styles from '../style'

const SectionHeading = () => {
    return (
        <section className={`${styles.section} items-center justify-around my-5 p-7`}>
            <Content
                title="Automated
                portfolio tracking"
                desc="Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. "
            />
            <Quote
                desc="Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen."
            />
        </section>
  )
}

export default SectionHeading
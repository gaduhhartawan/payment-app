import React from 'react'
import Card from '../components/Card'
import { cards } from '../constants'

const SectionCard = () => {
    return (
        <section className="flex md:flex-row flex-col justify-center items-center mt-[60px] mb-12 gap-5 sm:p-3 p-7">

            {cards.map(card => (
                <Card
                    title={card.title}
                    desc={card.description}
                    img={card.img}
                    id={card.id}
                />
            ))}
        </section>
  )
}

export default SectionCard
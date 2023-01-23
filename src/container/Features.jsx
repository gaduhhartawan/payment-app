import React from 'react'
import { Content, Card } from '../components'
import { Decor1 } from '../assets'
import { featureCards } from '../constants'

const SmallCard = ({ text }) => (
    <div className="bg-[#FFFFFF] border-[1px] rounded-[18px] py-12 px-7">
        <p className="text-[22px] leading-[35px] font-bold sm:w-[300px]">
            {text}
        </p>
    </div>
)

const Features = () => {
    return (
        <section className='bg-[#C9E7F2] md:py-[70px] py-5 px-6 relative'>
            <img src={Decor1} className='absolute left-[-10px]' />
            <img src={Decor1} className='absolute right-[-30px] bottom-10' />
            <div className="px-[75px]">
                <Content
                    title="Features that blows mind"
                    desc={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.'}
                />
            </div>
            <div className='flex sm:flex-row flex-col flex-wrap items-center justify-around mt-8 px-12'>
                {featureCards.map((card) => (
                    <div className="sm:my-0 my-6">
                        <Card
                            title={card.title}
                            desc={card.description}
                            img={card.img}
                        />
                    </div>
                ))}
                <div className='flex flex-col justify-between gap-6'>
                    <SmallCard text="Merits behind on afraid or warmly" />
                    <SmallCard text="Believing neglected so so allowance existence" />
                </div>
            </div>
        </section>
    )
}

export default Features
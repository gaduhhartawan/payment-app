import React from 'react'
import { Wave, quote } from '../assets'
import { Content } from '../components'
import { Testimonials } from '../constants'

const Card = ({comment, name, img}) => (
    <div className='flex border-[1px] rounded-[10px] border-gray-500 p-4 relative'>
        <div className='flex flex-col justify-center md:w-[600px] w-[450px]'>
            <p className='text-[20px] font-semibold '>{comment}</p>
            <p className='md:mt-12 mt-7'>- {name} -</p>
        </div>
        <img src={img} className="mx-3 object-contain md:h-[300px] h-[220px]" />
    </div>
)

const Testimonial = () => {
    return (
        <section className="p-7 relative">
            <div className="px-10">
                <Content
                    title={'Testimonials'}
                    desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own."
                />
            </div>
            <img src={Wave} className="absolute top-[60px] right-[100px] md:block hidden" />
            <div className='flex overflow-x-scroll scroll-none gap-5 md:px-10 px-0 mt-12 relative'>
                {Testimonials.map(testimonial => (
                    <Card
                        name={testimonial.name}
                        comment={testimonial.comment}
                        img={testimonial.img}
                    />
                ))}
            </div>
        </section>
    )
}

export default Testimonial
import React from 'react'
import { Navbar, Content, Button } from './index'
import { Play, Banner, Circle, Decor1 } from '../assets'
import styles from '../style'

const Hero = () => {
    return (
        <section className='bg-blue-gradient md:h-[100vh] overflow-hidden relative'>
            <Navbar />
            {/* Div 2 columns for img and Content */}
            <div className='flex md:flex-row flex-col items-center justify-around px-10'>
                {/* Content */}
                <div className='flex flex-col justify-center lg:mb-[300px]'>
                    <Content
                        title="Managing freelance payments has never been easier"
                        desc="Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing."
                    />
                    {/* Buttons */}
                    <div className='flex sm:flex-row flex-col sm:items-end sm:w-[400px]'>
                        <Button
                            title='Get Started'
                            style={`${styles.blueBtnRounded}`}
                        />
                        {/* Flex Play Button */}
                        <div className='flex items-center justify-center sm:mt-0 mt-4 sm:ml-10'>
                            <img src={Play} alt="" />
                            <a className='ml-3'>See How It Works</a>
                        </div>
                    </div>
                </div>
                <img src={Banner} className="sm:w-[30%] sm:h-[30%] w-[70%] relative md:bottom-[50px] -bottom-10 z-0" />
            <img src={Circle} className="absolute bottom-[-105px] right-[-40px] " />
            <img src={Decor1} className="absolute bottom-[0] left-[0] " />
            </div>
        </section>
  )
}

export default Hero
import React from 'react'

const Card = ({title, img, desc, id}) => {
    return (
        <div className='flex flex-col items-center text-center px-7 py-[55px] border-[1px] rounded-[20px] bg-[#FFF] relative'>
            <div className='absolute top-3 left-3 font-poppins font-semibold'>
                <span>{id}</span>
            </div>
            <img src={img} alt="" className='w-[54px] h-[45px]'/>
            <h2 className='font-poppins font-bold text-[30px] leading-[34px] sm:w-[235px] tracking-[-0.03em] text-center mt-7 mb-2'>
                {title}
            </h2>
            <p className="sm:w-[270px]">
                {desc}
            </p>
        </div>
  )
}

export default Card
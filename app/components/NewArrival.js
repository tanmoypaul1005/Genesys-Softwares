import React from 'react'
import ShortSleeve from './ShortSleeve'
import Image from 'next/image'
import { iFutureSeries } from '@/util/imageImports'

const NewArrival = () => {
    return (
        <>
            <div className='p-[100px] bg-[#F6F5F5]'>
                <div className='uppercase mb-[48px] font-semibold text-[70px] leading-[84px] text-[#060606]'>New arrival</div>
                <ShortSleeve />
            </div>

            <div className='flex justify-between bg-white p-[100px]'>
                   <Image src={iFutureSeries} alt="" height={300}/>
            </div>
        </>
    )
}

export default NewArrival
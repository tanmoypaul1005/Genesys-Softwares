import React from 'react'
import ShortSleeve from './ShortSleeve'
import Image from 'next/image'
import { iFutureSeries, iProduct1, iProduct2 } from '@/util/imageImports'

const NewArrival = () => {
    return (
        <>
            <div className='all_padding bg-[rgb(246,245,245)]'>
                <div className='uppercase mb-1 md:mb-[48px] font-semibold text-2xl md:text-[70px] leading-[84px] text-[#060606]'>New arrival</div>
                <ShortSleeve />
            </div>

            <div className='flex flex-col items-center justify-between bg-white gap-y-5 md:flex-row all_padding'>
                <Image src={iFutureSeries}  alt="" height={400} />

                <div className='flex flex-col gap-y-5 md:flex-row gap-x-6'>
                    <div>
                        <Image height={320} width={320} className='rounded-xl' src={iProduct1} alt="" />
                        <div className='flex flex-col mt-6 gap-y-3'>
                            <div className='text-sm font-semibold leading-5'>Army Green Active Short Sleeve</div>
                            <div className='flex font-medium text-[20px] leading-6'>
                                <div>$ 34.95</div>
                                <div className='text-[#9B9B9B] px-3 line-through'>$ 34.95</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Image height={280} width={280} className='rounded-xl' src={iProduct2} alt="" />
                        <div className='flex flex-col mt-6 gap-y-3'>
                            <div className='text-sm font-semibold leading-5'>Army Green Active Short Sleeve</div>
                            <div className='flex font-medium text-[20px] leading-6'>
                                <div>$ 34.95</div>
                                <div className='text-[#9B9B9B] px-3 line-through'>$ 34.95</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewArrival
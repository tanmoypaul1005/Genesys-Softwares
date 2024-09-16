import React from 'react'
import ShortSleeve from './ShortSleeve'
import Image from 'next/image'
import { iFutureSeries, iProduct1, iProduct2 } from '@/util/imageImports'

const NewArrival = () => {
    return (
        <>
            <div className='all_padding bg-[#F6F5F5]'>
                <div className='uppercase mb-[48px] font-semibold text-[70px] leading-[84px] text-[#060606]'>New arrival</div>
                <ShortSleeve />
            </div>

            <div className='flex justify-between bg-white all_padding'>
                <Image src={iFutureSeries} alt="" height={300} />


                <div className='flex gap-x-6'>
                    <div>
                        <Image height={250} width={250} className='rounded-xl' src={iProduct1} alt="" />
                        <div className='flex flex-col mt-6 gap-y-3'>
                            <div className='text-sm font-semibold leading-5'>Army Green Active Short Sleeve</div>
                            <div className='flex font-medium text-[20px] leading-6'>
                                <div>$ 34.95</div>
                                <div className='text-[#9B9B9B] px-3 line-through'>$ 34.95</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Image height={250} width={250} className='rounded-xl' src={iProduct2} alt="" />
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
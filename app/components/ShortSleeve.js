import { iCap1, iCap2, iCap3, iCap4 } from '@/util/imageImports';
import Image from 'next/image';
import React from 'react'

const  ShortSleeve = () => {
    return (
        <div className='flex flex-wrap items-center justify-between gap-y-5'>

        <div className='p-4 bg-white rounded-xl'>
            <Image width={200} height={200} src={iCap1} alt="" className='rounded-lg' />
            <div className='flex flex-col mt-[30px] gap-y-3'>
                <div className='text-sm font-semibold leading-5'>Army Green Active Short Sleeve</div>
                <div className='flex font-medium text-[20px] leading-6'>
                    <div>$ 34.95</div>
                    <div className='text-[#9B9B9B] px-3 line-through'>$ 34.95</div>
                </div>
            </div>
        </div>

        <div className='p-4 bg-white rounded-xl'>
            <Image width={200} height={200} src={iCap2} alt="" className='rounded-lg' />
            <div className='flex flex-col mt-[30px] gap-y-3'>
                <div className='text-sm font-semibold leading-5'>Army Green Active Short Sleeve</div>
                <div className='flex font-medium text-[20px] leading-6'>
                    <div>$ 34.95</div>
                    <div className='text-[#9B9B9B] px-3 line-through'>$ 34.95</div>
                </div>
            </div>
        </div>

        <div className='p-4 bg-white rounded-xl'>
            <Image width={200} height={200} src={iCap3} alt="" className='rounded-lg' />
            <div className='flex flex-col mt-[30px] gap-y-3'>
                <div className='text-sm font-semibold leading-5'>Army Green Active Short Sleeve</div>
                <div className='flex font-medium text-[20px] leading-6'>
                    <div>$ 34.95</div>
                    <div className='text-[#9B9B9B] px-3 line-through'>$ 34.95</div>
                </div>
            </div>
        </div>

        <div className='p-4 bg-white rounded-xl'>
            <Image width={200} height={200} src={iCap4} alt="" className='rounded-lg' />
            <div className='flex flex-col mt-[30px] gap-y-3'>
                <div className='text-sm font-semibold leading-5'>Army Green Active Short Sleeve</div>
                <div className='flex font-medium text-[20px] leading-6'>
                    <div>$ 34.95</div>
                    <div className='text-[#9B9B9B] px-3 line-through'>$ 34.95</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ShortSleeve;
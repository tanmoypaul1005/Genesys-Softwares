import { iCustomerSupport, iDelivery, iExchange, iVerified } from '@/util/imageImports'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div className='flex flex-wrap items-center justify-between gap-y-5 bg-gradient-to-b all_padding gap-x-10'>
            <div className='text-white'>
                <Image src={iDelivery} alt=""/>
                <div className='mt-6 mb-3 text-2xl font-medium leading-7'>Shipping</div>
                <div className='text-base font-normal w-[250px] line-clamp-2'>The attention to detail is evident in every aspect of this backpack.</div>
            </div>

            <div className='text-white'>
                <Image src={iExchange} alt=""/>
                <div className='mt-6 mb-3 text-2xl font-medium leading-7'>Shipping</div>
                <div className='text-base font-normal w-[250px] line-clamp-2'>The attention to detail is evident in every aspect of this backpack.</div>
            </div>

            <div className='text-white'>
                <Image src={iCustomerSupport} alt=""/>
                <div className='mt-6 mb-3 text-2xl font-medium leading-7'>Shipping</div>
                <div className='text-base font-normal w-[250px] line-clamp-2'>The attention to detail is evident in every aspect of this backpack.</div>
            </div>

            <div className='text-white'>
                <Image src={iVerified} alt=""/>
                <div className='mt-6 mb-3 text-2xl font-medium leading-7'>Shipping</div>
                <div className='text-base w-[250px] font-normal line-clamp-2'>The attention to detail is evident in every aspect of this backpack.</div>
            </div>
        </div>
    )
}

export default Services
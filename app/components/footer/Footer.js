import { iEmail, iPayment, iRedLogo, iTelephone } from '@/util/imageImports'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#000000] padding_x py-10'>
            <div className='flex  border-b-[1px] border-[#A6A5A380]'>
                <Image src={iRedLogo} alt="" />
                <div className='flex justify-center items-center font-extrabold pb-7 text-base md:text-[100px] text-white  leading-[50px]'>
                    VTMERCH
                </div>
            </div>

            <div className="mt-[48px] grid grid-cols-12 gap-x-10">
                <div className='col-span-12 md:col-span-5'>
                    <div className='font-normal text-[24px] leading-7 text-white mb-[48px]'>Subscribe and be the first to receive notifications about our upcoming releases and the latest news. </div>

                    {/* <div className='border-[1px] w-auto text-white py-2 mb-3 text-center border-white rounded-xl'>Enter your email</div>
                    <div className='w-full py-2 text-center text-black bg-white rounded-xl'>Subscribe</div> */}
                </div>
                <div className='flex flex-col flex-wrap justify-between col-span-12 mt-5 gap-y-5 md:flex-row md:items-start md:mt-0 md:col-span-7'>
                    <div className='flex flex-col gap-y-4'>
                        <div className='font-medium text-white text-[20px] leading-6'>
                            Customer Services
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            About Us
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Search
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Privacy Policy
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Contact Us
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Terms of Service
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Refund policy
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Track Order
                        </div>
                    </div>


                    <div className='flex flex-col gap-y-4'>
                        <div className='font-medium text-white text-[20px] leading-6'>
                            Products
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Featured products
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Bestseller
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Latest product
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            All collections
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            All products
                        </div>
                    </div>


                    <div className='flex flex-col gap-y-4'>
                        <div className='font-medium text-white text-[20px] leading-6'>
                            Contact
                        </div>

                        <div className='font-normal text-white w-[300px] text-[16px] leading-6'>
                            Available between 8AM to 8PM. Ready to answer your questions.
                        </div>

                        <div className='font-normal flex gap-x-3 text-white text-[16px] leading-6'>
                            <Image src={iTelephone} alt="" />
                            <div>
                                013456789
                            </div>
                        </div>

                        <div className='font-normal flex gap-x-3 text-white text-[16px] leading-6'>
                            <Image src={iEmail} alt="" />
                            <div>
                                store@valuetainment.com
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-between mt-10 gap-y-5 md:flex-row'>
                <div className='text-base font-normal text-white '>© 2024 Valuetainment Store. All rights reserved.</div>
                <Image src={iPayment} alt="Background Logo" />
            </div>
        </div>
    )
}

export default Footer
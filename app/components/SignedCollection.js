import { iBook1, iBook2, iPaHomeHero, iPatSignature, iRightArrow, iVector } from '@/util/imageImports'
import Image from 'next/image'
import React from 'react'

const SignedCollection = () => {
    return (
        <div className='relative'>
            <div className='bg-[#111111] flex w-full flex-col md:flex-row justify-between all_padding'>
                <div className='w-full'>
                    <div className='uppercase font-medium text-[50px] leading-[58px] bg-gradient-to-b from-[#DE2A2F] to-[#EF5256] text-transparent bg-clip-text'>
                        <div className='text-white'>Patrick Bet-David </div>
                        <div>Signed</div>
                        <div>Collection</div>
                    </div>

                    <div className='flex px-8 py-4 bg-white cursor-pointer gap-x-3 w-fit rounded-xl mt-[48px] mb-6'>
                        <div className='font-medium leading-5 text-fs16'>SHOP NOW</div>
                        <Image src={iRightArrow} alt="" />
                    </div>

                    <div>
                        <Image height={400} width={400} src={iPatSignature} alt="" />
                    </div>
                </div>

                <div className='flex flex-wrap items-center justify-center w-full gap-2'>
                    <div className='w-1/2 lg:w-1/3'>
                        <Image
                            className='w-full h-auto rounded-lg'
                            src={iBook1}
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className='w-1/2 lg:w-1/3'>
                        <Image
                            className='w-full h-auto rounded-lg'
                            src={iBook2}
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
            <div className='relative font-bold uppercase bg-gradient-to-b text-[14px] md:text-[48px] md:leading-[48px] all_padding text-white'>
                <div>Our mission is to enlighten, entertain  </div>
                <div>and empower current</div>
                <div>leaders around the world.</div>

                <div className=' gap-x-5 hidden md:flex absolute top-[70px] left-[100px]'>
                    <Image src={iVector} height={50} alt="" />
                    <Image src={iVector} height={50} alt="" />
                </div>
            </div>

            <div className='absolute bottom-0 right-0'>
                <Image
                    className='w-fit h-[220px] md:h-[500px]'
                    src={iPaHomeHero}
                    alt=""
                    height={500} // Ensure the width is set to maintain aspect ratio
                />
            </div>
        </div>
    )
}

export default SignedCollection
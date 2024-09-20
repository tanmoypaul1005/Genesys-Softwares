import { iBook1, iBook2, iPatSignature, iRightArrow, iVector } from '@/util/imageImports'
import Image from 'next/image'
import React from 'react'
import SignedCollectionTitle from './SignedCollectionTitle'
import CommonHoverEffect from './CommonHoverEffect'
import PaHomeHero from './signedCollection/PaHomeHero'

const SignedCollection = () => {
    return (
        <div className='relative'>
            <div className='bg-[#111111] flex w-full flex-col md:flex-row justify-between all_padding'>
                <div className='w-full mb-[50px]'>
            
                    <SignedCollectionTitle />

                    <div className='flex px-8 py-4 md:py-4 bg-white cursor-pointer gap-x-3 w-fit rounded-xl md:mt-[48px] my-5 md:mb-6'>
                        <div className='font-medium leading-5 text-fs16'>SHOP NOW</div>
                        <Image src={iRightArrow} alt="" />
                    </div>

                    <div>
                        <Image height={400} width={400} src={iPatSignature} alt="" />
                    </div>
                </div>

                <div className='flex flex-wrap items-center justify-center w-full gap-2'>
                    <div className='w-1/2 lg:w-1/3'>
                        <CommonHoverEffect>
                            <Image
                                className='w-full h-auto rounded-lg'
                                src={iBook1}
                                alt=""
                                width={500}
                                height={500}
                            />
                        </CommonHoverEffect>
                    </div>
                    <div className='w-1/2 lg:w-1/3'>
                        <CommonHoverEffect>
                            <Image
                                className='w-full h-auto rounded-lg'
                                src={iBook2}
                                alt=""
                                width={500}
                                height={500}
                            />
                        </CommonHoverEffect>
                    </div>
                </div>
            </div>
            <div className='relative font-bold uppercase bg-gradient-to-b text-[10px] md:text-[48px] md:leading-[48px] all_padding text-white'>
                <div>Our mission is to enlighten, entertain  </div>
                <div>and empower current</div>
                <div>leaders around the world.</div>

                <div className=' gap-x-5 hidden md:flex absolute top-[70px] left-[100px]'>
                    <Image src={iVector} height={50} alt="" />
                    <Image src={iVector} height={50} alt="" />
                </div>
            </div>

            <div className='absolute bottom-0 right-0'>
                <PaHomeHero />
            </div>
        </div>
    )
}

export default SignedCollection



import { iHeaderSign, iLogo, iMenu } from '@/util/imageImports'
import Image from 'next/image'
import React from 'react'
import FutureProduct from './FutureProduct'

const Header = () => {
    return (
        <div className='bg-[#EA2127] pb-[60px] padding_x'>
            <div className='py-5 text-black md:py-10'>
                <div className='flex justify-between'>
                    <div className='hidden md:flex gap-x-2'>
                        <Image  src={iLogo} alt="" />
                        <div className='flex text-[80px] leading-[80px] items-center justify-center font-extrabold text-white'>VTMERCH</div>
                    </div>

                    <div className='flex md:hidden gap-x-2'>
                        <Image  src={iLogo} height={50}  width={50} alt="" />
                        <div className='flex text-3xl md:text-[112px] md:leading-[130px] items-center justify-center font-extrabold text-white'>VTMERCH</div>
                    </div>
                    <Image alt="" src={iMenu} />
                </div>
            </div>

            <div className='relative'>
                <div>
                    <Image height={1000} width={1100} src={iHeaderSign} alt="" />
                </div>

                <div className='mt-[-16px] md:mt-[-44px] px-4'>
                    <FutureProduct />
                </div>
            </div>
        </div>
    )
}

export default Header
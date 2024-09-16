import { iValuetainment } from '@/util/imageImports'
import Image from 'next/image'
import React from 'react'
import FutureProduct from './FutureProduct'

const Header = () => {
    return (
        <div className='bg-[#EA2127]'>
            <div className='px-5 text-black pt-[50px]'>
                <div className='flex gap-x-2'>
                    <Image width={60} height={60} src={iValuetainment} alt="" />
                    <div className='flex items-center justify-center font-extrabold'>VTMERCH</div>
                </div>
            </div>
            <FutureProduct/>
        </div>
    )
}

export default Header
import { iBook1, iBook2 } from '@/util/imageImports'
import Image from 'next/image'
import React from 'react'

const SignedCollectionBook = () => {
    return (
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
    )
}

export default SignedCollectionBook
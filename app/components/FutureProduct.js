import { iMan1, iMan2, iMan3, iMan4 } from '@/util/imageImports'
import Image from 'next/image'
import React from 'react'

const FutureProduct = () => {
    return (
        <div className='flex justify-between px-10 py-10'>
            <div className='text-white'>
                <Image
                 style={{
                    maxHeight:250,
                    minHeight:250,
                    maxWidth:250,
                    minWidth:250
                 }}
                 width={250} height={250} className='rounded-xl' src={iMan1} alt="" />
                <div className='flex flex-col mt-4 gap-y-3'>
                <div className='text-base font-medium leading-5 text-white'>Army Green Active Short Sleeve</div>
                <div className='flex text-xl font-medium leading-6 gap-x-3'>
                    <div>$ 34.95</div>
                    <div className='line-through'>34.95</div>
                </div>
                </div>
            </div>

            <div className='text-white'>
                <Image style={{
                    maxHeight:250,
                    minHeight:250,
                    maxWidth:250,
                    minWidth:250
                 }} width={250} className='rounded-xl' height={250} src={iMan2} alt="" />
                <div className='flex flex-col mt-4 gap-y-3'>
                <div className='text-base font-medium leading-5 text-white'>Army Green Active Short Sleeve</div>
                <div className='flex text-xl font-medium leading-6 gap-x-3'>
                    <div>$ 34.95</div>
                    <div className='line-through'>34.95</div>
                </div>
                </div>
            </div>


            <div className='text-white'>
                <Image style={{
                    maxHeight:250,
                    minHeight:250,
                    maxWidth:250,
                    minWidth:250
                 }} width={250} className='rounded-xl' height={250} src={iMan3} alt="" />
                <div className='flex flex-col mt-4 gap-y-3'>
                <div className='text-base font-medium leading-5 text-white'>Army Green Active Short Sleeve</div>
                <div className='flex text-xl font-medium leading-6 gap-x-3'>
                    <div>$ 34.95</div>
                    <div className='line-through'>34.95</div>
                </div>
                </div>
            </div>


            <div className='text-white'>
                <Image  style={{
                    maxHeight:250,
                    minHeight:250,
                    maxWidth:250,
                    minWidth:250
                 }} width={250} className='rounded-xl' height={250} src={iMan4} alt="" />
                <div className='flex flex-col mt-4 gap-y-3'>
                <div className='text-base font-medium leading-5 text-white'>Army Green Active Short Sleeve</div>
                <div className='flex text-xl font-medium leading-6 gap-x-3'>
                    <div>$ 34.95</div>
                    <div className='line-through'>34.95</div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default FutureProduct
import { iBgLogo, iGoldenChess, iMan2, iWhatWeBelieveText } from '@/util/imageImports'
import Image from 'next/image'
import React from 'react'

const Believe = () => {
    return (
        <div className='relative flex justify-between p-[100px] bg-gradient-custom'>

            <div>
                <Image width={500} height={900} src={iMan2} alt="" />
            </div>

            <div className='flex flex-col gap-y-[48px] mt-14'>
                <div className='text-white w-[700px] text-medium border-b-[1px] border-white pb-6'>
                    <span className='text-[32px]  leading-[38px]'>Leadership</span>
                    <span className='text-base'> is vital from the top of corporations to the military to small businesses to parents to students. We all can be leaders.
                    </span>
                </div>

                <div className='text-white w-[700px] text-medium border-b-[1px] border-white pb-6'>
                    <span className='text-[32px]  leading-[38px]'>Capitalism</span>
                    <span className='text-base'> are heroes who should be respected and celebrated for taking risks, launching products, creating jobs and building companies.
                    </span>
                </div>


                <div className='text-white w-[700px] text-medium border-b-[1px] border-white pb-6'>
                    <span className='text-[32px]  leading-[38px]'>Capitalism</span>
                    <span className='text-base'>  is a critically important economic system that has advanced society and the quality of life we enjoy today.
                    </span>
                </div>

                <div className='text-white w-[700px] text-medium border-b-[1px] border-white pb-6'>
                    <span className='text-[32px]  leading-[38px]'>Debate</span>
                    <span className='text-base'> is welcome and necessary as it can lead to consensus, epiphanies, and expose the truth. When a clash of ideas, often emotionally-charged, evolves into civil debate and objective processing of issues, everyone wins. Free speech is critical to productive debate.
                    </span>
                </div>
            </div>
            <div className='absolute bottom-0 right-0'>
                <Image src={iGoldenChess} height={200} alt="" />
            </div>

            <div className='absolute top-0 right-0'>
                <Image src={iBgLogo} alt="" />
            </div>

            <div className='absolute transform -translate-x-1/2 top-10 left-1/2 '>
                <Image src={iWhatWeBelieveText} height={150} alt="" />
            </div>
        </div>
    )
}

export default Believe
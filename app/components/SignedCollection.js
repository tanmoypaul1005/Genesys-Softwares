import { iBook1, iBook2, iPaHomeHero } from '@/util/imageImports'
import Image from 'next/image'
import React from 'react'

const SignedCollection = () => {
    return (
        <div className='relative'>
            <div className='bg-[#111111] flex justify-between p-[100px]'>
                <div className='uppercase font-medium text-[50px] leading-[58px] bg-gradient-to-b from-[#DE2A2F] to-[#EF5256] text-transparent bg-clip-text'>
                    <div className='text-white'>Patrick Bet-David </div>
                    <div className=''>Signed</div>
                    <div className=''>Collection</div>
                </div>

                <div className='flex gap-x-2'>
                    <Image style={{ maxHeight: 400, minHeight: 400, minWidth: 400, maxWidth: 400 }} src={iBook1} alt="" width={500} height={500} />
                    <Image style={{ maxHeight: 400, minHeight: 400, minWidth: 400, maxWidth: 400 }} src={iBook2} alt="" width={500} height={500} />
                </div>
            </div>
            <div className='font-bold uppercase bg-gradient-to-b text-[48px] leading-[48px] p-[100px] text-white'>
                <div>Our mission is to enlighten, entertain  </div>
                <div>and empower current</div>
                <div>leaders around the world.</div>
            </div>

            <div className='absolute bottom-0 right-0'>
                <Image src={iPaHomeHero} height={500} alt="" />
            </div>
        </div>
    )
}

export default SignedCollection
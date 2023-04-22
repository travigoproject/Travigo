'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'

const Logo = () => {
    const router = useRouter();
    return (
        <div className='flex'>
            <div
                onClick={() => router.push('/')}
                className="flex items-center gap-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-9 h-9 -rotate-0'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                <span className='font-bold text-2xl'>Travigo</span>
            </div>
        </div>
    )
}

export default Logo
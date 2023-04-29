'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'

const Logo = () => {
    const router = useRouter();
    return (
        <div>
            <Image
                onClick={() => router.push('/')}
                className="hidden md:block cursor-pointer rounded-left"
                src="/Images/logo7.png"
                height="100"
                width="200"
                alt="Logo"
            />
        </div>
    )
}

export default Logo
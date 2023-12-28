import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const index = () => {
    return (
        <>
            <section className='md:h-[150px] h-[100px] relative'>
                <Image src="/images/banner-image/img1.avif" priority={true} height={200} width={200} className='absolute w-full h-full indent-0 object-cover' alt="bg-image" />
                <div className='absolute w-full h-full inset-0 bg-black opacity-70'></div>
                <div className="container flex justify-center items-center h-full relative text-white">
                    <ul className='flex items-center gap-1 md:text-lg font-medium'>
                        <li className='text-gray-300'><Link href="/">Home</Link></li>
                        /
                        <li>Our Partners</li>
                    </ul>
                </div>
            </section>
            <section className='md:py-20 py-16'>
                <div className="container flex flex-col items-center gap-4"></div>
            </section>
        </>
    )
}

export default index;

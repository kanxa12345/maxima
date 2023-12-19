import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

const subCategory = () => {
    const router = useRouter();
    const { category, subCategory } = router.query;
    console.log(category, subCategory)
    return (
        <>
            <section className='h-[150px] relative'>
                <Image height={200} width={200} className='absolute w-full h-full indent-0 object-cover' src="/images/banner-image/img1.avif" alt="bg-image" />
                <div className='absolute w-full h-full inset-0 bg-black opacity-70'></div>
                <div className="container flex justify-center items-center h-full relative text-white">
                    <h1 className='text-xl font-medium text-gray-200'>Products</h1>
                </div>
            </section>
            <section className='py-20'>
                <div className="container flex flex-col items-center gap-4">{subCategory}</div>
            </section>
        </>
    )
}

export default subCategory;

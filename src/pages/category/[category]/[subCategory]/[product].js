import ProductData from '@/data/ProductData';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const product = () => {
    const router = useRouter();
    const { category, subCategory, product } = router.query;
    const data = ProductData.find(item => item.category === category && item.subCategory === subCategory && item.product === product)
    return (
        <>
            <section className='h-[150px] relative'>
                <Image height={200} width={200} className='absolute w-full h-full indent-0 object-cover' src="/images/banner-image/img1.avif" alt="bg-image" />
                <div className='absolute w-full h-full inset-0 bg-black opacity-70'></div>
                <div className="container flex justify-center items-center h-full relative text-white">
                    <ul className='flex sm:flex-row flex-col items-center gap-1 md:text-lg font-medium'>
                        <div className='flex items-center gap-1'>
                            <li className='text-gray-300'><Link href="/">Home</Link></li>
                            /
                            <li className='text-gray-300'><Link href={`/category/${category}`}>Sub-Category</Link></li>
                            /
                        </div>
                        <div className='flex items-center gap-1'>
                            <li className='text-gray-300'><Link href={`/category/${category}/${subCategory}`}>Products</Link></li>
                            /
                            <li>Product Detail</li>
                        </div>
                    </ul>
                </div>
            </section>
            <section className='py-20'>
                {data && (
                    <div className="container flex gap-6">
                        <div className='w-1/3'>
                            <Image src={data.imageUrl} width={200} height={200} alt={data.product} />
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}

export default product;

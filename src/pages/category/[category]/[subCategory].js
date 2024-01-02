import ProductData from '@/data/ProductData';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import ProductItem from './ProductItem';

const SubCategory = () => {
    const router = useRouter();
    const { category, subCategory } = router.query;
    const data = ProductData.filter(item => item.category === category && item.subCategory === subCategory)
    return (
        <>
            <section className='md:h-[150px] h-[100px] relative'>
                <Image src="/images/banner-image/img1.avif" priority={true} height={200} width={200} className='absolute w-full h-full object-cover' alt="bg-image" />
                <div className='absolute w-full h-full inset-0 bg-black opacity-70'></div>
                <div className="container flex justify-center items-center h-full relative text-white">
                    <ul className='flex items-center gap-1 md:text-lg font-medium'>
                        <li className='text-gray-300'><Link href="/">Home</Link></li>
                        /
                        <li className='text-gray-300'><Link href={`/category/${category}`}>Sub-Category</Link></li>
                        /
                        <li>Products</li>
                    </ul>
                </div>
            </section>
            <section className='md:py-20 py-16'>
                <div className="container flex flex-col items-center gap-4">
                    <h2 className='md:text-2xl text-xl font-medium'>{subCategory}</h2>
                    <div className="w-full grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-4 gap-2">
                        {data.map((dataItem, index) => (
                            <ProductItem key={index} category={category} subCategory={subCategory} dataItem={dataItem} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default SubCategory;

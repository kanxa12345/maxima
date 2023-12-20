import ProductData from '@/data/ProductData';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const subCategory = () => {
    const router = useRouter();
    const { category, subCategory } = router.query;
    const data = ProductData.filter(item => item.category === category && item.subCategory === subCategory)
    return (
        <>
            <section className='h-[150px] relative'>
                <Image height={200} width={200} className='absolute w-full h-full indent-0 object-cover' src="/images/banner-image/img1.avif" alt="bg-image" />
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
            <section className='py-20'>
                <div className="container flex flex-col items-center gap-4">
                    <h2 className='text-2xl font-medium'>{subCategory}</h2>
                    <div className="w-full grid grid-cols-6 gap-4">
                        {data.map((dataItem, index) => (
                            <div key={index} className='flex flex-col items-start gap-2 p-2 shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] group rounded-sm relative overflow-hidden'>
                                <div className='overflow-hidden'>
                                    <Image height={200} width={200} className='w-full h-[200px] object-cover group-hover:scale-110 transition-all duration-200 ease-linear' src={dataItem.imageUrl} alt={dataItem.product} />
                                </div>
                                <div className='flex flex-col items-start gap-[2px] absolute top-28 -right-10 opacity-0 group-hover:right-3 group-hover:opacity-100 transition-all duration-200 ease-linear'>
                                    <Link href={`/category/${category}/${subCategory}/${dataItem.product}`} className='text-sm flex justify-center items-center h-[25px] w-[25px] border bg-white'>
                                        <i className="fa-solid fa-eye"></i>
                                    </Link>
                                    <button className='text-sm flex justify-center items-center h-[25px] w-[25px] border bg-white'>
                                        <i className="fa-solid fa-heart"></i>
                                    </button>
                                    <button className='text-sm flex justify-center items-center h-[25px] w-[25px] border bg-white'>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </button>
                                </div>
                                <div className='flex flex-col items-start gap-1 p-2'>
                                    <small className='text-sm font-medium text-gray-600'>{category}</small>
                                    <h3 className='text-lg font-medium leading-5'>{dataItem.product}</h3>
                                    <div>
                                        <p className='text-brandColor font-medium'>Rs.{dataItem.price}</p>
                                        <p className='line-through text-gray-500 text-sm'>Rs.{dataItem.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default subCategory;

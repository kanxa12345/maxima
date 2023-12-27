import ProductData from '@/data/ProductData';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import ProductItem from '../ProductItem';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/Cartslice';
import { addToWishlist } from '@/redux/Wishlistslice';

const product = () => {
    const router = useRouter();
    const { category, subCategory, product } = router.query;
    const data = ProductData.find(item => item.category === category && item.subCategory === subCategory && item.product === product)
    const otherProducts = ProductData.filter(item => item.category === category && item.subCategory === subCategory && item.product !== product)

    const dispatch = useDispatch()
    const HandleAddCart = (item) => {
        dispatch(addToCart(item))
    }
    const HandleAddWishlist = (item) => {
        dispatch(addToWishlist(item))
    }

    return (
        <>
            <section className='h-[150px] relative'>
                <Image src="/images/banner-image/img1.avif" priority={true} height={200} width={200} className='absolute w-full h-full indent-0 object-cover' alt="bg-image" />
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
            <section className='md:py-20 py-16'>
                {data && (
                    <div className="container flex lg:flex-row flex-col gap-8">
                        <div className='lg:w-1/3 w-full'>
                            <Image src={data.imageUrl} priority={true} width={200} height={200} alt={data.product} className='w-full sm:h-[350px] h-[300px] object-cover' />
                        </div>
                        <div className='flex flex-col items-start gap-2 lg:w-2/3 w-full'>
                            <small className='text-base font-semibold text-gray-500'>{category}</small>
                            <h1 className='text-4xl font-bold'>{product}</h1>
                            <p className='text-gray-950 sm:text-base text-sm'>{data.description}</p>
                            <p className='text-lg font-medium'>Availability: {data.availability}</p>
                            <div className='flex items-center gap-1 text-lg font-medium'>
                                Price:
                                <span className='flex items-center gap-4'>
                                    <p>Rs.{data.newPrice}</p>
                                    {data.oldPrice.length > 0 && (
                                        <p className='line-through text-gray-600'>Rs.{data.oldPrice}</p>
                                    )}
                                </span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button onClick={() => HandleAddWishlist(data)} className='p-2 border rounded text-sm font-medium bg-brandColor text-white'>Add to wishlist</button>
                                <button onClick={() => HandleAddCart(data)} className='p-2 border rounded text-sm font-medium bg-secondColor text-white'>Add to cart</button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            {otherProducts.length > 0 && (
                <section className='py-20'>
                    <div className="container flex flex-col items-start gap-4">
                        <h2 className='text-2xl font-medium'>Similar Products</h2>
                        <div className="w-full grid grid-cols-6 gap-4">
                            {otherProducts.map((dataItem, index) => (
                                <ProductItem key={index} category={category} subCategory={subCategory} dataItem={dataItem} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default product;

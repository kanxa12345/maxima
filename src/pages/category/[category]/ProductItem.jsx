import { addCart, addWishlist } from '@/redux/Cartslice';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';

const ProductItem = ({ category, subCategory, dataItem }) => {
    const router = useRouter();
    const dispatch = useDispatch();
     
    const HandleAddCart = (product) => {
        dispatch(addCart(product))
    }
    const HandleAddWishlist = (product) => {
        dispatch(addWishlist(product))
    }

    return (
        <div className='flex flex-col items-start gap-2 p-2 shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] group rounded-sm relative overflow-hidden'>
            <div className='overflow-hidden'>
                <Image src={dataItem.imageUrl} priority={true} height={200} width={200} className='w-full h-[200px] object-cover group-hover:scale-110 transition-all duration-200 ease-linear' alt={dataItem.product} />
            </div>
            <div className='flex flex-col items-start gap-[2px] absolute top-28 -right-10 opacity-0 group-hover:right-3 group-hover:opacity-100 transition-all duration-200 ease-linear'>
                <button onClick={() => router.push(`/category/${category}/${subCategory}/${dataItem.product}`)} className='text-sm flex justify-center items-center h-[25px] w-[25px] border bg-white'>
                    <i aria-hidden={true} className="fa-solid fa-eye"></i>
                </button>
                <button onClick={() => HandleAddWishlist(dataItem)} className='text-sm flex justify-center items-center h-[25px] w-[25px] border bg-white'>
                    <i aria-hidden={true} className="fa-solid fa-heart"></i>
                </button>
                <button onClick={() => HandleAddCart(dataItem)} className='text-sm flex justify-center items-center h-[25px] w-[25px] border bg-white'>
                    <i aria-hidden={true} className="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
            <div className='flex flex-col items-start gap-1 py-1 px-2'>
                <small className='text-sm font-medium text-gray-600'>{category}</small>
                <h3 className='text-lg font-medium leading-5'>{dataItem.product}</h3>
                <div>
                    <p className='text-brandColor font-medium'>Rs.{dataItem.newPrice}</p>
                    {dataItem.oldPrice.length > 0 && (
                        <p className='line-through text-gray-500 text-sm'>Rs.{dataItem.oldPrice}</p>
                    )}
                </div>
            </div>
        </div>
    )
};


export default ProductItem;

import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Wishlist = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart)
    return (
        <div className="fixed right-0 top-[69px] bg-white h-full border px-4 pt-8 pb-[130px] w-1/4 overflow-y-auto flex flex-col items-start gap-2 z-[100]">
            <h2 className='text-2xl font-medium'>Your wishlist</h2>
            <div className='w-full border p-4 flex flex-col items-start gap-2 overflow-y-auto'>
                {cartItems.length > 0 ? cartItems.map((dataItem, index) => (
                    <div key={index} className='flex gap-4 w-full'>
                        <Image src={dataItem.imageUrl} priority={true} height={200} width={200} alt={dataItem.product} />
                        <div className='flex flex-col items-start gap-2'>
                            <p className='text-xl font-medium'>{dataItem.product}</p>
                            <small className='text-lg font-medium text-gray-600'>Price:</small>
                        </div>
                    </div>
                )) :
                    <div>
                        <h3 className='text-3xl font-semibold'>Your wishlist is empty</h3>
                    </div>
                }
            </div>
        </div>
    )
}

export default Wishlist;

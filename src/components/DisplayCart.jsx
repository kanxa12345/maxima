import React, { useEffect, useState } from 'react';
import {  addCart, removeCart } from '@/redux/Cartslice';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

const DisplayCart = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart);
    const groupedData = cartItems.reduce((result, item) => {
        const { product } = item;
        if (!result[product]) {
            result[product] = [];
        }
        result[product].push(item);
        return result;
    }, {});

    const groupedArray = Object.keys(groupedData).map((product) => ({
        product,
        products: groupedData[product],
    }));

    useEffect(() => {
        setTotalPrice(cartItems.reduce((result, item) => result + parseInt(item.newPrice), 0))
    }, [cartItems]);

    const handleAdd = (item) => {
        dispatch(addCart(item));
    };

    const handleDelete = (id) => {
        dispatch(removeCart(id));
    };

    return (
        <div className="fixed right-0 top-[69px] bg-white h-full border px-4 pt-8 pb-[130px] w-1/4 overflow-y-auto flex flex-col items-start gap-4 z-[100]">
            <h2 className='text-2xl font-medium'>Your cart</h2>
            <div className='w-full border p-4 flex flex-col items-start gap-10 overflow-y-auto'>
                {groupedArray.length > 0 ? groupedArray.map((dataItem, index) => (
                    <div key={index} className='flex gap-4 w-full'>
                        <Image src={dataItem.products[0].imageUrl} priority={true} height={150} width={150} alt={dataItem.product} className='w-[150px] h-[100px] object-cover object-center' />
                        <div className='flex flex-col items-start gap-1'>
                            <p className='text-lg font-medium'>{dataItem.product}</p>
                            <small className='text-base font-medium text-gray-600'>Price: Rs.{dataItem.products.length * parseInt(dataItem.products[0].newPrice)}</small>
                            <div className='flex items-center gap-2 text-lg'>
                                <button onClick={() => handleAdd(dataItem.products[0])} className="flex justify-center items-center w-[20px] h-[20px] bg-gray-600 text-sm rounded-full cursor-pointer text-white"><i aria-hidden={true} className="fa-solid fa-plus"></i></button>
                                <p>{dataItem.products.length}</p>
                                <button onClick={() => handleDelete(dataItem.products[0].id)} className="text-sm cursor-pointer flex justify-center items-center w-[20px] h-[20px] bg-gray-600 rounded-full text-white"><i aria-hidden={true} className="fa-solid fa-minus"></i></button>
                            </div>
                        </div>
                    </div>
                )) :
                    <div>
                        <h3 className='text-3xl font-semibold'>Your cart is empty</h3>
                    </div>
                }
            </div>
            <div className='w-full flex gap-2 items-center justify-between'>
                <p className='text-xl font-semibold text-gray-600'>Total price: Rs.{totalPrice} </p>
                <button className='py-1 px-2 bg-secondColor text-white rounded'>Checkout</button>
            </div>
        </div>
    )
}

export default DisplayCart;

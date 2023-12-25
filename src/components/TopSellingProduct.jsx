import React from 'react';
import ProductItem from '@/pages/category/[category]/ProductItem';
import ProductData from '@/data/ProductData';

const TopSellingProduct = () => {
    return (
        <section className='py-20'>
            <div className="container flex flex-col items-start gap-4">
                <h2 className='text-2xl font-medium'>Top Selling Products</h2>
                <div className="w-full grid grid-cols-6 gap-4">
                    {ProductData.slice(0, 6).map((dataItem, index) => (
                        <ProductItem key={index} category={dataItem.category} subCategory={dataItem.subCategory} dataItem={dataItem} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TopSellingProduct;

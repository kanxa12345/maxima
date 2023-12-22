import ProductData from '@/data/ProductData';
import ProductItem from '@/pages/category/[category]/ProductItem';
import React from 'react';


const LatestProduct = () => {
  const data = ProductData.reverse()
  return (
    <section className='py-20'>
      <div className="container flex flex-col items-start gap-4">
        <h2 className='text-2xl font-medium'>Latest Products</h2>
        <div className="w-full grid grid-cols-6 gap-4">
          {data.slice(0, 12).map((dataItem, index) => (
            <ProductItem key={index} category={dataItem.category} subCategory={dataItem.subCategory} dataItem={dataItem} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestProduct;

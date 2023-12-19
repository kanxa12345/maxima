import ProductData from '@/data/ProductData';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const category = () => {
  const router = useRouter();
  const { category } = router.query;
  const data = ProductData.filter(item => item.category === category)

  return (
    <>
      <section className='h-[150px] relative'>
        <Image height={200} width={200} className='absolute w-full h-full indent-0 object-cover' src="/images/banner-image/img1.avif" alt="bg-image" />
        <div className='absolute w-full h-full inset-0 bg-black opacity-70'></div>
        <div className="container flex justify-center items-center h-full relative text-white">
          <h1 className='text-xl font-medium text-gray-200'>Product Category</h1>
        </div>
      </section>
      <section className='py-20'>
        <div className="container flex flex-col items-center gap-4">
          <h2 className='text-2xl font-medium'>{category}</h2>
          <div className="w-full grid grid-cols-4 gap-5">
            {data.map((dataItem, index) => (
              <div key={index}>
                <Image src={dataItem.imageUrl} height={200} width={200} alt={dataItem.subCategory} />
                <h3>{dataItem.subCategory}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default category;


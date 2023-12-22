import ProductData from '@/data/ProductData';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const category = () => {
  const router = useRouter();
  const { category } = router.query;
  const data = ProductData.filter(item => item.category === category)

  const groupedData = {};

  data.forEach((dataItem) => {
    if (!groupedData[dataItem.subCategory]) {
      groupedData[dataItem.subCategory] = {
        title: dataItem.subCategory,
        thumbnailImage: dataItem.imageUrl,
        products: [dataItem],
      };
    } else {
      groupedData[dataItem.subCategory].products.push(dataItem);
    }
  });

  return (
    <>
      <section className='h-[150px] relative'>
        <Image src="/images/banner-image/img1.avif" priority={true} height={200} width={200} className='absolute w-full h-full indent-0 object-cover' alt="bg-image" />
        <div className='absolute w-full h-full inset-0 bg-black opacity-70'></div>
        <div className="container flex justify-center items-center h-full relative text-white">
          <ul className='flex items-center gap-1 md:text-lg font-medium'>
            <li className='text-gray-300'><Link href="/">Home</Link></li>
            /
            <li>Sub-Category</li>
          </ul>
        </div>
      </section>
      <section className='py-20'>
        <div className="container flex flex-col items-center gap-4">
          <h2 className='text-2xl font-medium'>{category}</h2>
          <div className="w-full grid grid-cols-5 gap-4">
            {Object.values(groupedData).map((dataItem, index) => (
              <div key={index} className='flex flex-col items-center gap-2 p-2 shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] group rounded-sm'>
                <button onClick={() => router.push(`/category/${category}/${dataItem.title}`)} className='overflow-hidden'>
                  <Image priority={true} height={200} width={200} className='w-full h-[250px] object-cover group-hover:scale-110 transition-all duration-200 ease-linear' src={dataItem.thumbnailImage} alt={dataItem.title} />
                </button>
                <h3 className='text-xl font-medium'>{dataItem.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default category;


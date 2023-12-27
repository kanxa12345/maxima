import React from 'react';
import ProductData from '@/data/ProductData';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ProductCat = () => {
    const router = useRouter()


    const groupedData = {};
    ProductData.forEach((dataItem) => {
        if (!groupedData[dataItem.category]) {
            groupedData[dataItem.category] = {
                title: dataItem.category,
                thumbnailImage: dataItem.imageUrl,
                products: [dataItem],
            };
        } else {
            groupedData[dataItem.category].products.push(dataItem);
        }
    });

    return (
        <section className='py-20 bg-gray-200 bg-opacity-80'>
            {Object.values(groupedData).length > 0 && (
                <div className="container flex flex-col items-start gap-2">
                    <h2 className='text-2xl font-medium'>Categories</h2>
                    <div className="w-full grid grid-cols-5 gap-4">
                        {Object.values(groupedData).map((dataItem, index) => (
                            <div key={index} className='flex flex-col items-center gap-2 p-2 shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] group rounded-sm bg-white'>
                                <button onClick={() => router.push(`/category/${dataItem.title}`)} className='overflow-hidden'>
                                    <Image src={dataItem.thumbnailImage} priority={true} height={200} width={200} className='w-full h-[250px] object-cover group-hover:scale-110 transition-all duration-200 ease-linear' alt={dataItem.title} />
                                </button>
                                <h3 className='text-xl font-medium'>{dataItem.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}

export default ProductCat;

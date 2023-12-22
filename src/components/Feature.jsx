import FeatureData from '@/data/FeatureData';
import React from 'react';


const Feature = () => {
  return (
    <section className='py-10 bg-gray-100'>
      <div className="container grid grid-cols-4 gap-10">
        {FeatureData.map((dataItem, index)=>(
            <div key={index} className='flex items-center justify-center gap-3'>
                <i aria-hidden={true} className={`${dataItem.icon} text-gray-600 text-2xl`}></i>
                <h3 className='text-lg font-medium'>{dataItem.title.toUpperCase()}</h3>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Feature;

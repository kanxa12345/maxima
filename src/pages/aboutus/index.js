import MvoData from '@/data/MvoData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const index = () => {
  return (
    <>
      <section className='h-[150px] relative'>
        <Image height={200} width={200} className='absolute w-full h-full indent-0 object-cover' src="/images/banner-image/img1.avif" alt="bg-image" />
        <div className='absolute w-full h-full inset-0 bg-black opacity-70'></div>
        <div className="container flex justify-center items-center h-full relative text-white">
          <ul className='flex items-center gap-1 md:text-lg font-medium'>
            <li className='text-gray-300'><Link href="/">Home</Link></li>
            /
            <li>About Us</li>
          </ul>
        </div>
      </section>
      <section className='py-20'>
        <div className="container flex flex-col items-center gap-4">
          <h2 className='text-2xl font-semibold'>Our Story</h2>
          <p className='w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis sed expedita architecto illum explicabo ex harum delectus, laudantium quaerat, eius facilis? Laborum, dicta eligendi quam quis quibusdam modi fuga dolores fugit eius vero officiis vitae veritatis provident saepe ipsa beatae! Ipsa labore asperiores voluptate error suscipit, vero impedit dolores dolor inventore distinctio temporibus odio quam incidunt? Cumque, earum expedita quia vitae molestias adipisci impedit, quibusdam placeat voluptas praesentium aliquam pariatur quam, fugiat laboriosam distinctio alias tempore dolor sint libero. Harum reiciendis voluptatum aut nostrum sunt fuga. Itaque, aut. Ea similique sequi id beatae libero iusto dolor eligendi mollitia alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi unde debitis beatae necessitatibus voluptatibus explicabo repudiandae officia soluta, saepe harum exercitationem eveniet, eum repellendus accusamus suscipit cum maxime, optio praesentium? Ab voluptates, officiis fugit, totam vel architecto porro dolorem similique perferendis mollitia et. Est et, quisquam id alias nemo tenetur?</p>
        </div>
      </section>
      <section className='py-20'>
        <div className="container grid grid-cols-3 gap-8">
          {MvoData.map((dataItem, index) => (
            <div key={index} className='px-5 py-8 bg-gray-100 flex flex-col items-center gap-2 rounded-md'>
              <h3 className='text-xl font-medium'>{dataItem.title}</h3>
              <p className='text-center sm:text-base text-sm text-gray-600'>{dataItem.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default index;

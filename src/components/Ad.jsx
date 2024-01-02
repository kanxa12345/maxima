import Image from "next/image";
import React from "react";

const Ad = () => {
  const adImages = [
    "/images/ad-image/img1.jpg",
    "/images/ad-image/img2.jpg",
    "/images/ad-image/img3.jpg",
  ];
  return (
    <section className="py-6">
      <div className="container grid sm:grid-cols-3 gap-4">
        {adImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            priority={true}
            height={2000}
            width={2000}
            alt="ad-image"
            className="w-full lg:h-[200px] md:h-[150px] sm:h-[100px] h-[130px] object-cover rounded"
          />
        ))}
      </div>
    </section>
  );
};

export default Ad;

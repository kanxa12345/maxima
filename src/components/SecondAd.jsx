import Image from "next/image";
import React from "react";

const SecondAd = () => {
  const adImages = ["/images/ad-image/img4.jpg", "/images/ad-image/img5.jpg"];
  return (
    <section className="py-6 bg-gray-100">
      <div className="container flex sm:flex-row flex-col gap-6">
        {adImages.map((image, index) => (
          <div key={index} className={`w-full ${index % 2 === 0 ? "sm:w-2/3" : "sm:w-1/3"}`}>
            <Image
              src={image}
              priority={true}
              height={2000}
              width={2000}
              alt="ad-image"
              className="w-full lg:h-[200px] md:h-[150px] sm:h-[100px] h-[130px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondAd;

import { addToCart } from "@/redux/Cartslice";
import { addToWishlist } from "@/redux/Wishlistslice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const ProductItem = ({ category, subCategory, dataItem }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const HandleAddCart = (item) => {
    dispatch(addToCart(item));
  };
  const HandleAddWishlist = (item) => {
    dispatch(addToWishlist(item));
  };

  return (
    <div className="flex flex-col items-start gap-2 p-2 shadow-[0_0_8px_1px_rgba(0,0,0,0.1)] group rounded-sm relative overflow-hidden bg-white">
      <button
        onClick={() =>
          router.push(
            `/category/${category}/${encodeURIComponent(
              subCategory
            )}/${encodeURIComponent(dataItem.product)}`
          )
        }
        className="overflow-hidden inline-block sm:h-[200px] h-[150px] w-full"
      >
        <Image
          src={dataItem.thumbnail}
          priority={true}
          height={1000}
          width={1000}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-200 ease-linear"
          alt={dataItem.product}
        />
      </button>
      <div className="flex flex-col items-start gap-[2px] absolute top-28 right-3 lg:-right-10 lg:opacity-0 lg:group-hover:right-3 lg:group-hover:opacity-100 transition-all duration-200 ease-linear">
        <button
          onClick={() => HandleAddWishlist(dataItem)}
          className="text-xs flex justify-center items-center h-[25px] w-[25px] rounded-full bg-white bg-opacity-90 border border-gray-600"
        >
          <i aria-hidden={true} className="fa-solid fa-heart"></i>
        </button>
        <button
          onClick={() => HandleAddCart(dataItem)}
          className="text-xs flex justify-center items-center h-[25px] w-[25px] rounded-full bg-white bg-opacity-90 border border-gray-600"
        >
          <i aria-hidden={true} className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
      <div className="flex flex-col items-start justify-between gap-1 py-1 px-2 flex-grow">
        <small className="sm:text-sm text-xs font-medium text-gray-600">
          {category}
        </small>
        <h3 className="sm:text-lg text-base font-medium sm:leading-5 leading-4">
          {dataItem.product}
        </h3>
        <div>
          <p className="text-brandColor font-medium sm:text-base text-sm">
            Rs.{dataItem.newPrice}
          </p>
          {dataItem.oldPrice.length > 0 && (
            <p className="line-through text-gray-500 sm:text-sm text-xs">
              Rs.{dataItem.oldPrice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

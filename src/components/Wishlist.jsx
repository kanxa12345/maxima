import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "@/redux/Wishlistslice";
import { addToCart } from "@/redux/Cartslice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist);
  const groupedData = wishlistItems.reduce((result, item) => {
    const { product } = item;
    if (!result[product]) {
      result[product] = [];
    }
    result[product].push(item);
    return result;
  }, {});

  const groupedArray = Object.keys(groupedData).map((product) => ({
    product,
    products: groupedData[product],
  }));
  const handleRemove = (item) => {
    const confirmRemove = confirm("Do you want to remove item from cart list");
    if (confirmRemove) {
      dispatch(removeFromWishlist(item));
    }
  };
  const handleAddCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="fixed right-0 lg:top-[69px] sm:top-[59px] top-[44px] bg-white h-full border px-4 pt-8 pb-[130px] 2xl:w-1/4 xl:w-1/3 overflow-y-auto flex flex-col items-start gap-4 z-[100]">
      <h2 className="md:text-2xl text-xl font-medium">Your Wishlist</h2>
      <div className="w-full border p-4 flex flex-col items-start gap-10 overflow-y-auto">
        {groupedArray.length > 0 ? (
          groupedArray.map((dataItem, index) => (
            <div key={index} className="flex gap-4 w-full">
              <Image
                src={dataItem.products[0].thumbnail}
                priority={true}
                height={150}
                width={150}
                alt={dataItem.product}
                className="md:w-[150px] w-[100px] md:h-[100px] h-[80px] object-cover object-center"
              />
              <div className="flex flex-col items-start gap-1 w-2/3">
                <p className="md:text-lg font-medium">{dataItem.product}</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleRemove(dataItem.products[0])}
                    className="md:text-xs text-[10px] px-2 py-1 bg-brandColor text-white rounded"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => handleAddCart(dataItem.products[0])}
                    className="md:text-xs text-[10px] px-2 py-1 rounded bg-secondColor text-white"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h3 className="md:text-3xl text-2xl md:font-semibold font-medium">Your wishlist is empty</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

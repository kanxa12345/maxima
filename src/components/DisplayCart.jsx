import React, { useEffect, useState } from "react";
import { addToCart, decreaseCart, removeFromCart } from "@/redux/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const DisplayCart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const groupedData = cartItems.reduce((result, item) => {
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

  useEffect(() => {
    setTotalPrice(
      cartItems.reduce((result, item) => {
        const price = parseInt(item.newPrice);
        if (price) {
          return result + price;
        }
        else {
          return result;
        }
      }, 0)
    );
  }, [cartItems]);

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseCart(item));
  };
  const handleRemove = (item) => {
    const confirmRemove = confirm("Do you want to remove item from cart list");
    if (confirmRemove) {
      dispatch(removeFromCart(item));
    }
  };

  return (
    <div className="fixed right-0 lg:top-[69px] sm:top-[59px] top-[44px] bg-white h-full border px-4 pt-8 pb-[130px] 2xl:w-1/4 xl:w-1/3 overflow-y-auto flex flex-col items-start gap-4 z-[100]">
      <h2 className="md:text-2xl text-xl font-medium">Your cart</h2>
      <div className="w-full border p-4 flex flex-col items-start gap-10 overflow-y-auto">
        {groupedArray.length > 0 ? (
          groupedArray.map((dataItem, index) => (
            <div key={index} className="flex gap-4 w-full">
              <Image
                src={dataItem.products[0].imageUrl}
                priority={true}
                height={2000}
                width={2000}
                alt={dataItem.product}
                className="md:w-[150px] w-[100px] md:h-[100px] h-[80px] object-cover object-center"
              />
              <div className="flex flex-col items-start gap-1 w-2/3">
                <p className="md:text-lg font-medium">{dataItem.product}</p>
                <small className="md:text-base text-sm font-medium text-gray-600">
                  Price: Rs.
                  {dataItem.products.length *
                    parseInt(dataItem.products[0].newPrice)}
                </small>
                <div className="flex items-center gap-2 md:text-base text-sm">
                  <p>Quantity:</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecrease(dataItem.products[0])}
                      className="md:text-sm text-[10px] cursor-pointer flex justify-center items-center md:w-[20px] w-[15px] md:h-[20px] h-[15px] bg-gray-600 rounded-full text-white"
                    >
                      <i aria-hidden={true} className="fa-solid fa-minus"></i>
                    </button>
                    <p>{dataItem.products.length}</p>
                    <button
                      onClick={() => handleAdd(dataItem.products[0])}
                      className="flex justify-center items-center md:w-[20px] w-[15px] md:h-[20px] h-[15px] bg-gray-600 md:text-sm text-[10px] rounded-full cursor-pointer text-white"
                    >
                      <i aria-hidden={true} className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(dataItem.products[0])}
                  className="md:text-xs text-[10px] px-2 py-1 bg-brandColor text-white rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h3 className="md:text-3xl text-2xl md:font-semibold font-medium">
              Your cart is empty
            </h3>
          </div>
        )}
      </div>
      <div className="w-full flex gap-2 items-center justify-between">
        <p className="md:text-xl text-lg md:font-semibold font-medium text-gray-600">
          Total price: Rs.{totalPrice}{" "}
        </p>
        <button className="py-1 px-2 bg-secondColor text-white rounded md:text-base text-sm">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default DisplayCart;

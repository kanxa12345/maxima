import ProductData from "@/data/ProductData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ProductItem from "../ProductItem";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/Cartslice";
import { addToWishlist } from "@/redux/Wishlistslice";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const product = () => {
  const router = useRouter();
  const { category, subCategory, product } = router.query;
  const data = ProductData.find(
    (item) =>
      item.category === category &&
      item.subCategory === subCategory &&
      item.product === product
  );
  const otherProducts = ProductData.filter(
    (item) =>
      item.category === category &&
      item.subCategory === subCategory &&
      item.product !== product
  );

  // filter images from data
  const isImage = (value) => {
    const imageExtensionRegex = /\.(jpg|jpeg|png|gif|bmp)$/i;
    return imageExtensionRegex.test(value);
  };

  const images = data && Object.values(data).filter((value) => isImage(value));
  const galleryItems =
    images &&
    images.length > 0 &&
    images.map((imagePath) => ({
      original: imagePath,
      thumbnail: imagePath,
    }));

  const dispatch = useDispatch();
  const HandleAddCart = (item) => {
    dispatch(addToCart(item));
  };
  const HandleAddWishlist = (item) => {
    dispatch(addToWishlist(item));
  };

  const initialForm = {
    name: "",
    email: "",
    review: "",
  };
  const [form, setForm] = useState(initialForm);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log(form);
    setForm(initialForm);
  };

  return (
    <>
      <section className="md:h-[150px] h-[100px] relative">
        <Image
          src="/images/banner-image/img1.avif"
          priority={true}
          height={200}
          width={200}
          className="absolute w-full h-full indent-0 object-cover"
          alt="bg-image"
        />
        <div className="absolute w-full h-full inset-0 bg-black opacity-70"></div>
        <div className="container flex justify-center items-center h-full relative text-white">
          <ul className="flex sm:flex-row flex-col items-center gap-1 md:text-lg font-medium">
            <div className="flex items-center gap-1">
              <li className="text-gray-300">
                <Link href="/">Home</Link>
              </li>
              /
              <li className="text-gray-300">
                <Link href={`/category/${category}`}>Sub-Category</Link>
              </li>
              /
            </div>
            <div className="flex items-center gap-1">
              <li className="text-gray-300">
                <Link
                  href={`/category/${category}/${encodeURIComponent(
                    subCategory
                  )}`}
                >
                  Products
                </Link>
              </li>
              /<li>Product Detail</li>
            </div>
          </ul>
        </div>
      </section>
      <section className="md:py-20 py-16">
        {data && (
          <div className="container flex md:flex-row flex-col gap-8">
            <div className="md:w-1/3 w-full h-auto">
              <div className="sticky top-0 h-auto w-full">
                <ImageGallery
                  showNav={false}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  items={galleryItems}
                  slideOnThumbnailOver={true}
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 md:w-2/3 w-full">
              <small className="text-base font-semibold text-gray-500">
                {category}
              </small>
              <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
                {product}
              </h1>
              <big className="md:text-xl text-lg font-semibold text-gray-700">
                {data.modal}
              </big>
              <p className="text-gray-950 sm:text-base text-sm">
                {data.description}
              </p>
              <p className="sm:text-lg font-medium">
                Availability: {data.availability}
              </p>
              <div className="flex items-center gap-1 sm:text-lg font-medium">
                Price:
                <span className="flex items-center gap-4">
                  <p>Rs.{data.newPrice}</p>
                  {data.oldPrice.length > 0 && (
                    <p className="line-through text-gray-600">
                      Rs.{data.oldPrice}
                    </p>
                  )}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => HandleAddWishlist(data)}
                  className="sm:p-2 p-1 rounded sm:text-sm text-xs font-medium bg-brandColor text-white"
                >
                  Add to wishlist
                </button>
                <button
                  onClick={() => HandleAddCart(data)}
                  className="sm:p-2 p-1 rounded sm:text-sm text-xs font-medium bg-secondColor text-white"
                >
                  Add to cart
                </button>
              </div>
              {data.features.length > 0 && (
                <div className="flex flex-col items-start mt-1">
                  <h3 className="text-lg font-medium">More features</h3>
                  {data.features.map((item, index) => (
                    <p key={index} className="sm:text-base text-sm">
                      <span className="font-medium mr-1">{index + 1}.</span>
                      {item}
                    </p>
                  ))}
                </div>
              )}
              <div className="flex flex-col items-start mt-6 lg:w-2/3 sm:w-full w-2/3">
                <h3 className="text-xl font-semibold">Review product</h3>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col items-center gap-2 w-full sm:text-base text-sm"
                >
                  <div className="flex sm:flex-row flex-col sm:gap-5 gap-2 w-full">
                    <div className="flex flex-col items-start sm:w-1/2 w-full">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleInputChange}
                        className="border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col items-start sm:w-1/2 w-full">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleInputChange}
                        className="border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <label htmlFor="review">Review</label>
                    <textarea
                      type="text"
                      id="review"
                      name="review"
                      rows="5"
                      value={form.review}
                      onChange={handleInputChange}
                      className="border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none"
                    />
                  </div>
                  <input
                    type="submit"
                    value="SUBMIT"
                    className="font-medium text-white bg-secondColor px-2 py-1 rounded cursor-pointer"
                  />
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
      {otherProducts.length > 0 && (
        <section className="md:py-20 py-16 bg-gray-100">
          <div className="container flex flex-col items-start gap-4">
            <h2 className="md:text-2xl text-xl font-medium">
              Similar Products
            </h2>
            <div className="w-full grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-4 gap-2">
              {otherProducts.map((dataItem, index) => (
                <ProductItem
                  key={index}
                  category={category}
                  subCategory={subCategory}
                  dataItem={dataItem}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default product;

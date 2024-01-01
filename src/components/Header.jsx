import ProductData from "@/data/ProductData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useSelector } from "react-redux";
import DisplayCart from "./DisplayCart";
import Wishlist from "./Wishlist";
import TrackOrder from "./TrackOrder";

Modal.setAppElement("#__next");
const Header = () => {
  const router = useRouter();
  const [openLogin, setOpenLogin] = useState(false);
  const [openTrack, setOpenTrack] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [categoryMenus, setCategoryMenus] = useState({});
  const [subcategoryMenus, setSubcategoryMenus] = useState({});
  const [nav, setNav] = useState(false);

  const groupedData = {};

  ProductData.forEach((dataItem) => {
    if (!groupedData[dataItem.category]) {
      groupedData[dataItem.category] = {
        category: dataItem.category,
        thumbnailImage: dataItem.imageUrl,
        subcategories: {},
      };
    }
    // Group by subcategory within the category
    const categoryGroup = groupedData[dataItem.category];
    if (!categoryGroup.subcategories[dataItem.subCategory]) {
      categoryGroup.subcategories[dataItem.subCategory] = {
        subCategory: dataItem.subCategory,
        thumbnailImage: dataItem.imageUrl,
        products: [dataItem],
      };
    } else {
      categoryGroup.subcategories[dataItem.subCategory].products.push(dataItem);
    }
  });
  const handleCategoryHover = (category, shouldShow) => {
    setCategoryMenus((prevMenus) => ({
      ...prevMenus,
      [category]: shouldShow,
    }));
  };

  const handleSubcategoryHover = (subcategory, shouldShow) => {
    setSubcategoryMenus((prevMenus) => ({
      ...prevMenus,
      [subcategory]: shouldShow,
    }));
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = (setFunction) => {
    setFunction(true);
    document.body.classList.add("overflow-hidden");
  };
  const closeModal = (setFunction) => {
    setFunction(false);
    document.body.classList.remove("overflow-hidden");
  };

  //for product search
  const [text, setText] = useState("");
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSearch = () => {
    if (text.trim() === "") {
      return;
    }

    // Check if the search text matches a category, subcategory, or product
    const matchedCategory = Object.values(groupedData).find((category) =>
      category.category.toLowerCase().includes(text.toLowerCase())
    );
    if (matchedCategory) {
      router.push(`/category/${matchedCategory.category}`);
      return;
    }

    for (const categoryItem of Object.values(groupedData)) {
      const matchedSubcategory = Object.values(categoryItem.subcategories).find(
        (subcategory) =>
          subcategory.subCategory.toLowerCase().includes(text.toLowerCase())
      );
      if (matchedSubcategory) {
        router.push(
          `/category/${categoryItem.category}/${matchedSubcategory.subCategory}`
        );
        return;
      }

      for (const subCategoryItem of Object.values(categoryItem.subcategories)) {
        const matchedProduct = subCategoryItem.products.find((product) =>
          product.product.toLowerCase().includes(text.toLowerCase())
        );
        if (matchedProduct) {
          router.push(
            `/category/${categoryItem.category}/${subCategoryItem.subCategory}`
          );
          return;
        }
      }
    }
    alert("No matching category, subcategory, or product found.");
  };
  const handleKeyPress = (e) => {
    if (e.key.toLowerCase() === "enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const cartItems = useSelector((state) => state.cart);
  const filteredCartItems =
    cartItems.length > 0 &&
    cartItems.reduce((result, item) => {
      const { product } = item;
      if (!result[product]) {
        result[product] = [];
      }
      result[product].push(item);
      return result;
    }, {});
  const wishlistItems = useSelector((state) => state.wishlist);
  const filteredWishlistItems = wishlistItems.reduce((result, item) => {
    const { product } = item;
    if (!result[product]) {
      result[product] = [];
    }
    result[product].push(item);
    return result;
  }, {});
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);

  return (
    <>
      {/* top header */}
      <header
        className={`sticky top-0 z-40 bg-white ${
          scrolled ? "shadow-[0_0_10px_2px_rgba(0,0,0,0.2)]" : ""
        }`}
      >
        <div className="container flex justify-between items-center gap-2 py-2">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={200}
              height={100}
              alt="logo"
              priority={true}
              className="lg:w-[150px] sm:w-[120px] w-[80px]"
            />
          </Link>
          <div className="md:w-1/3 w-1/2 relative">
            <input
              type="search"
              placeholder="search product"
              value={text}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              className="border border-gray-400 md:p-2 p-1 rounded-lg w-full focus:outline-none md:text-base sm:text-sm text-xs"
            />
            <button
              onClick={handleSearch}
              className="md:w-[25px] w-5 md:h-[25px] h-5 rounded-full flex items-center justify-center bg-gray-200 absolute right-2 top-1/2 -translate-y-1/2 hover:bg-gray-300 transition-all duration-150 ease-linear"
            >
              <i
                aria-hidden={true}
                className="fa-solid fa-magnifying-glass md:text-sm text-xs"
              ></i>
            </button>
          </div>
          <div className="flex items-center md:gap-6 gap-3">
            <button
              onClick={() => openModal(setOpenLogin)}
              className="flex items-center justify-center md:h-[25px] sm:h-5 h-4 md:w-[25px] sm:w-5 w-4 rounded-full border border-gray-800"
            >
              <i
                aria-hidden={true}
                className="fa-solid fa-user md:text-xs sm:text-[10px] text-[8px]"
              ></i>
            </button>
            <button
              onClick={() => {
                setOpenCart(!openCart), setOpenWishlist(false);
              }}
              className="relative"
            >
              <i
                aria-hidden={true}
                className="fa-solid fa-cart-shopping md:text-base sm:text-sm text-xs"
              ></i>
              <span
                className={`absolute -top-2 -right-3 bg-red-500 text-white text-[10px] w-[15px] h-[15px] rounded-full justify-center items-center ${
                  Object.values(filteredCartItems).length > 0
                    ? " flex"
                    : "hidden"
                }`}
              >
                {Object.values(filteredCartItems).length}
              </span>
            </button>
            <button
              onClick={() => {
                setOpenWishlist(!openWishlist), setOpenCart(false);
              }}
              className="relative"
            >
              <i
                aria-hidden={true}
                className="fa-solid fa-heart md:text-base sm:text-sm text-xs"
              ></i>
              <span
                className={`absolute -top-2 -right-3 bg-red-500 text-white text-[10px] w-[15px] h-[15px] rounded-full justify-center items-center ${
                  Object.values(filteredWishlistItems).length > 0
                    ? " flex"
                    : "hidden"
                }`}
              >
                {Object.values(filteredWishlistItems).length}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* bottom header */}
      <nav className="bg-brandColor text-white relative lg:z-10 lg:py-0 py-2">
        <div className="container flex items-center justify-between">
          <span onClick={() => setNav(true)} className="lg:hidden text-xl">
            <i aria-hidden={true} className="fa-solid fa-bars"></i>
          </span>
          <div
            className={`cursor-pointer lg:p-0 lg:w-60 w-[260px] lg:opacity-100 lg:bg-transparent lg:overflow-visible overflow-y-auto bg-black lg:h-auto h-screen lg:relative fixed lg:z-0 z-[300] top-0 lg:left-0 lg:transition-none transition-all duration-300 ease-linear ${
              nav ? "left-0 p-6 opacity-100" : "-left-[260px] p-0 opacity-0"
            }`}
          >
            <span
              onClick={() => setNav(false)}
              className={`lg:hidden float-right mb-5 text-xl ${
                nav ? "block" : "hidden"
              }`}
            >
              <i aria-hidden={true} className="fa-solid fa-xmark"></i>
            </span>
            <div
              onClick={() => {
                handleCategoryHover(
                  "Products",
                  categoryMenus["Products"] ? false : true
                );
              }}
              onMouseEnter={() => {
                if (window.innerWidth > 1024) {
                  handleCategoryHover("Products", true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 1024) {
                  handleCategoryHover("Products", false);
                }
              }}
              className="py-3"
            >
              <span
                className={`w-full bg-white text-black lg:flex py-1 px-2 hidden items-center justify-between rounded`}
              >
                Products
                <i
                  aria-hidden={true}
                  className={`fa-solid fa-angle-down text-sm ${
                    categoryMenus["Products"] ? "rotate-180" : ""
                  } transition-all duration-200 ease-linear`}
                ></i>
              </span>
              {Object.values(groupedData).length > 0 && (
                <div
                  className={`lg:bg-gray-100 lg:text-black text-white ${
                    categoryMenus["Products"] || nav ? "block" : "hidden"
                  } lg:absolute lg:top-[56px] lg:left-0 lg:border lg:mt-0 mt-2 lg:h-96`}
                >
                  <div className="flex flex-col lg:gap-0 gap-1 lg:w-60 w-full h-full lg:overflow-y-auto">
                    {Object.values(groupedData).map(
                      (categoryItem, categoryIndex) => (
                        <div
                          key={categoryIndex}
                          className="p-2 lg:border-b lg:hover:bg-white w-full lg:flex items-center justify-between text-sm"
                          onMouseEnter={() => {
                            if (window.innerWidth > 1024) {
                              handleCategoryHover(categoryItem.category, true);
                            }
                          }}
                          onMouseLeave={() => {
                            if (window.innerWidth > 1024) {
                              handleCategoryHover(categoryItem.category, false);
                            }
                          }}
                          onClick={() => {
                            if (window.innerWidth > 1024) {
                              setCategoryMenus({});
                            }
                            router.push(`/category/${categoryItem.category}`);
                          }}
                        >
                          <div
                            onClick={() =>
                              handleCategoryHover(
                                categoryItem.category,
                                categoryMenus[categoryItem.category]
                                  ? false
                                  : true
                              )
                            }
                            className="flex items-center justify-between w-full"
                          >
                            {categoryItem.category}
                            <i
                              aria-hidden={true}
                              className={`fa-solid fa-angle-right lg:transition-none transition-all duration-150 ease-linear lg:rotate-0 ${
                                categoryMenus[categoryItem.category]
                                  ? "rotate-90"
                                  : ""
                              } text-sm lg:text-gray-500 lg:pr-[14px]`}
                            ></i>
                          </div>
                          {Object.values(categoryItem.subcategories).length >
                            0 && (
                            <div
                              className={`lg:bg-white bg-black lg:text-black text-gray-300 ${
                                categoryMenus[categoryItem.category]
                                  ? "block"
                                  : "hidden"
                              } lg:absolute lg:-top-[1px] lg:left-[220px] lg:border lg:mt-0 mt-2 lg:h-96`}
                            >
                              <div className="flex flex-col lg:gap-0 gap-1 lg:w-60 w-full h-full lg:overflow-y-auto">
                                {Object.values(categoryItem.subcategories).map(
                                  (subCategoryItem, subCategoryIndex) => (
                                    <div
                                      key={subCategoryIndex}
                                      className="p-2 lg:border-b lg:hover:bg-gray-100 text-sm w-full lg:flex items-center justify-between"
                                      onMouseEnter={() => {
                                        if (window.innerWidth > 1024) {
                                          handleSubcategoryHover(
                                            subCategoryItem.subCategory,
                                            true
                                          );
                                        }
                                      }}
                                      onMouseLeave={() => {
                                        if (window.innerWidth > 1024) {
                                          handleSubcategoryHover(
                                            subCategoryItem.subCategory,
                                            false
                                          );
                                        }
                                      }}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        router.push(
                                          `/category/${
                                            categoryItem.category
                                          }/${encodeURIComponent(
                                            subCategoryItem.subCategory
                                          )}`
                                        );
                                      }}
                                    >
                                      <div
                                        onClick={() =>
                                          handleSubcategoryHover(
                                            subCategoryItem.subCategory,
                                            subcategoryMenus[
                                              subCategoryItem.subCategory
                                            ]
                                              ? false
                                              : true
                                          )
                                        }
                                        className="w-full flex items-center justify-between"
                                      >
                                        {subCategoryItem.subCategory}
                                        <i
                                          aria-hidden={true}
                                          className={`fa-solid fa-angle-right lg:transition-none transition-all duration-150 ease-linear lg:rotate-0 ${
                                            subcategoryMenus[
                                              subCategoryItem.subCategory
                                            ]
                                              ? "rotate-90"
                                              : ""
                                          } text-sm lg:text-gray-500 lg:pr-[14px]`}
                                        ></i>
                                      </div>
                                      {subCategoryItem.products.length > 0 && (
                                        <div
                                          className={`lg:bg-white lg:text-black text-gray-300 ${
                                            subcategoryMenus[
                                              subCategoryItem.subCategory
                                            ]
                                              ? "block"
                                              : "hidden"
                                          } lg:absolute lg:-top-[1px] lg:left-[220px] lg:border lg:mt-0 mt-2 lg:h-96`}
                                        >
                                          <div className="flex flex-col lg:gap-0 gap-1 lg:w-60 w-full h-full lg:overflow-y-auto">
                                            {subCategoryItem.products.map(
                                              (productItem, productIndex) => {
                                                return (
                                                  <div
                                                    onClick={(e) => {
                                                      setCategoryMenus({});
                                                      setSubcategoryMenus({});
                                                      setNav(false);
                                                      e.stopPropagation();
                                                      router.push(
                                                        `/category/${
                                                          categoryItem.category
                                                        }/${encodeURIComponent(
                                                          subCategoryItem.subCategory
                                                        )}/${encodeURIComponent(
                                                          productItem.product
                                                        )}`
                                                      );
                                                    }}
                                                    key={productIndex}
                                                    className="p-2 lg:border-b inline-block w-full relative lg:text-sm text-xs"
                                                  >
                                                    {productItem.product}
                                                  </div>
                                                );
                                              }
                                            )}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <button
              onClick={() => openModal(setOpenTrack)}
              className="flex items-center gap-2 text-lg font-medium"
            >
              <i
                aria-hidden={true}
                className="fa-solid fa-truck-fast text-base"
              ></i>
              <p className="sm:inline-block hidden">Track your order</p>
            </button>
          </div>
        </div>
      </nav>
      <Modal
        isOpen={openLogin}
        onRequestClose={closeModal}
        className="h-full w-full flex justify-center items-center"
      >
        <Login closeModal={closeModal} setOpenLogin={setOpenLogin} />
      </Modal>
      <Modal
        isOpen={openTrack}
        onRequestClose={closeModal}
        className="h-full w-full flex justify-center items-center"
      >
        <TrackOrder closeModal={closeModal} setOpenTrack={setOpenTrack} />
      </Modal>
      {openCart && <DisplayCart />}
      {openWishlist && <Wishlist />}
    </>
  );
};

export default Header;

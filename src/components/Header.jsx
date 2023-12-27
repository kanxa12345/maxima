import ProductData from '@/data/ProductData';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';
import Login from './Login';
import { useSelector } from 'react-redux';
import DisplayCart from './DisplayCart';
import Wishlist from './Wishlist';

const Header = () => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [categoryMenus, setCategoryMenus] = useState({});
    const [subcategoryMenus, setSubcategoryMenus] = useState({});

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
        setCategoryMenus(prevMenus => ({
            ...prevMenus,
            [category]: shouldShow,
        }));
    };

    const handleSubcategoryHover = (subcategory, shouldShow) => {
        setSubcategoryMenus(prevMenus => ({
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

    const openModal = () => {
        setIsOpen(true);
        document.body.classList.add('overflow-hidden')
    }
    const closeModal = () => {
        setIsOpen(false);
        document.body.classList.remove('overflow-hidden')
    }

    //for product search
    const [text, setText] = useState('');
    const handleInputChange = (e) => {
        setText(e.target.value);
    }

    const handleSearch = () => {
        if (text.trim() === '') {
            return; // Do nothing if the search text is empty
        }

        // Check if the search text matches a category, subcategory, or product
        const matchedCategory = Object.values(groupedData).find(category => category.category.toLowerCase().includes(text.toLowerCase()));
        if (matchedCategory) {
            router.push(`/category/${matchedCategory.category}`);
            return;
        }

        for (const categoryItem of Object.values(groupedData)) {
            const matchedSubcategory = Object.values(categoryItem.subcategories).find(subcategory => subcategory.subCategory.toLowerCase().includes(text.toLowerCase()));
            if (matchedSubcategory) {
                router.push(`/category/${categoryItem.category}/${matchedSubcategory.subCategory}`);
                return;
            }

            for (const subCategoryItem of Object.values(categoryItem.subcategories)) {
                const matchedProduct = subCategoryItem.products.find(product => product.product.toLowerCase().includes(text.toLowerCase()));
                if (matchedProduct) {
                    router.push(`/category/${categoryItem.category}/${subCategoryItem.subCategory}`);
                    return;
                }
            }
        }
        alert('No matching category, subcategory, or product found.');

    }
    const handleKeyPress = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            e.preventDefault();
            handleSearch();
        }
    }


    const cartItems = useSelector(state => state.cart)
    const filteredCartItems = cartItems.length > 0 && cartItems.reduce((result, item) => {
        const { product } = item;
        if (!result[product]) {
            result[product] = [];
        }
        result[product].push(item);
        return result;
    }, {});
    const wishlistItems = useSelector(state => state.wishlist)
    const filteredWishlistItems = wishlistItems.reduce((result, item) => {
        const { product } = item;
        if (!result[product]) {
            result[product] = [];
        }
        result[product].push(item);
        return result;
    }, {});
    const [openCart, setOpenCart] = useState(false)
    const [openWishlist, setOpenWishlist] = useState(false)
    return (
        <>
            <header className={`sticky top-0 z-40 bg-white ${scrolled ? 'shadow-[0_0_10px_2px_rgba(0,0,0,0.2)]' : ''}`}>
                <div className="container flex justify-between items-center py-2">
                    <Link href="/">
                        <Image src="/images/logo.png" width={200} height={100} alt='logo' priority={true} className='w-[150px]' />
                    </Link>
                    <div className='w-1/3 relative'>
                        <input type="search" placeholder='search product here...' value={text} onChange={handleInputChange} onKeyDown={handleKeyPress} className='border border-gray-400 p-2 rounded-lg w-full focus:outline-none' />
                        <button onClick={handleSearch} className='w-[25px] h-[25px] rounded-full flex items-center justify-center bg-gray-200 absolute right-2 top-1/2 -translate-y-1/2 hover:bg-gray-300 transition-all duration-150 ease-linear'>
                            <i aria-hidden={true} className="fa-solid fa-magnifying-glass text-sm"></i>
                        </button>
                    </div>
                    <div className='flex items-center gap-6'>
                        <button onClick={openModal} className='flex items-center justify-center h-[25px] w-[25px] rounded-full border border-gray-800'>
                            <i aria-hidden={true} className="fa-solid fa-user text-xs"></i>
                        </button>
                        <button onClick={() => { setOpenCart(!openCart), setOpenWishlist(false) }} className='relative'>
                            <i aria-hidden={true} className="fa-solid fa-cart-shopping"></i>
                            <span className={`absolute -top-2 -right-3 bg-red-500 text-white text-[10px] w-[15px] h-[15px] rounded-full justify-center items-center ${Object.values(filteredCartItems).length > 0 ? ' flex' : 'hidden'}`}>{Object.values(filteredCartItems).length}</span>
                        </button>
                        <button onClick={() => { setOpenWishlist(!openWishlist), setOpenCart(false) }} className='relative'>
                            <i aria-hidden={true} className="fa-solid fa-heart"></i>
                            <span className={`absolute -top-2 -right-3 bg-red-500 text-white text-[10px] w-[15px] h-[15px] rounded-full justify-center items-center ${Object.values(filteredWishlistItems).length > 0 ? ' flex' : 'hidden'}`}>{Object.values(filteredWishlistItems).length}</span>
                        </button>
                    </div>
                </div>
            </header>
            <nav className='bg-brandColor text-white relative z-10'>
                <div className="container flex items-center justify-between">
                    <div
                        onClick={() => { handleCategoryHover('Products', categoryMenus['Products'] ? false : true) }}
                        onMouseEnter={() => { if (window.innerWidth > 1024) { handleCategoryHover('Products', true) } }}
                        onMouseLeave={() => { if (window.innerWidth > 1024) { handleCategoryHover('Products', false) } }}
                        className={` relative cursor-pointer py-3 w-40`}>
                        <span className='w-full bg-white text-black py-1 px-2 flex items-center justify-between rounded'>
                            Products
                            <i aria-hidden={true} className={`fa-solid fa-angle-down text-sm ${categoryMenus['Products'] ? 'rotate-180' : ''} transition-all duration-200 ease-linear`}></i>
                        </span>
                        {Object.values(groupedData).length > 0 && (
                            <div className={`lg:bg-gray-100 lg:text-black text-gray-400 ${categoryMenus['Products'] ? 'block' : 'hidden'} lg:absolute lg:top-[56px] lg:left-0 lg:border lg:mt-0 mt-2 h-96`}>
                                <div className="flex flex-col lg:w-60 w-full h-full overflow-y-auto">
                                    {Object.values(groupedData).map((categoryItem, categoryIndex) => (
                                        <div
                                            key={categoryIndex}
                                            className="p-2 lg:border-b lg:hover:bg-white w-full flex items-center justify-between text-sm"
                                            onMouseEnter={() => { if (window.innerWidth > 1024) { handleCategoryHover(categoryItem.category, true) } }}
                                            onMouseLeave={() => { if (window.innerWidth > 1024) { handleCategoryHover(categoryItem.category, false) } }}
                                            onClick={() => { if (window.innerWidth > 1024) { setCategoryMenus({}) }; router.push(`/category/${categoryItem.category}`); handleCategoryHover(categoryItem.category, categoryMenus[categoryItem.category] ? false : true) }}
                                        >
                                            {categoryItem.category}
                                            <i aria-hidden={true} className="fa-solid fa-angle-right text-sm text-gray-500 pr-[14px]"></i>
                                            {Object.values(categoryItem.subcategories).length > 0 && (
                                                <div className={`lg:bg-white bg-black lg:text-black text-gray-500 ${categoryMenus[categoryItem.category] ? 'block' : 'hidden'} lg:absolute lg:-top-[1px] lg:left-[220px] lg:border lg:mt-0 mt-2 h-96`}>
                                                    <div className="flex flex-col lg:w-60 w-full h-full overflow-y-auto">
                                                        {Object.values(categoryItem.subcategories).map((subCategoryItem, subCategoryIndex) => (
                                                            <div key={subCategoryIndex} className="p-2 lg:border-b lg:hover:bg-gray-100 text-sm w-full flex items-center justify-between"
                                                                onMouseEnter={() => { if (window.innerWidth > 1024) { handleSubcategoryHover(subCategoryItem.subCategory, true) } }}
                                                                onMouseLeave={() => { if (window.innerWidth > 1024) { handleSubcategoryHover(subCategoryItem.subCategory, false) } }}
                                                                onClick={() => { router.push(`/category/${categoryItem.category}/${subCategoryItem.subCategory}`); handleSubcategoryHover(subCategoryItem.subCategory, subcategoryMenus[subCategoryItem.subCategory] ? false : true) }}
                                                            >
                                                                {subCategoryItem.subCategory}
                                                                <i aria-hidden={true} className="fa-solid fa-angle-right text-sm text-gray-500 pr-[14px]"></i>
                                                                {subCategoryItem.products.length > 0 && (
                                                                    <div className={`lg:bg-white lg:text-black text-gray-400 ${subcategoryMenus[subCategoryItem.subCategory] ? 'block' : 'hidden'} lg:absolute lg:-top-[1px] lg:left-[220px] lg:border lg:mt-0 mt-2 h-96`}>
                                                                        <div className="flex flex-col lg:w-60 w-full h-full overflow-y-auto">
                                                                            {subCategoryItem.products.map((productItem, productIndex) => {
                                                                                return (<div onClick={() => { setCategoryMenus({}); setSubcategoryMenus({}); router.push(`/category/${categoryItem.category}/${subCategoryItem.subCategory}/${productItem.product}`) }} key={productIndex} className="p-2 lg:border-b inline-block w-full relative text-sm">
                                                                                    {productItem.product}
                                                                                </div>
                                                                                )
                                                                            })}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        <button className='flex items-center gap-2 text-lg font-medium'><i aria-hidden={true} className="fa-solid fa-truck-fast text-base"></i>Track your order</button>
                    </div>
                </div>
            </nav>
            <Modal isOpen={isOpen} onRequestClose={closeModal} className='h-full w-full flex justify-center items-center'>
                <Login closeModal={closeModal} />
            </Modal>
            {openCart && <DisplayCart />}
            {openWishlist && <Wishlist />}
        </>
    )
}

export default Header;
import ProductData from '@/data/ProductData';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Header = () => {
    const router = useRouter()
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
    return (
        <>
            <header className={`sticky top-0 z-40 bg-white ${scrolled ? 'shadow-[0_0_10px_2px_rgba(0,0,0,0.2)]' : ''}`}>
                <div className="container flex justify-between items-center py-2">
                    <Link href="/">
                        <Image src="/images/logo.png" width={200} height={100} alt='logo' priority={true} className='w-[150px]' />
                    </Link>
                    <div className='w-1/3 relative'>
                        <input type="text" placeholder='search product here...' className='border border-gray-400 p-2 rounded-lg w-full focus:outline-none' />
                        <i aria-hidden={true} className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 -translate-y-1/2"></i>
                    </div>
                    <div className='flex items-center gap-6'>
                        <button className='flex items-center justify-center h-[25px] w-[25px] rounded-full border border-gray-800'>
                            <i aria-hidden={true} className="fa-solid fa-user text-xs"></i>
                        </button>
                        <button>
                            <i aria-hidden={true} className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button>
                            <i aria-hidden={true} className="fa-solid fa-heart"></i>
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
                        <ul className='flex items-center gap-4'>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/aboutus">About</Link></li>
                            <li><Link href="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <button className='flex items-center gap-2 text-lg font-medium'><i aria-hidden={true} className="fa-solid fa-truck-fast text-base"></i>Track your order</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;

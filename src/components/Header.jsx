import ProductData from '@/data/ProductData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = () => {
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
                        <Image src="/images/logo.png" width={200} height={100} alt='logo' className='w-[150px]' />
                    </Link>
                    <div className='w-1/3 relative'>
                        <input type="text" placeholder='search product here...' className='border p-2 rounded-md w-full' />
                        <i className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 -translate-y-1/2"></i>
                    </div>
                    <div className='flex items-center gap-6'>
                        <button className='flex items-center justify-center h-[25px] w-[25px] rounded-full border border-gray-800'>
                            <i className="fa-solid fa-user text-xs"></i>
                        </button>
                        <button>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button>
                            <i className="fa-solid fa-heart"></i>
                        </button>
                    </div>
                </div>
            </header>
            <div className='bg-brandColor text-white py-3 relative z-10'>
                <div className="container flex items-center justify-between">
                    <div
                        onMouseEnter={() => { if (window.innerWidth > 1024) { handleCategoryHover('Products', true) } }}
                        onMouseLeave={() => { if (window.innerWidth > 1024) { handleCategoryHover('Products', false) } }}
                        className="relative bg-white text-black py-1 px-2 rounded">
                        <button onClick={() => { handleCategoryHover('Products', categoryMenus['Products'] ? false : true) }} className='w-full h-full flex justify-between items-center relative gap-6'>Product Category<i className={`fa-solid fa-chevron-down text-xs ${categoryMenus['Products'] ? 'rotate-180' : ''} transition-all duration-200 ease-linear`}></i></button>
                        <div className={`lg:bg-white lg:text-black text-gray-400 ${categoryMenus['Products'] ? 'block' : 'hidden'} lg:absolute lg:top-[35px] lg:left-0 lg:border lg:mt-0 mt-2`}>
                            <div className="flex flex-col lg:w-[200px] w-full h-full">
                                {Object.values(groupedData).map((categoryItem, categoryIndex) => (
                                    <div key={categoryIndex}>
                                        <Link
                                            href="#"
                                            className="p-2 lg:border-b lg:hover:text-color1 inline-block w-full relative"
                                            // to={`/ProductCat/${categoryItem.category}`}
                                            onMouseEnter={() => { if (window.innerWidth > 1024) { handleCategoryHover(categoryItem.category, true) } }}
                                            onMouseLeave={() => { if (window.innerWidth > 1024) { handleCategoryHover(categoryItem.category, false) } }}
                                            onClick={() => { if (window.innerWidth > 1024) { setCategoryMenus({}) } }}
                                        >
                                            <button
                                                onClick={() => handleCategoryHover(categoryItem.category, categoryMenus[categoryItem.category] ? false : true)}
                                                className='relative w-full flex justify-between items-center'>
                                                {categoryItem.category}
                                                <i className='fa-solid fa-chevron-right text-xs'></i>
                                            </button>
                                            {Object.values(categoryItem.subcategories).length > 0 && (
                                                <div className={`lg:bg-white bg-black lg:text-black text-gray-500 ${categoryMenus[categoryItem.category] ? 'block' : 'hidden'} lg:absolute lg:top-[10px] lg:left-[200px] lg:border lg:mt-0 mt-2`}>
                                                    <div className="flex flex-col lg:w-[160px] w-full h-full">
                                                        {Object.values(categoryItem.subcategories).map((subCategoryItem, subCategoryIndex) => (
                                                            <Link key={subCategoryIndex}
                                                                href="#"
                                                                className="p-2 lg:border-b lg:hover:text-color1 inline-block w-full relative"
                                                                // to={`/ProductCat/${categoryItem.category}/${subCategoryItem.subCategory}`}
                                                                onMouseEnter={() => { if (window.innerWidth > 1024) { handleSubcategoryHover(subCategoryItem.subCategory, true) } }}
                                                                onMouseLeave={() => { if (window.innerWidth > 1024) { handleSubcategoryHover(subCategoryItem.subCategory, false) } }}
                                                            >
                                                                <button
                                                                    onClick={() => handleSubcategoryHover(subCategoryItem.subCategory, subcategoryMenus[subCategoryItem.subCategory] ? false : true)}
                                                                    className='relative w-full flex justify-between items-center'>
                                                                    {subCategoryItem.subCategory}
                                                                    <i className={`fa-solid fa-arrow-down lg:before:hidden text-xs ${subcategoryMenus[subCategoryItem.subCategory] ? 'rotate-180' : ''} transition-all duration-200 ease-linear`}></i>
                                                                </button>
                                                                {subCategoryItem.products.length > 0 && (
                                                                    <div className={`lg:bg-white lg:text-black text-gray-400 ${subcategoryMenus[subCategoryItem.subCategory] ? 'block' : 'hidden'} lg:absolute lg:top-[10px] lg:left-[160px] lg:border lg:mt-0 mt-2`}>
                                                                        <div className="flex flex-col lg:w-[160px] w-full h-full">
                                                                            {subCategoryItem.products.map((productItem, productIndex) => (
                                                                                <Link
                                                                                    href="#"
                                                                                    onClick={() => { setCategoryMenus({}); setSubcategoryMenus({}) }} key={productIndex}
                                                                                    className="p-2 lg:border-b lg:hover:text-color1 inline-block w-full relative lg:text-base text-sm"
                                                                                // to={`/ProductCat/${categoryItem.category}/${subCategoryItem.subCategory}/${productItem.product}`}
                                                                                >
                                                                                    {productItem.product}
                                                                                </Link>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <nav>
                        <ul className='flex items-center gap-4'>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/aboutus">About</Link></li>
                            <li><Link href="/contactus">Contact Us</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header;

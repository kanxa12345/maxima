import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <header className='py-4'>
            <div className="container flex justify-between items-center">
                <a href="#">
                    <Image src="/images/logo.png" width={200} height={100} alt='logo' className='w-[150px]' />
                </a>
                <div className='w-1/3 relative'>
                    <input type="text" placeholder='search product here...' className='border p-2 rounded-md w-full' />
                    <i className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 -translate-y-1/2"></i>
                </div>
                <div>
                    <span>
                        <p>login</p>
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header;

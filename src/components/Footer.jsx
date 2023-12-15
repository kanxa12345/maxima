import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="grid grid-cols-4 gap-5">
                    <div>
                        <Image src="/images/logo.png" height={200} width={200} alt='logo' className='w-40' />
                    </div>
                    <div className='flex flex-col items-start gap-2'>
                        <h3 className='text-2xl font-semibold'>Company</h3>
                        <div></div>
                    </div>
                    <div>
                        <h3>Contact Us</h3>
                    </div>
                    <div></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

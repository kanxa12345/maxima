import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='bg-gray-200'>
                <div className="container py-5">
                    <div className="grid grid-cols-4 gap-5">
                        <div>
                            <Image src="/images/logo.png" height={200} width={200} alt='logo' className='w-40' />
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <h3 className='text-xl font-medium'>Company</h3>
                            <div></div>
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <h3 className='text-xl font-medium'>Contact Us</h3>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className='bg-secondColor text-white py-2'>
                <div className='container'>
                    <p className='text-sm'>Copyright &copy; Maxima Pvt. Ltd. All right reserved. Powered by <a href="https://radiantnepal.com/" className='underline font-medium'>Radiant Infotech</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

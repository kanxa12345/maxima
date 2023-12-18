import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className='py-10 bg-gray-200'>
            <div className='bg-gray-200'>
                <div className="container py-5">
                    <div className="grid grid-cols-5 gap-5">
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
                        <div className='flex flex-col items-start gap-2'>
                            <h3 className='text-xl font-medium'>Help</h3>
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <h3 className='text-xl font-medium'>Subscribe</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container pt-3 border-t border-gray-400'>
                <p className='text-sm text-center'>Copyright &copy; Maxima Pvt. Ltd. All right reserved. Powered by <a href="https://radiantnepal.com/" className='underline font-medium'>Radiant Infotech</a></p>
            </div>
        </footer>
    )
}

export default Footer

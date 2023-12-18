import Image from 'next/image'
import React, { useState } from 'react'

const index = () => {
    const initialForm = {
        name: '',
        mobile: '',
        email: '',
        subject: '',
        message: '',
    }
    const [form, setForm] = useState(initialForm)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted successfully!')
        console.log(form)
        setForm(initialForm)
    }
    return (
        <>
            <section className='h-[150px] relative'>
                <Image height={200} width={200} className='absolute w-full h-full indent-0 object-cover' src="/images/banner-image/img1.avif" alt="bg-image" />
                <div className='absolute w-full h-full inset-0 bg-black opacity-70'></div>
                <div className="container flex justify-center items-center h-full relative text-white">
                    <h1 className='text-xl font-medium text-gray-200'>Contact Us</h1>
                </div>
            </section>
            <section className='py-20'>
                <div className="container text-2xl font-medium flex flex-col items-center gap-4">
                    <h2 className='text-2xl font-medium'>Get In Touch</h2>
                    <div className='w-[80%] flex items-start gap-10'>
                        <div className='flex flex-col items-start gap-4 px-5 py-6 shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] rounded-md w-1/2'>
                            <h3 className='text-xl font-medium'>Send Feedback</h3>
                            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2 w-full sm:text-base text-sm'>
                                <div className='flex sm:flex-row flex-col sm:gap-5 gap-2 w-full'>
                                    <div className='flex flex-col items-start sm:w-1/2 w-full'>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id='name' name='name' required value={form.name} onChange={handleInputChange} className='border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none' />
                                    </div>
                                    <div className='flex flex-col items-start sm:w-1/2 w-full'>
                                        <label htmlFor="mobile">Phone</label>
                                        <input type="tel" id='mobile' name='mobile' required value={form.mobile} onChange={handleInputChange} className='border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none' />
                                    </div>
                                </div>
                                <div className='flex sm:flex-row flex-col sm:gap-5 gap-2 w-full'>
                                    <div className='flex flex-col items-start sm:w-1/2 w-full'>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id='email' name='email' required value={form.email} onChange={handleInputChange} className='border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none' />
                                    </div>
                                    <div className='flex flex-col items-start sm:w-1/2 w-full'>
                                        <label htmlFor="subject">Subject</label>
                                        <input type="text" id='subject' name='subject' value={form.subject} onChange={handleInputChange} className='border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none' />
                                    </div>
                                </div>
                                <div className='flex flex-col items-start w-full'>
                                    <label htmlFor="message">Message</label>
                                    <textarea type="text" id='message' name='message' rows="5" value={form.message} onChange={handleInputChange} className='border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none' />
                                </div>
                                <input type="submit" value="SUBMIT" className='font-medium text-white bg-black px-3 py-2 rounded cursor-pointer' />
                            </form>
                        </div>
                        <div className='w-1/2 relative h-auto'>
                            <iframe className='w-full h-[430px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.0127797679693!2d85.34188247607288!3d27.747751823707112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194df9aa4eff%3A0xaf4b9c99b44bebb5!2sCaldron%20Graphics%20Nepal%2C%20Apex%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1702878534547!5m2!1sen!2snp" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            <div className='absolute bg-white border border-gray-300 w-2/3 bottom-2 right-2 p-4 flex flex-col items-start gap-3'>
                                <div>
                                    <h4 className='text-lg font-medium'>Location</h4>
                                    <p className='text-sm font-regular text-gray-500'>Hikvision-Nepal Tower, Bu.Na.Pa-02, Kathmandu</p>
                                </div>
                                <div>
                                    <h4 className='text-lg font-medium'>Contact</h4>
                                    <p className='text-sm font-regular text-gray-500'>+977-1-4372908, +977-1-5329988</p>
                                </div>
                                <div>
                                    <h4 className='text-lg font-medium'>Email</h4>
                                    <p className='text-sm font-regular text-gray-500'>maxima.multinationaltrading@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index;

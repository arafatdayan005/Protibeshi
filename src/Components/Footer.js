import React from 'react'
import icon from './../Images/social.png'
import logo from './../Images/logo.png'

function Footer() {
    return (
        <div className='bg-[#00B8A8] bg-opacity-20 dark:bg-[#1d2b22] py-12'>
            <div className='w-full flex justify-center'>
                <div className='max-w-[90%]'>
                    <div className='grid grid-cols-1 lg:grid-cols-6 gap-8'>
                        <div className='col-span-2 text-black dark:text-white '>
                            <div className="flex items-end">
                                <img src={logo} className="h-20" alt="" />
                                <h1 className="logo -mb-3 -ms-6 align-middle whitespace-nowrap text-[#00B8A8]">rotybeshi</h1>
                            </div>
                            <p className='my-4'>Help each other, share the love and make the society more engaging, more stronger.</p>
                            <img src={icon} className='mt-4' alt="" />
                        </div>
                        <div className='col-span-1 text-black dark:text-white '>
                            <h3 className='mb-6 font-medium text-xl'>About Us</h3>
                            <p>Items</p>
                            <p>Work</p>
                            <p>Latest News</p>
                            <p>Career</p>
                        </div>
                        <div className='col-span-1 text-black dark:text-white '>
                            <h3 className='mb-6 font-medium text-xl'>Product</h3>
                            <p>Prototype</p>
                            <p>Plan & Pricing</p>
                            <p>Customer</p>
                            <p>Integration</p>
                        </div>
                        <div className='col-span-1 text-black dark:text-white '>
                            <h3 className='mb-6 font-medium text-xl'>Support</h3>
                            <p>Help Desk</p>
                            <p>Sales</p>
                            <p>Become a Partner</p>
                            <p>Developers</p>
                        </div>
                        <div className='col-span-1 text-black dark:text-white '>
                            <h3 className='mb-6 font-medium text-xl'>Contact</h3>
                            <p>524 Gulshan, Bangladesh</p>
                            <p>+880 11111111</p>
                        </div>
                    </div>
                    <hr className='border-t border-gray-950 dark:border-gray-100  border-opacity-40 my-8'></hr>
                    <div className='flex justify-between text-gray-500'>
                        <p>@2023 Protybeshi. All Rights Reserved</p>
                        <p>Powered by Protybeshi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
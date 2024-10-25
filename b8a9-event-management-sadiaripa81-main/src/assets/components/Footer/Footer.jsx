import React from 'react';

const Footer = () => {
    return (
        <div className='bg-red-950 lg:h-[400px] py-12 text-white'>
            <div className='w-8/12 mx-auto gap-3 flex flex-wrap justify-between'>
                <div>
                    <h2 className='font-bold text-xl underline'>Coverage District</h2>
                    <p>Dhaka</p>
                    <p>Chittagong</p>
                    <p>Sylhet</p>
                    <p>Cox’s Bazar</p>
                    <p>Cumilla</p>
                    <p>Khulna</p>
                    <p>Barisal</p>
                    <p>Rangpur</p>
                </div>
                <div className='font-bold underline'>
                    <p>Help</p>
                    <p>Career</p>
                    <p>Features</p>
                    <p>Privecy policy</p>
                </div>
                <div>
                    <h2 className='font-bold text-xl underline'>CONTACT INFO</h2>
                    <p>Dhaka Office:Level -7 Green Road, Dhanmondi, Dhaka, Bangladesh</p>
                    <p>Mobile: +880 18133454700</p>
                    <p>dreamevents@gmail.com</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <div className='flex gap-8 mt-5 lg:my-0'>
                    <img className='w-10 h-10' src="https://i.ibb.co/0qTkHQn/facebook-1.png" alt="logo" />
                    <img className='w-10 h-10' src="https://i.ibb.co/P1FCbFK/instagram-1.png" alt="logo" />
                    <img className='w-10 h-10' src="https://i.ibb.co/jvPFF3n/twitter-1.png" alt="logo" />
                </div>
                <p className='text-center p-3'>Copyright © 2023 Dream Events Bangladesh Ltd, All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
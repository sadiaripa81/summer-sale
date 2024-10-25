import React from 'react';

const OurEventItem = () => {
    return (
        <div className='w-9/12 mx-auto mb-16'>
            <h2 className='my-4  lg:my-16 text-center text-xl lg:text-3xl font-bold underline text-red-900'>OUR POPULAR EVENT ITEMS</h2>

            <div className='grid lg:grid-cols-4 gap-8 text-xl font-semibold text-red-800  hover:text-red-900 underline'>

                <div className='flex flex-col h-56 overflow-hidden rounded-lg bg-red-50 shadow-lg'>
                    <div className='h-4/5 overflow-hidden'>
                        <img className='w-full object-cover' src="https://i.ibb.co/GM5BnLt/ss20220601-32462-a8gm17.jpg" alt="photo" />
                    </div>
                    <h2 className='my-2 text-center'>GHORAGAARE</h2>
                </div>

                <div className='flex flex-col h-56 overflow-hidden rounded-lg bg-red-50  shadow-lg'>
                    <div className='h-4/5 overflow-hidden'>
                        <img className='w-full' src="https://i.ibb.co/W0TftN4/IMG-0341.webp" alt="photo" />
                    </div>
                    <h2 className='my-2 text-center'>PALKI</h2>
                </div>

                <div className='flex flex-col h-56 overflow-hidden rounded-lg bg-red-50  shadow-lg'>
                    <div className='h-4/5 overflow-hidden'>
                        <img className='w-full' src="https://i.ibb.co/LPvR95F/sound-system-rental-compnay-dhaka.png" alt="photo" />
                    </div>
                    <h2 className='my-2 text-center'>SOUND SYSTEM</h2>
                </div>

                <div className='flex flex-col h-56 overflow-hidden rounded-lg bg-red-50  shadow-lg'>
                    <div className='h-4/5 overflow-hidden'>
                        <img className='w-full' src="https://i.ibb.co/zGjRnPc/Photo-and-Videography-scaled.jpg" alt="photo" />
                    </div>
                    <h2 className='my-2 text-center'>PHOTOGRAPHY SERVICE</h2>
                </div>

                <div className='flex flex-col h-56 overflow-hidden rounded-lg bg-red-50  shadow-lg'>
                    <div className='h-4/5 overflow-hidden'>
                        <img className='w-full' src="https://i.ibb.co/qRQQN5G/led-screen-rental-dubai.jpg" alt="photo" />
                    </div>
                    <h2 className='my-2 text-center'>LED SCREEN</h2>
                </div>

                <div className='flex flex-col h-56 overflow-hidden rounded-lg bg-red-50  shadow-lg'>
                    <div className='h-4/5 overflow-hidden'>
                        <img className='w-full' src="https://i.ibb.co/LJyFPnS/download-1.jpg" alt="photo" />
                    </div>
                    <h2 className='my-2 text-center'>JUMPING CASTLE</h2>
                </div>

                <div className='flex flex-col h-56 overflow-hidden rounded-lg bg-red-50  shadow-lg'>
                    <div className='h-4/5 overflow-hidden'>
                        <img className='w-full' src="https://i.ibb.co/7jQhHVJ/shutterstock-2752712181.jpg" alt="photo" />
                    </div>
                    <h2 className='my-2 text-center'>BAND PARTY</h2>
                </div>

                <div className='flex flex-col h-56 overflow-hidden rounded-lg bg-red-50  shadow-lg'>
                    <div className='h-4/5 overflow-hidden'>
                        <img className='w-full' src="https://i.ibb.co/k8snNj7/images.jpg" alt="photo" />
                    </div>
                    <h2 className='my-2 text-center'>PROJEECTOR</h2>
                </div>
            </div>
        </div>
    );
};

export default OurEventItem;
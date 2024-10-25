import React from 'react';

const WhyUsSection = () => {
    return (
        <div className='w-9/12 mx-auto lg:h-96  mb-12 bg-red-50 rounded-lg shadow-lg flex flex-col text-lg text-justify'>
            <div className='text-center lg:text-3xl py-8'>
                <h1 className='text-red-900 font-bold'>WHY CHOOSE US FOR YOUR EVENT?</h1>
                <p>Event that you will Remember</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-5 overflow-hidden'>

                <div className='w-4/5 lg:w-2/5 mx-auto p-5 shadow-lg'>
                    <h2 className='text-base lg:text-xl font-bold text-justify pb-5'>EXPERIENCED EVENT PLANNER AND MANAGER</h2>
                    <p>When it's about making your Event successful, it's all about making a good plan, managing and executing successfully. And, we have experienced who will make your event unique and memorable!</p>
                </div>

                <div className='w-4/5 lg:w-2/5 mx-auto p-5 mb-12 lg:mb-0 shadow-lg'>
                    <h2 className='text-xl font-bold pb-5'>ALL KIND OF LOGISTICS AND RESOURCES SUPPORT</h2>
                    <p>As an experienced Event Management company, we have all kind of Event equipment, logistics and resources available.</p>
                </div>

            </div>
        </div>
    );
};

export default WhyUsSection;
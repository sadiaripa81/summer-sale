import React from 'react';
import ServicesCard from './ServicesCard';

const Services = ({services}) => {
    
    return (
        <div className='w-9/12 mx-auto'>
            <h1 className='mt-8 lg:mt-16 text-center text-3xl font-bold underline text-red-900'>OUR ALL SERVICES</h1>
            
            <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    services?.map(Service=><ServicesCard key={Service.id} service={Service}></ServicesCard>)
                }
                
            </div>
        </div>
    );
};

export default Services;
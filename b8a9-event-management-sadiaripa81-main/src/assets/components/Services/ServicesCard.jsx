import React from 'react';
import { Link } from 'react-router-dom';
const ServicesCard = (services) => {
    
    const { id, image, tittle, description, price } = services.service || {}

    return (
        <div className="hero h-96 rounded-lg overflow-hidden shadow-lg" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-white font bold flex flex-col items-center">

                <h2 className='text-2xl'>{tittle}</h2>
                <h3 className='text-xl text-center my-0'>{description}</h3>
                <p className='text-xl'>Price : {price}</p>

                <Link to={`/services/${id}`}>
                    <button className="w-36 h-12 rounded-md bg-red-900  hover:bg-red-950 text-white text-xl">See details</button>
                </Link>

            </div>
        </div>
    );
};

export default ServicesCard;
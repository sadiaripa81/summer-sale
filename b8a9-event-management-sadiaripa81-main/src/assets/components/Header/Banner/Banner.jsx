import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />;
<script src="bower_components/aos/dist/aos.js"></script>
const Banner = () => {

    return (
        <div className='h-[60vh] lg:h-[80vh] flex'>
            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/4R3JLfH/pexels-atul-maurya-1042152.jpg)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-white tracking-widest">
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold">DREAM EVENTS...</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
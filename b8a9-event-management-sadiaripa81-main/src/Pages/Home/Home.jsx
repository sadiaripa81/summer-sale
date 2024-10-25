import React from 'react';
import Banner from '../../assets/components/Header/Banner/Banner';
import Services from '../../assets/components/Services/Services';
import { useLoaderData } from 'react-router-dom';
import Footer from '../../assets/components/Footer/Footer';
import WhyUsSection from '../../assets/components/WhyUsSection/WhyUsSection';
import OurEventItem from '../../assets/components/OurEventItem/OurEventItem';

const Home = () => {

    const services = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Services services ={services}></Services>
            <OurEventItem></OurEventItem>
            <WhyUsSection></WhyUsSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ServiceDetailsCard from './ServiceDetailsCard';


const ServiceDetails = () => {
    const [service, setService] = useState({})
    const { id } = useParams()
    const services = useLoaderData()

    useEffect(() => {
        const findService = services.find((service) => service.id == id);
        setService(findService);
    }, [id, service]);
    return (
        <div>
            <ServiceDetailsCard service={service} test={'test txt'}></ServiceDetailsCard>
        </div>

    );
};

export default ServiceDetails;
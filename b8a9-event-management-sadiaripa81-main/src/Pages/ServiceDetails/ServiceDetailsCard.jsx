import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ServiceDetailsCard = ({ service }) => {

    const { image, tittle, description, price, details } = service || {}

    const handleAddToCartBtn = () => {

        const AddedToCartItemsArray = [];

        const AddedToCartItems = JSON.parse(localStorage.getItem("added"));

        if (!AddedToCartItems) {
            AddedToCartItemsArray.push(service);
            localStorage.setItem("added", JSON.stringify(AddedToCartItemsArray))
        } else {
            const ifExist = AddedToCartItems.find(item => item.id == service.id)
            if (ifExist) {
                toast.error('Already exist')
                return
            }
            AddedToCartItemsArray.push(service, ...AddedToCartItems);
            localStorage.setItem("added", JSON.stringify(AddedToCartItemsArray))
            toast.success("Successfully added !")
        }
    }

    return (
        <div className='mx-auto my-12 w-4/5 lg:w-3/5 p-8 flex flex-col gap-8 bg-blue-10 justify-center items-center rounded-lg bg-red-50'>

            <div className='lg:w-2/4 overflow-hidden rounded-lg'>
                <img className='object-cover w-full' src={image} alt="photo" />
            </div>

            <div className='lg:w-2/4 flex flex-col text- text-xl'>
                <h1 className='text-2xl font-bold text-red-900 underline mb-3'>{tittle}</h1>
                <p>{description}</p>
                <p>{details}</p>
                <p className='text-xl font-semibold py-3'>Price : {price}</p>

            </div>

            <button onClick={handleAddToCartBtn} className='h-12 w-3/4 lg:w-[30%] rounded-lg mx-auto bg-red-900 text-white font-bold text-lg hover:bg-red-950'>Add to cart</button>
        </div>
    );
};

export default ServiceDetailsCard;
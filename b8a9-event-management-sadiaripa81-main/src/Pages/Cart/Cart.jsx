import React from 'react';
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {
    const itemsFromLocalSorage = JSON.parse(localStorage.getItem("added"));
    const [allItems, setAllItems] = useState([])

    useEffect(() => {

        setAllItems(itemsFromLocalSorage)

    }, [])
    return (
        <div className="mx-auto my-12 w-11/12 lg:w-3/5 p-8 rounded-lg bg-red-50">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    !allItems && <div className='text-center col-span-2 text-2xl font-semibold'>No Items Selected</div>
                }
                {
                    allItems && allItems.map(item => {
                        return (
                            <div key={item.id} className="h-auto lg:h-auto w-full flex rounded-lg shadow-lg overflow-hidden">

                                <div className="w-3/5 lg:w-2/5 flex">
                                    <img className="w-full" src={item.image} alt="photo" />
                                </div>
                                <div className="w-3/5 p-3 lg:p-5">
                                    <h2 className="text-xl lg:text-2xl font-bold text-red-900 underline">{item.tittle}</h2>
                                    <p>{item.description}</p>
                                    <p className="lg:text-xl font-bold">{item.price}</p>

                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    );
};

export default Cart;

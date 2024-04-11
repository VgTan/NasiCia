import React, { useState, useEffect } from 'react';
import Navbar from '@/Components/Navbar';

const Cart = ({ menus }) => {
    const [storedItems, setStoredItems] = useState(JSON.parse(localStorage.getItem('selectedItems')) || {});

    const handleQuantityChange = (id, delta) => {
        const newQuantity = storedItems[id] + delta;
        if (newQuantity >= 0) { // Ensure quantity doesn't go below zero
          setStoredItems(prevStoredItems => ({
            ...prevStoredItems,
            [id]: newQuantity
          }));
        }
      };

    useEffect(() => {
        localStorage.setItem('selectedItems', JSON.stringify(storedItems));
    }, [storedItems]);

    return (
        <>
            <Navbar />
            <div className="pt-32 px-28 flex flex-row font-nunito">
                <div className='w-full mr-10'>
                <form action="" className="">
                    {Object.entries(storedItems).map(([id, quantity]) => (
                        quantity !== 0 ? (
                            // <div key={id} className="flex flex-wrap">
                            //     <div className="flex items-center">
                            //         <img className="border-0" src={menus.find(menu => menu.image === id)?.image} alt="Menu Image" />
                            //     </div>
                            //     <div className="flex flex-col ml-5">
                            //         <input className="border-0" type="text" value={menus.find(menu => menu.id == id).name} name="name" disabled />
                            //         <input className="border-0" type="number" value={menus.find(menu => menu.id == id).price * quantity} name="price" disabled />
                            //     </div>
                            //     <div className='flex '>
                            //         <input className="border-0" type="number" value={quantity} name="qty" onChange={(e) => handleQuantityChange(e, id)} />
                            //     </div>
                            // </div>
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                              <li key={id} className="flex py-6">
                                <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 shadow-md">
                                  <img
                                    src={menus.find(menu => menu.image === id)?.image}
                                    alt="Menu Image"
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                    <div className='mb-2 font-bold'>
                                        <div className="flex justify-between text-gray-900">
                                            <h3>
                                                <input className="border-0 text-lg" type="text" value={menus.find(menu => menu.id == id).name} name="name" disabled />
                                            </h3>
                                            <input className="border-0 text-right text-lg" type="text" value={`Rp. ${menus.find(menu => menu.id == id).price * quantity}`} name="price" disabled />
                                        </div>
                                    </div>
                                    <p className='text-sm ml-5 mb-2 font-thin'> Quantity </p>
                                    <div className="ml-4 flex items-center p-0.5 border rounded-md border-slate-300 w-min">
                                        <button className="bg-transparent px-3 py-1" onClick={() => handleQuantityChange(id, -1)}>-</button>
                                        <input className="border-none w-10 bg-transparent text-center px-3 py-1" type="text" value={storedItems[id]} readOnly />
                                        <button className="bg-transparent px-3 py-1" onClick={() => handleQuantityChange(id, 1)}>+</button>
                                    </div>       
                                </div>
                              </li>
                              <div className="border-t-8 border-gray-300 h-6"></div>
                            </ul>
                        ) : null
                    ))}
                    <br />
                </form>
                </div>
                <div className="p-4 w-3/5 shadow-lg">
                    <div className="flex justify-between mb-4">
                        <p className='font-bold text-lg'>The Total Amount: </p>
                    </div>
                    <div className="flex flex-col mt-8 mb-4">
                        <div className="flex justify-between mb-4">
                            <p className="">Total Price:</p>
                            <p className="">$100</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="">Tax:</p>
                            <p className="">$10</p>
                        </div>
                    </div>
                        <div className="border-t border-gray-300 h-6"></div>
                            <div className="flex justify-between mb-10 font-semibold">
                                <p className="">Total Price include Tax:</p>
                                <p className="">$100</p>
                            </div>
                    <div className='drop-shadow-sm'>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-600 w-full">Checkout</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;

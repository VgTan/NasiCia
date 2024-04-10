import React, { useState } from 'react';

export default function Card({ id, name, img, desc, href, quantity, addSelectedItems, minusSelectedItems, price}) {

    const handleAddToSelectedItems = () => {
        addSelectedItems(id);
    };

    const handleRemoveFromSelectedItems = () => {
        minusSelectedItems(id);
    };

    return (
        <div className="z-0">
            <div className="">
                {img}
            </div>
            <div className="w-[150px] h-[200px] flex flex-col justify-between py-3 px-2 hover:bg-yellow-300 hover:scale-105 hover:cursor-pointer transition duration-200  border-black border rounded-lg">
                <a href={href} className="text-center">
                    <p>{name}</p>
                    <p>{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                </a>
                {/* Plus and minus buttons for adjusting quantity */}
                <div className="flex justify-between items-center">
                    <button onClick={handleRemoveFromSelectedItems} disabled={quantity === 0} className="bg-gray-200 text-gray-600 hover:bg-gray-300 rounded-full px-2">-</button>
                    <span>{quantity}</span>
                    <button onClick={handleAddToSelectedItems} className="bg-gray-200 text-gray-600 hover:bg-gray-300 rounded-full px-2">+</button>
                </div>
            </div>
        </div>
    );
}

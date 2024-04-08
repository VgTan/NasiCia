import React from 'react';

export default function Card({ name, img, desc, href }) {
    return (
        <div className="z-0">
            <div className="">
                {img}
            </div>
            <a href={href} className="w-[100px] h-[150px] flex justify-center items-end py-3 hover:bg-yellow-300 hover:scale-105 hover:cursor-pointer transition duration-200  border-black border rounded-lg">
                <p>{name}</p>
            </a>
        </div>
    );
}

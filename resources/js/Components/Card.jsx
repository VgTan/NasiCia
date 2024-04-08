import React from 'react';

export default function Card({ name, img, desc, href }) {
    return (
        <div className="">
            <div className="">
                {img}
            </div>
            <div className="px-16 py-20 hover:bg-yellow-300 border-black border-2">
                {name}
            </div>
        </div>
    );
}

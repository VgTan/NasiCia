import React, { useState, useEffect } from 'react';
import Navbar from '@/Components/Navbar';

const Cart = ({ menus }) => {
    const [storedItems, setStoredItems] = useState(JSON.parse(localStorage.getItem('selectedItems')) || {});

    const handleQuantityChange = (event, id) => {
        const newQuantity = parseInt(event.target.value);
        setStoredItems(prevStoredItems => ({
            ...prevStoredItems,
            [id]: newQuantity
        }));
    };

    useEffect(() => {
        localStorage.setItem('selectedItems', JSON.stringify(storedItems));
    }, [storedItems]);

    return (
        <>
            <Navbar />
            <div className="pt-32 px-16">
                <form action="" className="">
                    {Object.entries(storedItems).map(([id, quantity]) => (
                        quantity !== 0 ? (
                            <div key={id}>
                                <input className="border-0" type="text" value={menus.find(menu => menu.id == id).name} name="name" disabled />
                                <input className="border-0" type="number" value={quantity} name="qty" onChange={(e) => handleQuantityChange(e, id)} />
                                <input className="border-0" type="number" value={menus.find(menu => menu.id == id).price * quantity} name="price" disabled />
                            </div>
                        ) : null
                    ))}
                    <br />
                    <button>Checkout</button>
                </form>
            </div>
        </>
    );
};

export default Cart;

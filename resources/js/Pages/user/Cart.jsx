import Navbar from "@/Components/Navbar";

const Cart = ({ menus }) => {
    const storedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};
    return (
        <>
        <Navbar/>
        <div className="pt-32 px-16">
            <form action="" className="">
            {Object.entries(storedItems).map(([id, quantity]) => (
                quantity !== 0 ? (
                    <>
                    {/* <li key={id}>
                        Name: {menus.find(menu => menu.id == id).name},
                        Quantity: {quantity}, 
                        Price: {menus.find(menu => menu.id == id).price}
                    </li> */}
                    <input className="border-0" type="text" value= {menus.find(menu => menu.id == id).name} name="name" disabled/>
                    <input className="border-0" type="number" value= {quantity} name="qty" disabled/>
                    <input className="border-0" type="number" value= {menus.find(menu => menu.id == id).price * quantity} name="price" disabled/>

                    </>
                ) : null
            ))}
            <br></br>
            <button>Checkout</button>
            </form>
        </div>
        </>
    )
} 
export default Cart;
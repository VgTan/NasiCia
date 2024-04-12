import { useState } from "react";


const History = ({ user, order }) => {
    const [order_id, setOrder_Id] = useState('');
    localStorage.removeItem('selectedItems');
    

    return (
        <div className="">
            {order.map((orderItem) => (
                <form className="">
                    {orderItem.status}
                    <button type="submit">Proceed</button>
                </form>
            ))}
        </div>
    );
}

export default History;

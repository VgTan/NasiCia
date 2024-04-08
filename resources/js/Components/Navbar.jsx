export default function Navbar() {
    return (
        <>
            <div className="fixed z-1 flex justify-between w-full h-20 items-center top-0">
                <div className="flex items-center justify-evenly w-3/5 h-full">
                    <div className="logonama flex gap-1 items-center">
                        <div className="w-20">
                            <img src="/images/logo.png" alt="" />
                        </div>
                    </div>
                    <div className="category">
                        <form action="">
                            <select name="Category" id="">
                                <option value="">Categories</option>
                                <option value="main">Main Dishes</option>
                                <option value="side">Side Dishes</option>
                                <option value="drink">Drinks and Beverage</option>
                            </select>
                        </form>
                    </div>
                    <div className="contact">
                        <a href="">Contact Us</a>
                    </div>
                    <div className="">

                    </div>
                </div>
                <div className="flex items-center text-end px-10">
                    <a className="bg-[#353434] text-white py-4 px-10  rounded-tr-[50px] rounded-br-[20px] rounded-bl-[50px] rounded-tl-[20px]" href="">Your Cart</a>    
                </div>  
            </div>
        </>
    )
}
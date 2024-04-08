import Navbar from "@/Components/Navbar"
import Card from "@/Components/Card"

export default function Home() {
    return (
        <>
            {/* <div className="absolute right-0 overflow-hidden md:px-12">
                <div className="bg-yellow-500 md:p-72 rounded-bl-[100px] md:-skew-x-[11deg] md:translate-x-20 md:scale-x-110
                "></div>
                
            </div> */}
            <div className="absolute"></div>
            {/* <div className="w-screen h-screen bg-gradient-to-br from-orange-200 via-white to-white"> */}
                <Navbar></Navbar>
                <div className="px-10 py-20">
                    <div className="rounded-xl p-10">
                        <div className="w-1/2 grid gap-3">
                            <div className="text-right">
                                <div className="text-6xl">Fresh Food</div>
                                <div className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                                    commodo consequat.
                                </div>
                            </div>
                            <div className="mt-10 flex justify-center">
                                <div>
                                    <div className="flex gap-2">
                                        <span>My Location</span>
                                        <span>New York, Left Side Blue Door</span>
                                    </div>
                                    <div className="">
                                        <form action="">
                                            <input type="text" />
                                            <button type="submit">Search Icon</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*carousel */}
                    </div>
                    <div className="flex justify-evenly">
                        <Card>
                            img = "/images/"
                        </Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}
import Navbar from "@/Components/Navbar"
import CategoryCard from "@/Components/Card/CategoryCard"
import Card from "@/Components/Card/Card"

const Home = ({menus}) => {
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
                            <div className="mt-5 flex justify-center">
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
                            <div className="flex flex-wrap justify-center gap-3 mt-5">
                                <CategoryCard name="Rice Bowl"></CategoryCard>
                                <CategoryCard name="Bento"></CategoryCard>
                                <CategoryCard name="Mentai Rice"></CategoryCard>
                                <CategoryCard name="Nusantara"></CategoryCard>
                                <CategoryCard name="Snack"></CategoryCard>
                            </div>
                        </div>
                        {/*carousel */}
                        <div className="w-1/2">

                        </div>
                    </div>
                    <div className="mt-24 px-16">
                        <div className="text-5xl text-center mb-10">MENU</div>
                        <div className="Rice Bowl">
                            <div className="mb-5 sticky top-0">
                                <div className="text-4xl ">RICE BOWL</div>
                            </div>
                            <div className="text-xl text-start">Chicken Rice Bowl</div>
                            {/*Chicken Rice Bowl*/}
                            <div className="flex flex-wrap gap-5">
                                {menus
                                .filter(menu => menu.category == 'Chicken Rice Bowl')
                                .map(menu => (
                                    <Card key={menu.id} name={menu.name}></Card>
                                ))
                                }
                            </div>

                            {/*Fish Rice Bowl*/}
                            <div className="mb-5 mt-10">
                                <div className="text-xl text-start">Fish Rice Bowl</div>
                            </div>
                            <div className="flex flex-wrap gap-5">
                                {menus
                                .filter(menu => menu.category == 'Fish Rice Bowl')
                                .map(menu => (
                                    <Card key={menu.id} name={menu.name}></Card>
                                ))
                                }
                            </div>

                            {/*Shrimp Rice Bowl*/}
                            <div className="mb-5 mt-10">
                                <div className="text-xl text-start">Shrimp Rice Bowl</div>
                            </div>
                            <div className="flex flex-wrap gap-5">
                                {menus
                                .filter(menu => menu.category == 'Shrimp Rice Bowl')
                                .map(menu => (
                                    <Card key={menu.id} name={menu.name}></Card>
                                ))
                                }
                            </div>
                            {/*Beef Rice Bowl*/}
                            <div className="mb-5 mt-10">
                                <div className="text-xl text-start">Beef Rice Bowl</div>
                            </div>
                            <div className="flex flex-wrap gap-5">
                                {menus
                                .filter(menu => menu.category == 'Beef Rice Bowl')
                                .map(menu => (
                                    <Card key={menu.id} name={menu.name}></Card>
                                ))
                                }
                            </div>
                        </div>

                        {/*Bento*/}
                        <div className="Bento mt-10">
                            <div className="mb-5 sticky top-0">
                                <div className="text-4xl">BENTO</div>
                            </div>
                            <div className="flex flex-wrap gap-5 justify-start">
                                {menus
                                .filter(menu => menu.category == 'Bento')
                                .map(menu => (
                                    <Card key={menu.id} name={menu.name}></Card>
                                ))
                                }
                            </div>
                        </div>

                        {/*MENTAI RICE*/}
                        <div className="MENTAI RICE mt-10">
                            <div className="mb-5 sticky top-0">
                                <div className="text-4xl">MENTAI RICE</div>
                            </div>
                            <div className="flex flex-wrap gap-5 justify-start">
                                {menus
                                .filter(menu => menu.category == 'Mentai Rice')
                                .map(menu => (
                                    <Card key={menu.id} name={menu.name}></Card>
                                ))
                                }
                            </div>
                        </div>

                        {/*NUSANTARA*/}
                        <div className="NUSANTARA mt-10">
                            <div className="mb-5 sticky top-0">
                                <div className="text-4xl">NUSANTARA</div>
                            </div>
                            <div className="flex flex-wrap gap-5 justify-start">
                                {menus
                                .filter(menu => menu.category == 'Nusantara')
                                .map(menu => (
                                    <Card key={menu.id} name={menu.name}></Card>
                                ))
                                }
                            </div>
                        </div>

                        {/*SNACK*/}
                        <div className="SNACK mt-10">
                            <div className="mb-5 sticky top-0">
                                <div className="text-4xl">SNACK</div>
                            </div>
                            <div className="flex flex-wrap gap-5 justify-start">
                                {menus
                                .filter(menu => menu.category == 'Snack')
                                .map(menu => (
                                    <Card key={menu.id} name={menu.name}></Card>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}
export default Home;
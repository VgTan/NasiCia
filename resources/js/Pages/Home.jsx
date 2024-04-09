import Navbar from "@/Components/Navbar";
import CategoryCard from "@/Components/Card/CategoryCard";
import Card from "@/Components/Card/Card";
import { MdOutlineSearch } from "react-icons/md";
import { AiOutlineCompass } from "react-icons/ai";
import { PiArrowArcLeftBold } from "react-icons/pi";

const Home = ({ menus }) => {
    return (
        <>
            {/* <div className="absolute right-0 overflow-hidden md:px-12">
                <div className="bg-yellow-500 md:p-72 rounded-bl-[100px] md:-skew-x-[11deg] md:translate-x-20 md:scale-x-110
                "></div>
                
            </div> */}
            <div className="absolute"></div>
            {/* <div className="w-screen h-screen bg-gradient-to-br from-orange-200 via-white to-white"> */}
            <Navbar></Navbar>
            <div className="px-10 py-20 font-nunito">
                <div className="rounded-xl p-10">
                    <div className="w-1/2 grid gap-3">
                        <div className="text-right">
                            <div className="text-6xl font-bold text-left">Nasi Cia: Where Taste and <span class="text-[#42754C] underline underline-offset-8">Warmth Blend</span></div>
                            <div className="text-md mt-10 text-left text-zinc-600 leading-loose">
                            Kami berkomitmen untuk terus menyajikan hidangan yang berkualitas, menciptakan suasana nyaman. 
                            Nasi cia akan menjadi lebih dari sekedar tempat makan, Namun tetap dimana rasa dan kehangatan bertemu.
                            </div>
                        </div>
                        <div className="mt-5 flex">
                            <div class="w-4/5">
                                <div className="flex gap-2 mb-3 font-semibold">
                                    <span>
                                        <AiOutlineCompass
                                            size="1.5em"
                                            fontWeight="100"
                                        />
                                    </span>
                                    <span>My Location</span>
                                    <span class="text-slate-200">|</span>
                                    <span>New York, <span class="text-[#1BCF92]">Left Side Blue Door</span></span>
                                </div>
                                <div class="bg-white border border-slate-200 items-center justify-between w-fullflex p-2 mb-5 sticky top-5 rounded-tr-[50px] rounded-br-[20px] rounded-bl-[50px] rounded-tl-[20px]">
                                    <form class="flex" action="">
                                        <input
                                            type="text"
                                            class="bg-transparent border-none w-full py-4 pr-10 pl-10 text-black lg:text-lg text-lg leading-tight focus:border-transparent focus:ring-0 focus:shadow-outline placeholder-gray-400"
                                            placeholder="Search..."
                                        />
                                        <button class="bg-[#353434] text-white py-4 px-10 rounded-tr-[50px] rounded-br-[20px] rounded-bl-[50px] rounded-tl-[20px] hover:shadow-inner hover:bg-[#4e4d4d]">
                                            <MdOutlineSearch class="w-10 h-6 text-white" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div class="font-semibold text-[#BDBDBD]">
                                <span>Popular Category</span>
                            </div>
                            <div className="flex flex-start justify-evenly gap-3 mt-4">
                                <CategoryCard
                                    img="/images/cat/bowl.png"
                                    name="Rice Bowl"
                                ></CategoryCard>
                                <CategoryCard
                                    img="/images/cat/drink.png"
                                    name="Drink"
                                ></CategoryCard>
                                <CategoryCard
                                    img="/images/cat/mentai.png"
                                    name="Mentai"
                                ></CategoryCard>
                                <CategoryCard
                                    img="/images/cat/nusan.png"
                                    name="Nusantara"
                                ></CategoryCard>
                                <CategoryCard
                                    img="/images/cat/snack.png"
                                    name="Snack"
                                ></CategoryCard>
                            </div>
                        </div>
                    </div>
                    {/*carousel */}
                    <div className="w-1/2"></div>
                </div>
                <div className="mt-24 px-16">
                    <div className="text-5xl text-center mb-10">MENU</div>
                    <div className="Rice Bowl">
                        <div className="mb-5 sticky top-0">
                            <div className="text-4xl ">RICE BOWL</div>
                        </div>
                        <div className="text-xl text-start">
                            Chicken Rice Bowl
                        </div>
                        {/*Chicken Rice Bowl*/}
                        <div className="flex flex-wrap gap-5">
                            {menus
                                .filter(
                                    (menu) =>
                                        menu.category == "Chicken Rice Bowl"
                                )
                                .map((menu) => (
                                    <Card key={menu.id} name={menu.name}></Card>
                                ))}
                        </div>

                        {/*Fish Rice Bowl*/}
                        <div className="mb-5 mt-10">
                            <div className="text-xl text-start">
                                Fish Rice Bowl
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-5">
                            {menus
                                .filter(
                                    (menu) => menu.category == "Fish Rice Bowl"
                                )
                                .map((menu) => (
                                    <Card key={menu.id} name={menu.name}></Card>
                                ))}
                        </div>

                        {/*Shrimp Rice Bowl*/}
                        <div className="mb-5 mt-10">
                            <div className="text-xl text-start">
                                Shrimp Rice Bowl
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-5">
                            {menus
                                .filter(
                                    (menu) =>
                                        menu.category == "Shrimp Rice Bowl"
                                )
                                .map((menu) => (
                                    <Card key={menu.id} name={menu.name}></Card>
                                ))}
                        </div>
                        {/*Beef Rice Bowl*/}
                        <div className="mb-5 mt-10">
                            <div className="text-xl text-start">
                                Beef Rice Bowl
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-5">
                            {menus
                                .filter(
                                    (menu) => menu.category == "Beef Rice Bowl"
                                )
                                .map((menu) => (
                                    <Card key={menu.id} name={menu.name}></Card>
                                ))}
                        </div>
                    </div>

                    {/*Bento*/}
                    <div className="Bento mt-10">
                        <div className="mb-5 sticky top-0">
                            <div className="text-4xl">BENTO</div>
                        </div>
                        <div className="flex flex-wrap gap-5 justify-start">
                            {menus
                                .filter((menu) => menu.category == "Bento")
                                .map((menu) => (
                                    <Card key={menu.id} name={menu.name}></Card>
                                ))}
                        </div>
                    </div>

                    {/*MENTAI RICE*/}
                    <div className="MENTAI RICE mt-10">
                        <div className="mb-5 sticky top-0">
                            <div className="text-4xl">MENTAI RICE</div>
                        </div>
                        <div className="flex flex-wrap gap-5 justify-start">
                            {menus
                                .filter(
                                    (menu) => menu.category == "Mentai Rice"
                                )
                                .map((menu) => (
                                    <Card key={menu.id} name={menu.name}></Card>
                                ))}
                        </div>
                    </div>

                    {/*NUSANTARA*/}
                    <div className="NUSANTARA mt-10">
                        <div className="mb-5 sticky top-0">
                            <div className="text-4xl">NUSANTARA</div>
                        </div>
                        <div className="flex flex-wrap gap-5 justify-start">
                            {menus
                                .filter((menu) => menu.category == "Nusantara")
                                .map((menu) => (
                                    <Card key={menu.id} name={menu.name}></Card>
                                ))}
                        </div>
                    </div>

                    {/*SNACK*/}
                    <div className="SNACK mt-10">
                        <div className="mb-5 sticky top-0">
                            <div className="text-4xl">SNACK</div>
                        </div>
                        <div className="flex flex-wrap gap-5 justify-start">
                            {menus
                                .filter((menu) => menu.category == "Snack")
                                .map((menu) => (
                                    <Card key={menu.id} name={menu.name}></Card>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};
export default Home;

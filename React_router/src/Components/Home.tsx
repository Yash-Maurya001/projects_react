import image1 from "../assets/im.jpg"
import { AiOutlineArrowRight } from "react-icons/ai";


function Home() {
    return ( 
        <div name = 'home' className="h-screen w-full bg-gradient-to-b from-blue-500 via-blue-800 to-blue-400 ">
            <div className="flex max-w-screen-lg  mx-auto flex-row items-center justify-center h-full p-3">
                <div className="flex flex-col   justify-center   h-full">
                    <div className="">
                    <h2 className="text-6xl font-bold font-Mono text-white p-2  ">Im A sample Website</h2>
                    </div>
                    <div> 
                    <p className="font-Urbanist  text-2xl font-semibold   p-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ex maxime necessitatibus! Ipsa ea veniam vero nemo natus amet, temporibus corrupti placeat veritatis repellendus!</p>
                    </div>
                    <div className="p-3">
                        <button className=" group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-slate-50 cursor-pointer font-semibold">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300"><AiOutlineArrowRight size={20} /></span>
                        </button>
                    </div>
                </div>

                <div className="p-3">
                <img  className="rounded-3xl  mx-auto w-3/3 p-3 shadow-xl ring-black ring-2" src={image1} alt="" />
                </div>
        </div>
        
        </div>
     );
}

export default Home;

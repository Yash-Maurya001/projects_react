import { Link } from "react-router-dom";


function Header() {
    return ( 
        <>
            <div className="w-full p-2 flex justify-between  bg-black shadow-xl ring-blue-500 ring-4">
                <div>
                    <h1 className="text-white p-3 text-xl font-Mono">DEV</h1>
                </div>
                <div>
                    <nav className="list-none flex gap-5 text-xl cursor-pointer font-semibold font-Mono p-[10px] text-white">
                       <Link to={'/'}>Home</Link>
                       <Link to={'/about'}>About</Link>
                        
                        <li>Portfolio</li>
                        <li>Experience</li>
                        <li>Contact</li>
                    </nav>
                </div>
                <div>
                    <h1 className="text-xl font-Mono text-white p-3 font-semibold cursor-pointer">Hire Me</h1>
                </div>
           </div>
        </>
     );
}

export default Header;
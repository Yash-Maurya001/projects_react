import { Outlet } from "react-router-dom";

import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Root() {
    return ( 
        <>
            <Header />
            <Outlet/>
            <Footer />
        </>
     );
}

export default Root;
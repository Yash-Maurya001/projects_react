function About() {
    return ( 
        <>
            <div className="flex flex-row   justify-between mx-auto items-center max-w-screen-lg h-screen   bg-gradient-to-b ">
                <div className="mx-6 my-auto p-4">
                    <h1 className="font-Mono text-4xl text-black font-bold p-2">LET ME INTRODUCE MYSELF</h1>
                    <p className="p-2 text-xl font-Urbanist font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nulla? Ipsum, vero expedita quasi ullam voluptatibus cupiditate harum nemo itaque voluptatum esse veniam enim doloremque vitae, molestias quia excepturi in dolore corporis corrupti illum!</p>
                </div>
                
                    <img className="  p-3 shadow ring-4 rounded m-3 w-4/5"src="https://images.pexels.com/photos/997512/pexels-photo-997512.jpeg " alt="" />
                
            </div>
        </>
     );
}

export default About;
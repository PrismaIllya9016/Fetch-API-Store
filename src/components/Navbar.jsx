import React from "react";


function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary shadow-2xl mb-4">
      <div className="container-fluid">
        <div
          className="navbar-brand flex justify-between w-full items-center"
          href="#"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
            alt="Logo"
            className="w-24 h-20 "
          />
          <span className="text-4xl ml-20 font-serif">Perrata Store</span>
          <div className="">
            <button className="btn btn-primary border-blue-500 px-3 rounded-lg outline-none ">
              Sign in
            </button>
            <button className="btn btn-primary border-blue-500 px-3 ml-2 rounded-lg outline-none">
              Log in
            </button>
          </div>
        </div>
      </div>
      <div className=" justify-between flex gap-2 w-full mx-6">
       <p>Agente</p> 
       <p>Agente</p> 
       <p>Agente</p> 
       <p>Agente</p> 
       <p>Agente</p> 
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { useState, useEffect } from "react";
import { RiUserLine, RiSettings2Line } from "react-icons/ri";

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
          <span className="text-3xl ml-20">Tu tienda en linea</span>
          <div className="">
            <button className="btn btn-primary border-blue-500 px-3 ">
              Sign in
            </button>
            <button className="btn btn-primary border-blue-500 px-3 ml-2">
              Log in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

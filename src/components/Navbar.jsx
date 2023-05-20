import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary shadow-2xl mb-4 ">
      <div className="container-fluid flex">
        <div
          className="navbar-brand flex justify-between w-full items-center"
          href="#"
        >
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
              alt="Logo"
              className="w-24 h-20 "
            />
          </Link>

          <Link to="/">
            <span className="text-5xl ml-20 font-serif text hover:text-slate-900">
              Perrata Store
            </span>
          </Link>
          <div className="">
            <Link
              to="/signup"
              className="btn btn-primary border-blue-500 px-3 rounded-2xl outline-none hover:text-slate-900"
            >
              Sign in
            </Link>

            <Link
              to="/login"
              className="btn btn-primary border-blue-500 px-3 ml-2 rounded-2xl outline-none hover:text-slate-900"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
      <div className=" justify-between flex gap-2 w-full text-white">
        <p>
          <Link
            className="ml-6 text-lg hover:text-slate-900"
            to="/products/category/electronics"
          >
            Electronics
          </Link>
        </p>
        <p>
          <Link
            className="text-lg hover:text-slate-900"
            to="/products/category/jewelery"
          >
            Jewelery
          </Link>
        </p>
        <p>
          <Link
            className="text-lg hover:text-slate-900"
            to="/products/category/mens-clothing"
          >
            Men's clothing
          </Link>
        </p>
        <p>
          <Link
            className="mr-6 hover:text-slate-900"
            to="/products/category/womens-clothing"
          >
            Women's clothing
          </Link>
        </p>
      </div>
    </nav>
  );
}

export default Navbar;

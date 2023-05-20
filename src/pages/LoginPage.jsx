import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <form className="w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-6">Iniciar sesión</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Usuario
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Ingresa tu usuario"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <div className="flex items-center justify-center">
            <Link
              to={`/testpage/contact`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Ingresar
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

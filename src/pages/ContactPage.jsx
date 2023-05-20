import React from "react";

export const ContactPage = () => {
  return (
    <div className="flex flex-col h-screen items-center">
      <p className="text-4xl text-gray-700 mt-80">
        Esta page es solo una prueba, ¡Muchas gracias por visitar la web!
      </p>
      <div className="container mx-auto flex justify-between items-center"></div>

      <a
        href="public\Miguel_Angel Lopez Salas_Resume_24-02-2023-15-25-47-1.pdf"
        download
        className="bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700 mt-10"
      >
        Contact Info
      </a>
    </div>
  );
};

<a
  href="/ruta/hacia/tu/archivo.pdf"
  download
  className="bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700"
>
  Descargar PDF
</a>;

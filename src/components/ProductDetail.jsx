import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";

export const ProductDetail = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  if (!item) {
    return <div>Loading Perrareit...</div>;
  }

  return (
    <div className=" items-center card lg:card-side bg-base-100 shadow-2xl flex justify-center align-middle ">
      <div className="flex items-center justify-center">
        <div className="flex-1">
          <img
            className="object-cover shadow-inner h-80 w-80 ml-30"
            src={item.image}
            alt=""
          />
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title text-4xl mb-6">{item.title}</h2>
        <p className="mb-4 text-gray-600">{item.description}</p>
        <div className="card-actions justify-center flex">
          <Link
            to={`/`}
            className="btn btn-primary mr-9 text-white flex place-items-center"
          >
            <RiArrowLeftLine className="mr-2" /> <h1 className="">Regresar</h1>
          </Link>

          <Link to={`/testpage/contact`} className="btn btn-primary">
            Comprar ahora por ${item.price}
          </Link>
        </div>
      </div>
    </div>
  );
};

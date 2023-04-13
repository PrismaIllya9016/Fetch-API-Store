import React from "react";
import { useState, useEffect } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Cards() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  {
    /*Llamada a la API*/
  }
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const handleDescriptionClick = (index) => {
    console.log(index);
    setSelectedItemIndex(selectedItemIndex === index ? null : index);
  };

  const MAX_CHARACTERS = 100;

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="card shadow-2xl flex justify-between relative flex-col rounded-3xl"
          >
            <img
              src={item.image}
              className="object-cover shadow-inner h-80 flex justify-center w-full "
              alt={item.title}
            />
            <div className="card-body flex flex-col">
              <h5 className="card-title text-2xl mb-4 font-serif h-50">
                {item.title}
              </h5>
              <div>
                <p className="card-text mb-4 font-serif">
                  {selectedItemIndex === index
                    ? item.description
                    : item.description.slice(0, MAX_CHARACTERS) + "..."}
                </p>
                <button
                  className="mb-4 text-gray-400 font-bold flex-grow"
                  onClick={() => handleDescriptionClick(index)}
                >
                  {selectedItemIndex === index ? "View less" : "View more!"}
                </button>
              </div>

              <p className="card-text mb-6 flex-grow text-gray-500">
                {"$" + item.price}
              </p>

              <div className="">
                <div className=" flex justify-center">
                  <Link
                    to={`/product/${item.id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold shadow-lg shadow-indigo-500/40 mb-2 py-2 px-4 rounded-xl w-full flex justify-center items-center"
                  >
                    <h3>Comprar</h3>
                  </Link>
                </div>
                <div>
                  <button
                    href="#"
                    className="bg-gray-300 hover:bg-gray-400 font-bold shadow-lg shadow-indigo-500/40 py-2 px-4 rounded-xl flex items-center w-full justify-center text-blue-500 "
                  >
                    <RiShoppingCartLine className="mr-2" />
                    <h3>Agregar al carrito</h3>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Cards;

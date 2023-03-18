import React from "react";
import { useState, useEffect } from "react";
import { RiShoppingCartLine } from "react-icons/ri";

function Cards() {
  {
    /*Llamada a la API*/
  }

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="card-deck grid grid-cols-4 gap-4  rounded-lg shadow-2xl">
        {items.map((item) => (
          <div key={item.id} className="card shadow-2xl">
            <img
              src={item.image}
              className="card-img-top w-100 h-42 object-cover shadow-inner "
              alt={item.title}
            />
            <div className="card-body">
              <h5 className="card-title text-2xl mb-4">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text mb-6">${item.price}</p>
              <div className=" flex justify-center items-center">
                <button
                  href="#"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold shadow-lg shadow-indigo-500/40 py-2 px-4 rounded flex items-center "
                >
                  <RiShoppingCartLine className="mr-2" />
                  <h3>Comprar</h3>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Cards;

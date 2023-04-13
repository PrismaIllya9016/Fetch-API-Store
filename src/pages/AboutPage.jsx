import React from "react";
import { Link } from "react-router-dom";

export  const AboutPage = () => {
  return (
    <div>
      <h1 className="text-4xl">AboutPage</h1>
      <p>
          <Link to="/">return home</Link>
        </p>
    </div>
  );
};



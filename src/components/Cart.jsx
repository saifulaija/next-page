import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ book }) => {
  const { img, title, image, url, price, subtitle,isbn13 } = book;
  return (
    <Link to={`/book/${isbn13}`} className="overflow-hidden relative transition duration-200 transform hover:-translate-y-3 rounded shadow-lg ">
      <div>
        <img
          src={image}
          alt=""
          className="object-cover w-full h-56 md:64 xl:h-80"
        />
      </div>
      <div className="bg-black  text-gray-300 absolute inset-0 p-5 bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col ">
        <p>{title}</p> <br />
        <p>{subtitle.substring(0,40)}.....</p> <br />
        <p className="mt-auto">Price : {price}</p>
      </div>
    </Link>
  );
};

export default Cart;

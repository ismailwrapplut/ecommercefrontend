import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
        {products?.map((product) => (
          <Link
            to={`/products/${product._id}`}
            key={product.id}
            className="group relative p-5"
          >
            <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
              <img
                src={product.images[0]}
                alt={product.images[0]}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
              <span className="absolute inset-0" />
              {product.name.slice(0, 20)}
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-900">
              ${product.price}.00
            </p>
            <p className="mt-1 text-sm text-gray-500">
              {product.description.slice(0, 30)}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;

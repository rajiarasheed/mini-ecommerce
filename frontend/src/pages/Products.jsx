import React from "react";
import { useProducts } from "../context/ProductsContext";

export const Products = () => {
  const { products, loading } = useProducts();
  if (loading) return <p className="p-7">Loading</p>;
  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl mb-4 font-bold">Products</h1>
      {products.length === 0 && <p>Products Not Found</p>}
      <div class="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div className="rounded p-4 shadow" key={product._id}>
              <img
                className="w-full h-44 object-cover rounded-t-lg"
                src="https://cdn.sanity.io/images/599r6htc/regionalized/5581f8a4ab05fec24400558d4c646d5730d57e25-1000x602.png?q=75&fit=max&auto=format&dpr=2"
                alt=""
              />
              <h3 className="mt-2">{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
          {/* <div className="rounded p-4 shadow">
                <img className='w-full h-44 object-cover rounded-t-lg' src="https://cdn.sanity.io/images/599r6htc/regionalized/5581f8a4ab05fec24400558d4c646d5730d57e25-1000x602.png?q=75&fit=max&auto=format&dpr=2" alt="" />
                <h3 className='mt-2'>Title</h3>
                <p>price</p>
            </div>
            <div className="rounded p-4 shadow">
                <img className='w-full h-44 object-cover rounded-t-lg' src="https://cdn.sanity.io/images/599r6htc/regionalized/5581f8a4ab05fec24400558d4c646d5730d57e25-1000x602.png?q=75&fit=max&auto=format&dpr=2" alt="" />
                <h3 className='mt-2'>Title</h3>
                <p>price</p>
            </div> */}
        </div>
      </div>
    </div>
  );
};

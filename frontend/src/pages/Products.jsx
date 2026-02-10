import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductsContext";

export const Products = ({search,category,sort}) => {
  const { fetchAllProducts, loading } = useProducts();
  const [products,setProducts]=useState([])

  // pagination sorting and filter
  // const [search,setSearch]=useState()
  // const [category,setCategory]=useState()
  // const [sort,setSort]=useState()
  const [page,setPage]=useState(1)
  const [limit, setLimit] = useState(4); 

  // for limiting products on resizing window
  useEffect(() => {
  const updateLimit = () => {
    const width = window.innerWidth;

    let newLimit;
    if (width < 640) newLimit = 1;
    else if (width < 768) newLimit = 2;
    else if (width < 1024) newLimit = 3;
    else newLimit = 4;

    setLimit(newLimit);
    setPage(1); // reset page when layout changes
  };

  updateLimit();
  window.addEventListener("resize", updateLimit);
  return () => window.removeEventListener("resize", updateLimit);
}, []);

  // get product when this filter applies
  const getProducts=async()=>{
    const data=await fetchAllProducts({search,category,sort,page,limit})
    setProducts(data || [])
  }

  // Reset page when filters change
useEffect(() => {
  setPage(1);
}, [search, category, sort]);

// Fetch products
useEffect(() => {
  getProducts();
}, [search, category, sort, page, limit]);


  if (loading) return <p className="p-7">Loading</p>;


  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl mb-4 font-bold">Products</h1>
      {products.length === 0 && <p>Products Not Found</p>}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div className="rounded p-4 shadow" key={product._id}>
              <img
                className="w-full h-44 object-cover rounded-t-lg"
                src={product.image}
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

      {/* Pagination */}
      <div className="flex gap-3 mt-8 justify-center">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
        >
          Prev
        </button>
        <span className="px-4 py-2">{page}</span>
        <button
          disabled={products.length < limit}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

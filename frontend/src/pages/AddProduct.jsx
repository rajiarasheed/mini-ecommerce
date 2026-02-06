import React from "react";

export const AddProduct = () => {
  return (
    <div className="w-full flex items-center justify-center bg-gray-100 p-10">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Add Product
        </h1>
        <form method="post" className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Product name"
            required
            className="w-full shadow px-4 py-2 border rounded focus:outline-0 focus:border-0 focus:ring-2 focus:ring-[#0e83f7]"
          />
          <input
            type="number"
            name="price"
            placeholder="Product price"
            required
            className="w-full shadow px-4 py-2 border rounded focus:outline-0 focus:border-0 focus:ring-2 focus:ring-[#0e83f7]"
          />
          <input
            type="text"
            name="category"
            placeholder="Product category"
            required
            className="w-full shadow px-4 py-2 border rounded focus:outline-0 focus:border-0 focus:ring-2 focus:ring-[#0e83f7]"
          />
          <input
            type="text"
            name="image"
            placeholder="Product image"
            required
            className="w-full shadow px-4 py-2 border rounded focus:outline-0 focus:border-0 focus:ring-2 focus:ring-[#0e83f7]"
          />
          <div className="flex gap-4 mt-3">
            <button className="flex-1 transition duration-300 cursor-pointer text-white font-semibold hover:bg-blue-600 bg-[#0e83f7] px-4 py-3 rounded">
              Add
            </button>
            <button className="flex-1 transition duration-300 cursor-pointer text-gray-600 font-semibold hover:bg-gray-100 border border-[#6a89a7] px-4 py-3 rounded">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

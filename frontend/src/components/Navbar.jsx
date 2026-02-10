import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({search,setSearch,category,setCategory,sort,setSort}) => {
    const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div>
      <nav className="bg-[#384959] text-white px-4 lg:px-6 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">MiniEcommerce</h1>
        <div className="space-x-4 sm:flex sm:flex-row">
          <Link to="/add-product" className="bg-[#0e83f7] px-4 py-3 rounded sm:flex sm:flex-row hidden lg:hidden text-xs">
            AddProducts
          </Link>
          <button className="lg:hidden text-2xl" onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
        </button>
        </div>
        
        </div>
        {/* <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 lg:gap-0"></div> */}
        <div className={`py-7 lg:py-0 lg:flex flex-col lg:flex-row items-start gap-2 lg:gap-4 w-full lg:w-auto ${menuOpen?"flex":"hidden lg:flex"}`}>
          <input
            type="text"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="search here..."
            className="bg-[#6a89a7] px-4 py-2 rounded-full w-60"
          />
          <select 
          value={category} onChange={(e)=>setCategory(e.target.value)} className="px-3 py-2 rounded bg-[#384959]">
            <option value="">Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
          <select value={sort} onChange={(e)=>setSort(e.target.value)} className="px-3 py-2 rounded bg-[#384959]">
            <option value="">Sort By Price</option>
            <option value="price_asc">Price: Low - High</option>
            <option value="price_des">Price: High - Low</option>
          </select>
          <Link to="/add-product" className="bg-[#0e83f7] px-4 py-3 rounded flex flex-row sm:hidden text-xs">
            AddProducts
          </Link>
        </div>
        <div className="space-x-4">
          <Link to="/add-product" className="bg-[#0e83f7] px-4 py-3 rounded hidden lg:flex">
            AddProducts
          </Link>
          </div>
        
      </nav>
    </div>
  );
};

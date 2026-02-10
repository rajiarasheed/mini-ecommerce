import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Products } from "./pages/Products";
import { AddProduct } from "./pages/AddProduct";
import { useState } from "react";

function App() {
   const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
      search={search}
      setSearch={setSearch}
      category={category}
      setCategory={setCategory}
      sort={sort}
      setSort={setSort}
      />
      <main className="flex-1 flex">
        <Routes>
          <Route path="/" element={<Products search={search} category={category} sort={sort}/>}></Route>
          <Route path="/add-product" element={<AddProduct />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

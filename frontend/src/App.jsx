import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Products } from "./pages/Products";
import { AddProduct } from "./pages/AddProduct";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex">
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/add-product" element={<AddProduct />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

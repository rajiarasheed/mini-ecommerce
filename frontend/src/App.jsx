import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import {Products} from "./pages/Products"
import { AddProduct } from "./pages/AddProduct"


function App() {

  return (
    <>
      
  <Navbar />
  <Routes>
    <Route path="/" element={<Products />}></Route>
    <Route path="/add-product" element={<AddProduct />}></Route>
  </Routes>
    </>
  )
}

export default App

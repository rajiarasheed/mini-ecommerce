import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { addProduct, fetchProducts } from "../api/api";

const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllProducts = async (params = {}) => {
    try {
      setLoading(true);
      const response = await fetchProducts(params);
      setProducts(response.data);
    } catch (error) {
      console.error("Error on fetching products", error);
    } finally {
      setLoading(false);
    }
  };
  const createProduct = async (productData) => {
    try {
      await addProduct(productData);
      const response = await fetchProducts();
      setProducts(response.data);
    //   fetchAllProducts();
    } catch (error) {
      console.error("Error on adding Products", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, loading, fetchAllProducts, createProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);

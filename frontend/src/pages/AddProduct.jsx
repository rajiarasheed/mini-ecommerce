import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../api/api";
import { useFormik } from "formik";
import { useProducts } from "../context/ProductsContext";
import { productValidationSchema } from "../validation/productValidation";

export const AddProduct = () => {
  const navigate = useNavigate();
  const { createProduct } = useProducts();
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      image: "",
    },
    validationSchema: productValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await createProduct({
          ...values,
          price: Number(values.price),
        });
        alert("product added successfully");
        resetForm()
        navigate("/");
      } catch (error) {
        console.error(error);
        alert("Failed to add product");
      } finally {
        setSubmitting(false);
      }
    },
  });
  // const [formData,setFormData]=useState({
  //     name:"",
  //     price:"",
  //     category:"",
  //     image:"",
  // })
  // const [loading,setLoading]=useState(false)
  // const handleChange=(e)=>{
  //     setFormData({
  //         ...formData,
  //         [e.target.name]:e.target.value
  //     })
  // }
  // const handleSubmit=async(e)=>{
  //     e.preventDefault()
  //     setLoading(true)

  //     try {
  //         await createProduct({
  //             ...formData,
  //             price:Number(formData.price)
  //         })
  //         alert("product added successfully")
  //         navigate('/')

  //     } catch (error) {
  //         console.error(error);
  //         alert("Failed to add product")
  //     }finally{
  //         setLoading(false)
  //     }
  // }
  return (
    <div className="w-full flex items-center justify-center bg-gray-100 p-10">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Add Product
        </h1>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Product name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className="w-full shadow px-4 py-2 border rounded focus:outline-0 focus:border-0 focus:ring-2 focus:ring-[#0e83f7]"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="number"
              name="price"
              placeholder="Product price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className="w-full shadow px-4 py-2 border rounded focus:outline-0 focus:border-0 focus:ring-2 focus:ring-[#0e83f7]"
            />
            {formik.touched.price && formik.errors.price && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.price}</p>
            )}
          </div>
          <div>
          <select
            name="category"
            placeholder="Product category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className="w-full shadow px-4 py-2 border rounded focus:outline-0 focus:border-0 focus:ring-2 focus:ring-[#0e83f7]"
          >
            <option value="">Select Category...</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
          {formik.touched.category && formik.errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.category}
              </p>
            )}</div>
            <div>
          <input
            type="text"
            name="image"
            placeholder="Product image"
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className="w-full shadow px-4 py-2 border rounded focus:outline-0 focus:border-0 focus:ring-2 focus:ring-[#0e83f7]"
          />
          {formik.touched.image && formik.errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.image}
              </p>
            )}</div>
          <div className="flex gap-4 mt-3">
            <button
              type="submit"
            //   disabled={loading}
              className="flex-1 transition duration-300 cursor-pointer text-white font-semibold hover:bg-blue-600 bg-[#0e83f7] px-4 py-3 rounded"
            >
              {/* {loading ? "Adding..." : "Add"} */}Add
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

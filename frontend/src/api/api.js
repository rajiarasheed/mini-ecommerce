import axios from "axios";

const API=axios.create({
    baseURL:"http://localhost:3000"
})

export const fetchProducts=(params={})=>{
    return API.get('/products',{params})
}

export const fetchProductById=(id)=>{
    return API.get(`/products/${id}`)
}

export const addProduct=(productData)=>{
    return API.post('/products',productData)
}

export const updateProduct=(id,productData)=>{
    return API.put(`/products/${id}`,productData)
}
export const deleteProduct=(id)=>{
    return API.delete(`/products/${id}`)
}
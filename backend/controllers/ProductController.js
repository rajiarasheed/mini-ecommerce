const Product=require('../models/productModel')
// Get all products
exports.getProducts=async(req,res)=>{
    try {
        const products=await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// Get product by id
exports.getProductById= async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id);
        if(!product){
            res.status(400).json({message:"Product Not Found"})
        }
        res.json(product)
    } catch (error) {
        res.status(400).json({message:"Invalid Product"})
    }
}

// Add products
exports.addProduct=async(req,res)=>{
    try {
        const product=new Product(req.body)
    //     const product = new Product({
    //   name: req.body.name,
    //   price: req.body.price,
    //   category: req.body.category,
    //   image: req.file.filename,
     
    // });
        const savedProduct=await product.save()
        res.status(201).json(savedProduct)
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

// Update Product by id
exports.updateProduct=async(req,res)=>{
    try {
        const updatedProduct=await Product.findByIdAndUpdate(
            req.params.id,req.body,
            {new:true,runValidators:true}
        )
        if(!updatedProduct){
            res.status(400).json({message:"Product Not Found..."})
        }
        res.json(updatedProduct)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

// Delete Product by id
exports.deleteProduct=async(req,res)=>{
    try {
        const deletedProduct= await Product.findByIdAndDelete(req.params.id)
        if(!deletedProduct){
            res.status(404).json({message:"Product Not Found..."})
        }
        res.json({message:"Product Deleted Successfully..."})
    } catch (error) {
        res.status(400).json({ message: "Invalid product ID" })
    }
}
const Product = require("../models/productModel");
// Get all products
// exports.getProducts=async(req,res)=>{
//     try {
//         const products=await Product.find()
//         res.json(products)
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// }

exports.getProducts = async (req, res) => {
  try {
    const { search, category, sort, page = 1, limit = 3 } = req.query;
    let query = {};

    // search by name
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    // filter by category
    if (category) {
      query.category = category;
    }

    // pagination
    const currentPage = Number(page);
    const pageLimit = Number(limit);
    const skip = (currentPage - 1) * pageLimit;

    const totalProduct = await Product.countDocuments(query);

    let productQuery = Product.find(query);

    // sort by price
    if (sort === "price_asc") {
      productQuery = productQuery.sort({ price: 1 });
    } else if (sort === "price_des") {
      productQuery = productQuery.sort({ price: -1 });
    }
    const products = await productQuery.skip(skip).limit(limit);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get product by id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(400).json({ message: "Product Not Found" });
    }
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: "Invalid Product" });
  }
};

// Add products
exports.addProduct = async (req, res) => {
  try {
    if (req.body._id) {
      delete req.body._id;
    }
    const product = new Product(req.body);
    //     const product = new Product({
    //   name: req.body.name,
    //   price: req.body.price,
    //   category: req.body.category,
    //   image: req.file.filename,

    // });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Product by id
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updatedProduct) {
      res.status(400).json({ message: "Product Not Found..." });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Product by id
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404).json({ message: "Product Not Found..." });
    }
    res.json({ message: "Product Deleted Successfully..." });
  } catch (error) {
    res.status(400).json({ message: "Invalid product ID" });
  }
};

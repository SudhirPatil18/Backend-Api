exports.addProduct = async (req, res) => {
    try {
      const { productName, productDescription, productPrice, productCategory } = req.body;
      const productImage = req.file.filename; // Get the uploaded file name
  
      const newProduct = new FarmerAddProduct({
        productName,
        productDescription,
        productPrice,
        productCategory,
        productImage
      });
  
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
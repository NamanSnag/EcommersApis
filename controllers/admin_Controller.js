const Product = require('../models/admin');

module.exports.admin = async (req, res) => {
    try {
        const { admin } = req.body;
        console.log("aaa",admin)
        const newadmin = await Product.create({
            admin: admin
        });
        console.log(newadmin)
        return res.json({
            msg: "admin created",
            data:{
                admin: newadmin
            }
        });
    } catch (error) {
        return res.json({
            error: error,
        });
    }
}

// add product to db
module.exports.createProduct = async (req, res) => {
    const { name, quantity} = req.body;
    try {
        const admin = await Product.findOne({ admin: "Naman"});
        admin.product.push({
            name: name,
            quantity: quantity
        })
        await admin.save();
        return res.json({
            msg: "product created successfully",
            data:{
                product: admin.product
            }
        });
    } catch (err) {
        console.log(err)
        return res.json({
            error: err,
        });
    }
}

// get all products list
module.exports.productList = async (req, res) => {
    try {
        
        const admin = await Product.findOne({ admin: "Naman"});

        return res.json({
            msg: "Product List",
            data:{
                product: admin.product
            }
        });

    } catch (err) {
        console.log(err)
        return res.json({
            error: err,
        });
    }
}

// delete product as per id
// delete product as per id
module.exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
      const admin = await Product.findOne({ admin: "Naman" });
      let product = admin.product.filter((product) => {
        return product._id.toString() !== id;
      });
      await admin.updateOne({
        product : product
      });
      return res.json({
        msg: "Product deleted successfully",
      });
    } catch (err) {
        console.log(err)
      return res.json({
        error: err,
      });
    }
  }

// update product quantity as per id
module.exports.updateProductQuantity = async (req, res) => {
    const id = req.params.id;
    const newQuantity = req.query.number;
    try {
      const admin = await Product.findOne({ admin: "Naman" });
      const productIndex = admin.product.findIndex((product) => {
        return product._id.toString() === id;
      });
      if (productIndex === -1) {
        return res.json({
          error: "Product not found",
        });
      }
      let preQuantity = admin.product[productIndex].quantity;
      admin.product[productIndex].quantity = Number(preQuantity) + Number(newQuantity);
      await admin.save();
      return res.json({
        msg: "Product quantity updated successfully",
        product: admin.product[productIndex]
      });
    } catch (err) {
        console.log(err)
      return res.json({
        error: err,
      });
    }
  };
  
  
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

//get all products
router.get("/get-all-products", productController.getAllProducts);

//get product best seller each category (limit 5)
router.get("/get-best-seller", productController.getBestSeller);
//search product by name
router.get("/search-product", productController.searchProduct);
router.post("/add-product", productController.addProduct);
router.delete("/delete-product/:productCode", productController.deleteProduct);
//using query params to filter products by category and price range
router.get("/get-products-by-category", productController.getProductByCategory);
//get detail product
router.get("/get-product-detail/:id", productController.getProductDetail);

//Get 5 products of the same category, not counting the current product
router.get("/get-related-products/:id", productController.getRelatedProducts);
module.exports = router;

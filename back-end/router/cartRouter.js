const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

//get cart by user id
router.get(
  "/get-cart-by-user-id",
  cartController.checkUserLoggedIn,
  cartController.getCartByUserId
);
//add product to cart
router.post(
  "/add-product-to-cart",
  cartController.checkUserLoggedIn,
  cartController.addProductToCart
);

//update product in cart
router.put(
  "/update-product-in-cart",
  cartController.checkUserLoggedIn,
  cartController.updateProductInCart
);

//delete product in cart
router.delete(
  "/delete-product-in-cart",
  cartController.checkUserLoggedIn,
  cartController.deleteProductInCart
);
module.exports = router;

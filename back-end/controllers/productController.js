const multer = require("multer");
const fs = require("fs");
const Guid = require("guid");

const Utils = require("../common/utils");
const Product = require("../models/Product");
const Category = require("../models/Category");
//setup multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const basePath = "./public/images/products/";
    const categoryName = req.body.categoryName;
    const path = basePath + categoryName;
    //Create a folder named with categoryName, if it doesn't already exist?
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }

    cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + Guid.raw() + ".jpg");
  },
});
const upload = multer({ storage: storage });

//get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.json(
      Utils.createSuccessResponseModel(categories.length, categories)
    );
  } catch (err) {
    console.log(err);
    return res.json(Utils.createErrorResponseModel("Vui lòng thử lại"));
  }
};

//get all products by pageSize and pageIndex
const getAllProducts = async (req, res) => {
  try {
    const { pageSize, pageIndex } = req.query;
    const categories = await Category.find();
    //In category there is an array of products, take all of those products and add each product to the corresponding categoryName
    let products = categories.flatMap((category) => {
      return category.products.map((product) => {
        return {
          ...product._doc,
          categoryName: category.name,
        };
      });
    });
    //pagination
    const totalProducts = products.length;
    products = products
      .filter((product) => product.isDeleted === false)
      .slice((pageIndex - 1) * pageSize, pageIndex * pageSize);

    return res.json(Utils.createSuccessResponseModel(totalProducts, products));
  } catch (err) {
    console.log(err);
    return res.json(Utils.createErrorResponseModel("Vui lòng thử lại"));
  }
};

//Get best sale products by category, 5 products per category
const getBestSeller = async (req, res) => {
  try {
    const bestSellerProducts = await Category.aggregate([
      {
        $project: {
          name: 1,
          products: {
            $slice: [
              {
                $map: {
                  input: {
                    $slice: [
                      {
                        $filter: {
                          input: "$products",
                          as: "product",
                          cond: { $ne: ["$$product.isDeleted", true] },
                        },
                      },
                      4, // get 5 best seller products
                    ],
                  },
                  as: "product",
                  in: {
                    productCode: "$$product.productCode",
                    name: "$$product.name",
                    description: "$$product.description",
                    capacitiesAndPrices: "$$product.capacitiesAndPrices",
                    image: "$$product.image",
                  },
                },
              },
              5, // get 5 best seller categories
            ],
          },
        },
      },
    ]);

    return res.json(
      Utils.createSuccessResponseModel(
        bestSellerProducts.length,
        bestSellerProducts
      )
    );
  } catch (err) {
    console.log(err);
    return res.json(Utils.createErrorResponseModel("Vui lòng thử lại"));
  }
};

//search product by name
const searchProduct = async (req, res) => {
  try {
    const { keyword, pageIndex = 1, pageSize = 9 } = req.query;
    const products = await Product.find({
      name: { $regex: keyword, $options: "i" },
    })
      .skip((pageIndex - 1) * pageSize)
      .limit(parseInt(pageSize));
    return res.json(
      Utils.createSuccessResponseModel(products.length, products)
    );
  } catch (err) {
    console.log(err);
    return res.json(Utils.createErrorResponseModel("Vui lòng thử lại"));
  }
};

const addProducts = async (req, res) => {
  try {
    let category = await Category.findOne({ name: req.body.categoryName });
    if (!category || category === null) {
      category = new Category({
        name: req.body.categoryName,
      });
    }
    const products = req.body.products; // Assuming req.body.products is an array of products
    // Validate if products is an array
    if (!Array.isArray(products)) {
      return res.json(Utils.createErrorResponseModel("Invalid products data"));
    }

    // Map each product in the array to a new product instance and save it
    const newProducts = await Promise.all(
      products.map(async (product) => {
        const { productCode, name, description, capacity, image } = product;
        const newProduct = new Product({
          productCode,
          name,
          description,
          capacitiesAndPrices: capacity,
          image: image,
        });
        category.products.push(newProduct);
        await newProduct.save();
      })
    );
    await category.save();

    return res.json(
      Utils.createSuccessResponseModel("Thêm sản phẩm thành công", newProducts)
    );
  } catch (err) {
    console.log(err);
    return res.json(Utils.createErrorResponseModel("Vui lòng thử lại"));
  }
};

// delete product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      productCode: req.params.productCode,
    });
    if (!product || product === null) {
      return res.json(Utils.createErrorResponseModel("Sản phẩm không tồn tại"));
    }
    product.isDeleted = true;
    await product.save();
    return res.json(Utils.createSuccessResponseModel(0, true));
  } catch (err) {
    console.log(err);
    return res.json(Utils.createErrorResponseModel("Vui lòng thử lại"));
  }
};

//get product by category
const getProductByCategory = async (req, res) => {
  try {
    const {
      categoryName,
      minPrice,
      maxPrice,
      pageSize = 9,
      pageIndex = 1,
    } = req.query;
    const category = await Category.findOne({ name: categoryName });
    if (!category || category === null) {
      return res.json(Utils.createErrorResponseModel("Danh mục không tồn tại"));
    }

    let products;
    if (typeof minPrice === "undefined" || typeof maxPrice === "undefined") {
      products = category.products;
    } else {
      products = category.products.filter(
        (product) =>
          product.capacitiesAndPrices[0].price >= minPrice &&
          product.capacitiesAndPrices[0].price <= maxPrice
      );
    }

    //pagination
    products = products
      .filter((product) => product.isDeleted === false)
      .slice((pageIndex - 1) * pageSize, pageIndex * pageSize);

    return res.json(
      Utils.createSuccessResponseModel(products.length, products)
    );
  } catch (err) {
    console.log(err);
    return res.json(Utils.createErrorResponseModel("Vui lòng thử lại"));
  }
};

//get detail product
const getDetailProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
    });
    if (!product || product === null) {
      return res.json(Utils.createErrorResponseModel("Sản phẩm không tồn tại"));
    }
    return res.json(Utils.createSuccessResponseModel(1, product));
  } catch (err) {
    console.log(err);
    return res.json(Utils.createErrorResponseModel("Vui lòng thử lại"));
  }
};

//Get 5 products of the same category, not counting the current product
const getRelatedProducts = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
    });
    if (!product || product === null) {
      return res.json(Utils.createErrorResponseModel("Sản phẩm không tồn tại"));
    }

    //Find products in the category, if any category contains that product, select 5 products, excluding the current product
    const categories = await Category.find();
    const relatedProducts = categories
      .flatMap((category) => {
        // If there is a product that is identical to a product in a category, select 5 products of the same category, and ignore other categories
        if (category.products.find((p) => p._id.toString() === req.params.id)) {
          const categoryProducts = category.products
            .filter((p) => p._id.toString() !== req.params.id)
            .slice(0, 5);
          if (categoryProducts.length > 0) {
            return {
              category: category.name, // Assuming category has a name property
              products: categoryProducts,
            };
          }
        }
        return []; // Return an empty array if no products match
      })
      .filter(Boolean); // Remove null elements from the array
    console.log(relatedProducts);
    return res.json(
      Utils.createSuccessResponseModel(
        relatedProducts[0].products.length,
        relatedProducts
      )
    );
  } catch (err) {
    console.log(err);
    return res.json(Utils.createErrorResponseModel("Vui lòng thử lại"));
  }
};

const uploadImage = async (req, res) => {
  try {
    const path = req.file.path.match(/public(.*)/)?.[1];
    return res.json(Utils.createSuccessResponseModel(0, path));
  } catch (err) {
    console.log(err);
    return res.json(Utils.createErrorResponseModel("Vui lòng thử lại"));
  }
};
module.exports = {
  upload: upload,
  getAllCategories: getAllCategories,
  getAllProducts: getAllProducts,
  getBestSeller: getBestSeller,
  addProduct: addProducts,
  deleteProduct: deleteProduct,
  getProductByCategory: getProductByCategory,
  getProductDetail: getDetailProduct,
  searchProduct: searchProduct,
  getRelatedProducts: getRelatedProducts,
  uploadImage: uploadImage,
};

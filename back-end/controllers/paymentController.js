const Utils = require("../common/utils");
const Product = require("../models/Product");
const Invoice = require("../models/Invoice");
const InvoiceItem = require("../models/InvoiceItem");

const createPaymentIntent = async (req, res) => {
  try {
    //check if user is logged in
    if (!req.session.user) {
      return res.json(Utils.createErrorResponseModel("Vui lòng đăng nhập"));
    }
    const {
      products,
      buyerName,
      address,
      phoneNumber,
      totalQuantity,
      totalMoney,
    } = req.body;
    //create invoice
    const invoice = new Invoice({
      user: req.session.user,
      buyerName,
      address,
      phoneNumber,
      totalQuantity,
      totalMoney,
    });
    await invoice.save();
    //create invoice items
    await Promise.all(
      products.map(async (p) => {
        const product = await Product.findById(p.Id);
        const { capacity, price } = product.capacitiesAndPrices.find(
          (i) => i.isChoose === true
        );
        const invoiceItem = new InvoiceItem({
          invoiceId: invoice._id,
          productId: product._id,
          productName: product.name,
          capacity: capacity,
          capacityPrice: price,
          quantity: p.quantity,
          totalPrice: p.quantity * price,
        });
        await invoiceItem.save();
      })
    );
    return res.json(Utils.createSuccessResponseModel());
  } catch (err) {
    console.log(err);
    return res.json(Utils.createErrorResponseModel("Vui lòng thử lại"));
  }
};

module.exports = {
  createPaymentIntent: createPaymentIntent,
};

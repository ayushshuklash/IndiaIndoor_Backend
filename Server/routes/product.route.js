module.exports = Server => {
  const product = require("../controllers/product.controller.js");

  Server.get("/products/:id", product.findByCategory);
};

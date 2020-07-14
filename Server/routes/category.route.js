module.exports = Server => {
  const Category = require("../controllers/category.controller.js");

  Server.get("/categories", Category.findAll);
};

const Category = require("../models/category.model");

exports.findAll = (req, res) => {
  Category.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Categories.",
      });
    else res.send(data);
  });
};

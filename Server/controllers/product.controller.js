const Product = require("../models/product.model");

exports.findAll = (req, res) => {
    Product.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Categories.",
      });
    else res.send(data);
  });
};

exports.findByCategory = (req, res) => {
  Product.findByCategory(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Products with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Products with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

exports.findByText = (req, res) => {
  Product.findByText(req.params.text, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Products with Text ${req.params.Text}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Products with id " + req.params.Text
        });
      }
    } else res.send(data);
  });
};

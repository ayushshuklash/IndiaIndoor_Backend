const sql = require("./db.js");

// constructor
const Category = function(category) {
  this.Id = category.Id;
  this.Name = category.Name;
  this.Code = category.Code;
  this.Group_Id = category.Group_Id;
  this.Category_Id = category.Category_Id;
  this.ImageNamelg = category.ImageNamelg;
  this.ImageNamesm = category.ImageNamesm;
};

Category.getAll = result => {
  sql.query("SELECT * FROM Categories", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("category: ", res);
    result(null, res);
  });
};

module.exports = Category;
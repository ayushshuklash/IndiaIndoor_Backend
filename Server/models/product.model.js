const sql = require("./db.js");

// constructor
const Product = function(product) {
  this.Id = product.Id;
  this.Name = product.Name;
  this.Description = product.Description;
  this.CompanyName = product.CompanyName;
  this.Country_ID = product.Country_ID;
  this.CountryName = product.CountryName;
  this.Company_ID = category.Company_ID;
  this.CategoryName = product.CategoryName;
  this.Category_ID = product.Category_ID;
  this.Advertise = product.Advertise;
  this.Show = product.Show;
  this.ImageNamelg = product.ImageNamelg;
  this.ImageNamesm = product.ImageNamesm;
};

Product.getAll = result => {
  sql.query("SELECT * FROM Products", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Products: ", res);
    result(null, res);
  });
};

Product.findByCategory = (id, result) => {
    sql.query("SELECT B.ID,B.Name,B.Description,B.Category_ID,B.Company_ID,B.Show,B.Advertise,B.ImageNamelg,B.ImageNamesm,C.Name As CompanyName,C.Country_ID as Country_ID,CO.Name As CountryName,CA.Name As CategoryName FROM IndiaIndoor_DEV.Brands B LEFT JOIN IndiaIndoor_DEV.Companies C ON B.Company_ID = C.ID LEFT JOIN IndiaIndoor_DEV.Countries CO ON C.Country_ID = CO.ID RIGHT JOIN IndiaIndoor_DEV.Categories CA ON CA.ID = B.Category_ID  WHERE B.Category_ID = ?;",id ,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Products: ", res);
      result(null, res);
    });
  };

  Product.findByText = (text, result) => {
    sql.query("SELECT B.ID,B.Name,B.Description,B.Category_ID,B.Company_ID,B.Show,B.Advertise,B.ImageNamelg,B.ImageNamesm,C.Name As CompanyName,C.Country_ID as Country_ID,CO.Name As CountryName,CA.Name As CategoryName FROM IndiaIndoor_DEV.Brands B LEFT JOIN IndiaIndoor_DEV.Companies C ON B.Company_ID = C.ID LEFT JOIN IndiaIndoor_DEV.Countries CO ON C.Country_ID = CO.ID RIGHT JOIN IndiaIndoor_DEV.Categories CA ON CA.ID = B.Category_ID  WHERE B.Name LIKE '%?%' OR CO.Name LIKE '%?%' OR CA.Name LIKE '%?%' OR C.NAME LIKE '%?%'",Text ,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Products: ", res);
      result(null, res);
    });
  };
  

module.exports = Product;
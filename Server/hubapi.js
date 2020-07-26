const express = require('express');
const fs = require('fs'); 
const cors = require('cors'); 
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
require("./routes/category.route.js")(app);
require("./routes/product.route.js")(app);


app.listen(port, () => {
  console.log(`Running on port  ${port}`);
});

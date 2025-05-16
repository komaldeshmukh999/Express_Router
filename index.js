const express = require('express');
const app = express();

const productRouter=require("./routes/products")
const categoriesRouter=require("./routes/categories")

app.use("/products",productRouter)
app.use("/categories",categoriesRouter)

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

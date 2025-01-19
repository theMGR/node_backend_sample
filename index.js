const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS package
const app = express();

Db = "mongodb+srv://mahendhraa:123454321@cluster0.b5s21.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Import routes
const authRouter = require("./routes/auth");
const { auth } = require('./middleware/auth');
const categoryRouter = require('./routes/category');
const bannerRouter = require('./routes/banner');
const productRouter = require('./routes/product');
const subCategoryRouter = require('./routes/subcategory');
const orderRouter = require("./routes/user");

// Use CORS middleware
app.use(cors()); // This allows all origins. You can configure it further if needed.

app.use(express.json());
app.use(authRouter);
app.use(categoryRouter);
app.use(bannerRouter);
app.use(productRouter);
app.use(subCategoryRouter);
app.use(orderRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect(Db).then(() => {
  console.log('connected');
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

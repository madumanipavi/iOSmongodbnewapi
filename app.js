// app.js

require('dotenv').config();
const express = require('express');
const mongoose = require("./src/config/database.js");
const {
  authenticateToken,
} = require('./src/controllers/middleware/auth-controller.js');

const app = express();

app.use(express.json());

const categoriesRoute = require('./src/routes/categories.routes.js');
const subcategoriesRoute = require('./src/routes/subcategory.routes.js');
const productsRoute = require('./src/routes/products.routes.js');
const ordersoute = require('./src/routes/orders.routes.js');
const paymentsRoute = require('./src/routes/payments.routes.js');
const usersRoute = require('./src/routes/users.routes.js');
const loginRoute = require('./src/routes/token.routes.js');
const cartItemRoute = require('./src/routes/cartitem.routes.js');

app.use('/api/categories', categoriesRoute);
app.use('/api/subcategories', subcategoriesRoute);
app.use('/api/products', productsRoute);
app.use('/api/orders', ordersoute);
app.use('/api/payments', paymentsRoute);
app.use('/api/users', usersRoute);
app.use('/api/login', loginRoute);
app.use('/api/carts', cartItemRoute);

const port = process.env.PORT || 3000;

mongoose.connection.on("connected", function () {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});

mongoose.connection.on("error", function (err) {
  console.error("Mongoose connection error:", err);
  process.exit(1);
});

module.exports = app;





// require('dotenv').config();
// const express = require('express');
// const app = express();
// const {
//   authenticateToken,
// } = require('./controllers/middleware/auth-controller.js');

// app.use(express.json());

// const categoriesRoute = require('./routes/categories.routes.js');
// const productsRoute = require('./routes/products.routes.js');
// const ordersoute = require('./routes/orders.routes.js');
// const paymentsRoute = require('./routes/payments.routes.js');
// const usersRoute = require('./routes/users.routes.js');
// const loginRoute = require('./routes/token.routes.js');
// const cartItemRoute = require('./routes/cartitem.routes.js');

// app.use('/api/categories', categoriesRoute);
// app.use('/api/products', productsRoute);
// app.use('/api/orders', ordersoute);
// app.use('/api/payments', paymentsRoute);
// app.use('/api/users', usersRoute);
// app.use('/api/login', loginRoute);
// app.use('/api/carts', cartItemRoute);

// module.exports = app;

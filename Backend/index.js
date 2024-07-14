// index.js

require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const shopRoutes = require('./routes/shopRoutes');
const farmerRoutes = require('./routes/farmerRoutes');
const customerRoutes = require('./routes/customerRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const farmerOrderRoutes = require('./routes/farmerOrderRoutes');
const signupRoute = require('./routes/signupRoute');
const farmeraddproductRoutes = require('./routes/farmeraddproductRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded request bodies

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/shops', shopRoutes);
app.use('/api/farmers', farmerRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/categories', categoryRoutes); // Use category routes
app.use('/api/products', productRoutes);
app.use('/api', farmerOrderRoutes);
app.use('/api', signupRoute);
app.use('/api/farmeraddproduct', farmeraddproductRoutes);
app.use('/api/users', userRoutes);

// Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

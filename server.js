const express = require('express');
const bodyParser = require('body-parser');

// import routes
const dashboardRoutes = require('./routes/vehicle-routes')

// Dynamically creating database connection with sensitive credentials
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-5kdcc.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`;


const app = express();

app.use('/api/vehicles', dashboardRoutes);

app.listen(5000);
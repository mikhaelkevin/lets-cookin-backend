const express = require('express');
const helmet = require('helmet');

const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT;

// Server Add-on
app.use(helmet({
  crossOriginResourcePolicy: false
}));
app.use(bodyParser.json());

// Middleware Declaration
const { errorHandler } = require('./app/middlewares/errorHandler');
const cors = require('./app/middlewares/cors');

// Routes Declaration
app.use('/public/images', express.static('public/images'));
app.use('/public/videos', express.static('public/videos'));
const usersRoutes = require('./routes/usersRoutes');
const recipesRoutes = require('./routes/recipesRoutes');
const authRoutes = require('./routes/auth');

// Routes Endpoint
app.use('/letscookinapps/', cors, usersRoutes);
app.use('/letscookinapps/', cors, recipesRoutes);
app.use('/letscookinapps/', authRoutes);

// Error Handler
app.use(errorHandler);

app.listen(port, () => {
  console.log('Running on port :>> ', port);
});

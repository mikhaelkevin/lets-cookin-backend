const express = require('express');
const helmet = require('helmet');
const restify = require('restify');
const xss = require('xss-clean');
const bodyParser = require('body-parser');
require('dotenv').config();

const appXSS = restify.createServer();
const app = express();
const port = process.env.PORT || process.env.LOCAL_PORT;

// Server Add-on
appXSS.use(restify.bodyParser());
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(bodyParser.json());

// Middleware Declaration
const { errorHandler } = require('./app/middlewares/errorHandler');
// const cors = require('./app/middlewares/cors');
const cors = require('cors');

const allowlist = [
  'https://letscookin-app.web.app/',
  'http://localhost:3001',
  'http://localhost:3000',
  'https://next-letscookin-apps.vercel.app'
];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

// Routes Declaration
app.use('/public/images', express.static('public/images'));
app.use('/public/videos', express.static('public/videos'));
const usersRoutes = require('./routes/usersRoutes');
const recipesRoutes = require('./routes/recipesRoutes');
const authRoutes = require('./routes/auth');

// Routes Endpoint
appXSS.use(xss());
app.use('/letscookinapps/', cors(corsOptionsDelegate), usersRoutes);
app.use('/letscookinapps/', cors(corsOptionsDelegate), recipesRoutes);
app.use('/letscookinapps/', cors(corsOptionsDelegate), authRoutes);

// app.use('*', (req, res) => {
//   res.send('Sukses');
// });

// Error Handler
app.use(errorHandler);

app.listen(port, () => {
  console.log('Running on port :>> ', port);
});

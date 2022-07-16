const cors = require('cors');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  head: 'Content-Type: application/json'
};

module.exports = cors(corsOptions);

const dotenv = require('dotenv');
dotenv.config();

const config = {
  dbUrl: process.env.DB_URL || '',
  host: process.env.HOST || 'http://localhost',
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'production'
  // publicRoute: process.env.PUBLIC_ROUTE || '/app',
};

module.exports = config;
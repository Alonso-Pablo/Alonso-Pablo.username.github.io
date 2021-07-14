const dotenv = require('dotenv');
dotenv.config();

const config = {
  dbUrl: process.env.DB_URL || '',
  host: process.env.HOST || 'http://localhost',
};

module.exports = config;
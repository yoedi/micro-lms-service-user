require('dotenv').config();

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  DB_HOST,
  DB_PORT,
  DB_CONNECTION,
  DB_TEST_USERNAME,
  DB_TEST_PASSWORD,
  DB_TEST_DATABASE,
  DB_TEST_HOST,
  DB_TEST_PORT,
  DB_TEST_CONNECTION,
  DB_PRODUCTION_USERNAME,
  DB_PRODUCTION_PASSWORD,
  DB_PRODUCTION_DATABASE,
  DB_PRODUCTION_HOST,
  DB_PRODUCTION_PORT,
  DB_PRODUCTION_CONNECTION,
} = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": DB_CONNECTION
  },
  "test": {
    "username": DB_TEST_USERNAME,
    "password": DB_TEST_PASSWORD,
    "database": DB_TEST_DATABASE,
    "host": DB_TEST_HOST,
    "dialect": DB_TEST_CONNECTION
  },
  "production": {
    "username": DB_PRODUCTION_USERNAME,
    "password": DB_PRODUCTION_PASSWORD,
    "database": DB_PRODUCTION_DATABASE,
    "host": DB_PRODUCTION_HOST,
    "dialect": DB_PRODUCTION_CONNECTION
  }
}

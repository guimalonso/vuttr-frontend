const withCSS = require('@zeit/next-css');

module.exports = {
  ...withCSS(),
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL || 'http://localhost:3000'
  }
};
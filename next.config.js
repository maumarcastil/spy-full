const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')

module.exports = withCSS(withLess(withImages(withSass({
  env: {
    ANY_ENV_KEY: "ANY_ENV_VARIABLE",
    mongodburl: "mongodb+srv://maumarcastil:cJe0TE8AQ7PFGcKU@cluster0.d72qs.mongodb.net/phone_api"
  }
}))));
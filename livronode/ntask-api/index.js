const express = require('express');
const consign = require('consign');

const app = express();

<<<<<<< HEAD
consign({ verbose: false })
    .include('db.js')
    .then('models')
    .then('associations.js')
    .then('auth.js')
    .then('middlewares.js')
    .then('routes')
    .then('boot.js')
    .into(app)
=======
>>>>>>> a9bf8e899dd3a809ebc987a4500df6bba9db6fe6

consign({ verbose: false })
  .include('db.js')
  .then('models')
  .then('associations.js')
  .then('auth.js')
  .then('middlewares.js')
  .then('routes')
  .then('boot.js')
  .into(app);

module.exports = app;
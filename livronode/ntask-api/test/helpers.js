<<<<<<< HEAD
const supertest = require('supertest')
const chai = require('chai')
const app = require('../index.js')
const config = require('../config.js');

global.app = app;
global.request = supertest(app)
=======
const supertest = require('supertest');
const chai = require('chai');
const app = require('../index.js');
const config = require('../config.js');

global.app = app;
global.request = supertest(app);
>>>>>>> a9bf8e899dd3a809ebc987a4500df6bba9db6fe6
global.expect = chai.expect;
global.config = config;
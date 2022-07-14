// Middlewares
const authRoutes = require('express').Router();
const urlencoded = require('body-parser').urlencoded({ extended: false });
const asyncHandler = require('../app/middlewares/asyncHandler');

// Controllers
const { login } = require('../app/controllers/authControllers');

// Routes Endpoint and Controllers
authRoutes.post('/login', urlencoded, asyncHandler(login));

module.exports = authRoutes;

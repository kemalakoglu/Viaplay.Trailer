const express = require('express');
const router = express.Router();
const categoryModel= require('../aggregates/category/category.model');

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
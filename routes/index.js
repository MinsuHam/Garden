const express = require('express');
const fs = require('fs-extra');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.get('/cart', (req, res) => {
    res.render('cart');
});

router.get('/page_present', (req, res) => {
    res.render('page_present');
});





module.exports = router; 
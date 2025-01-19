const express = require('express');
const hellowRoute = express.Router();
hellowRoute.get('/hellow', (req, res) => {
    res.send('hellow');
})

module.exports = hellowRoute;
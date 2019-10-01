const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({idade: req.query.idade });
});


module.exports = routes;
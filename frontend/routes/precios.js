var express = require('express');
var router = express.Router();

/* GET precios listing. */
router.get('/', function (req, res, next) {
    res.render('precios')
});

module.exports = router;

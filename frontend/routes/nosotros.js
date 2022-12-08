var express = require('express');
var router = express.Router();

/* GET nosotros page. */

router.get('/',function(req,res,next){
    res.send('nosotros');
});

module.exports = router;
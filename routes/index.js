var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');

router.get('/template', (req, res, next) => {
    connection.query('SELECT * FROM test_types ',function(err,rows) {
        if(err){
         //req.flash('error', err); 
         //res.render('customers',{page_title:"Customers - Node.js",data:''});   
         console.log("Error")
        }else{
            console.log(rows);
            res.render('starter', {data:rows});
            //res.render('customers',{page_title:"Customers - Node.js",data:rows});
        }
    });
    
});

module.exports = router;
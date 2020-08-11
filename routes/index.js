var express = require('express');
var router = express.Router();
var stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
var couponIds=[];
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title:'Im the Homepage'});
  
});

function pushId(coupon)
{
    couponIds.push({'name': coupon.name, 'id': coupon.id,'created_at': coupon.created});
}
module.exports = router;

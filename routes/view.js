var express = require('express');
var router = express.Router();
var stripe = require('stripe')('sk_test_51HEYBPH4QCOlxhXtC4Z9qFPECltLQke6ZjfvQNmWU7XZy84AmmGsF0nLZrVQWYYlVUBiQqhFKJf8FAGX3P7HWTNI00XAL7D8Ir');
var couponIds=[];
/* GET home page. */
router.get('/', function(req, res, next) {
  stripe.coupons.list((err,coupons)=>{
    coupons.data.map(pushId);
    res.send(couponIds);
}); 
  
});

function pushId(coupon)
{
    couponIds.push(coupon);
}
module.exports = router;

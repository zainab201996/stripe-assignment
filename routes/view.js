var express = require('express');
var router = express.Router();
var stripe = require('stripe')('sk_test_51HEYBPH4QCOlxhXtC4Z9qFPECltLQke6ZjfvQNmWU7XZy84AmmGsF0nLZrVQWYYlVUBiQqhFKJf8FAGX3P7HWTNI00XAL7D8Ir');
var couponIds=[];
/* Get the coupons list of the user having secret key used in require*/
router.get('/', function(req, res, next) {
  stripe.coupons.list((err,coupons)=>{
    if(!err)
    {
      coupons.data.map(pushId);
      res.send(couponIds);
    }
    else res.send('Error in viewing coupons',err)
}); 
  
});

function pushId(coupon)
{
    couponIds.push(coupon);
}
module.exports = router;

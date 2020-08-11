var express = require('express');
var router = express.Router();
var stripe = require('stripe')('sk_test_51HEYBPH4QCOlxhXtC4Z9qFPECltLQke6ZjfvQNmWU7XZy84AmmGsF0nLZrVQWYYlVUBiQqhFKJf8FAGX3P7HWTNI00XAL7D8Ir');
/* GET add coupon page. */
router.get('/:id', function(req, res, next) {
    stripe.coupons.del(
        req.params.id,
        function(err, confirmation) {
            if(!err){
                res.send(confirmation);
            } else res.send(err);
        }
      );
});


module.exports = router;

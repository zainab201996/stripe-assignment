var express = require('express');
var router = express.Router();
var stripe = require('stripe')('sk_test_51HEYBPH4QCOlxhXtC4Z9qFPECltLQke6ZjfvQNmWU7XZy84AmmGsF0nLZrVQWYYlVUBiQqhFKJf8FAGX3P7HWTNI00XAL7D8Ir');
/* GET add coupon page. */
router.get('/:duration', function(req, res, next) {
    stripe.coupons.create(
        {
          percent_off: 67,
          name: "added by test",
          duration: req.params.duration,
          duration_in_months: 3,
        },
        function(err, coupon) {
            if(err){console.log(err)} else
          console.log(coupon);
        }
      );
      res.send('Added Successfully! ');
});
router.get('/:duration/:durationInMonths', function(req, res, next) {
    stripe.coupons.create(
        {
          percent_off: 67,
          name: "added by test",
          duration: req.params.duration,
          duration_in_months: req.params.durationInMonths,
        },
        function(err, coupon) {
          console.log(coupon);
        }
      );
      res.send('Added Successfully!')
    });
    router.get('/:duration/:durationInMonths/:percent', function(req, res, next) {
    stripe.coupons.create(
        {
            percent_off: req.params.percent,
            name: "added by test",
            duration: req.params.duration,
            duration_in_months: req.params.durationInMonths,
        },
        function(err, coupon) {
          console.log(coupon);
        }
      );
      res.send('Added Successfully!');
});

module.exports = router;

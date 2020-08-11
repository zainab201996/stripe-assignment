var express = require('express');
var router = express.Router();
var stripe = require('stripe')('sk_test_51HEYBPH4QCOlxhXtC4Z9qFPECltLQke6ZjfvQNmWU7XZy84AmmGsF0nLZrVQWYYlVUBiQqhFKJf8FAGX3P7HWTNI00XAL7D8Ir');
/* Get the add coupon page of the user having secret key used in require*/
//This route is when only duration is passed into URL parameter
router.get('/:duration', function(req, res, next) {
    stripe.coupons.create(
        {
          percent_off: 67,
          name: "added by test",
          duration: req.params.duration,
          duration_in_months: 3,
        },
        function(err, coupon) {
            if(err){console.log(err)} 
            else
            console.log(coupon);
        }
      );
      res.send('Added Successfully! ');
});
//This route is when duration and duration months are passed into URL parameter
router.get('/:duration/:durationInMonths', function(req, res, next) {
    stripe.coupons.create(
        {
          percent_off: 67,
          name: "added by test",
          duration: req.params.duration,
          duration_in_months: req.params.durationInMonths,
        },
        function(err, coupon) {
          if(err)
          {console.log('Error: ',err)}
          else
          console.log(coupon);
        }
      );
      res.send('Added Successfully!')
    });
//This route is when duration, duration months and percent is passed into URL parameter
router.get('/:duration/:durationInMonths/:percent', function(req, res, next) {
    stripe.coupons.create(
        {
            percent_off: req.params.percent,
            name: "added by test",
            duration: req.params.duration,
            duration_in_months: req.params.durationInMonths,
        },
        function(err, coupon) {if(err)
          {console.log('Error: ',err)}
          else
          console.log(coupon);
        }
      );
      res.send('Added Successfully!');
});

module.exports = router;

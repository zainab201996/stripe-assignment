var express = require('express');
var router = express.Router();
var stripe = require('stripe')('sk_test_51HEYBPH4QCOlxhXtC4Z9qFPECltLQke6ZjfvQNmWU7XZy84AmmGsF0nLZrVQWYYlVUBiQqhFKJf8FAGX3P7HWTNI00XAL7D8Ir');

stripe.coupons.create(
    {
      percent_off: 67,
      name: "added by me",
      duration: 'repeating',
      duration_in_months: 3,
    },
    function(err, coupon) {
      console.log(coupon);
      stripe.coupons.list(coupons=>{console.log(coupons)});
    }
  );

  //stripe.coupons.list(coupons=>{console.log(coupons)});
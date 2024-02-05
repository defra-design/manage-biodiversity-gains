//const express = require('express')
//const router = new express.Router()

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes above the module.exports line

router.post('/start', function (req, res) {
    res.redirect('credit-tier');
  });
  
  router.post('/credit-tier', function (req, res) {
    res.redirect('credit-cost');
  });

module.exports = router
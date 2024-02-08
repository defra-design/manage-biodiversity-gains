//const express = require('express')
//const router = new express.Router()

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes above the module.exports line

// Credits tier
router.post('/credit-tiers', function (req, res) {
    res.redirect('cost');
});

// Credits cost
router.post('/cost', function (req, res) {
    res.redirect('tasklist');
});

// Purchase order
router.post('/purchase-order', function (req, res) {
    res.redirect('tasklist');
});

// Terms and conditions
router.post('/terms-and-conditions', function (req, res) {
    res.redirect('tasklist');
});

module.exports = router
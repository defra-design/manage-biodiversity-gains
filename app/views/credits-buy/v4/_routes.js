//const express = require('express')
//const router = new express.Router()

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes above the module.exports line

// Purchase order

router.post('/purchase-order', function (req, res) {
    res.redirect('tasklist');
});


module.exports = router
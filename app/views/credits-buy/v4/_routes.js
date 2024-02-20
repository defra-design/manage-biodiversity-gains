//const express = require('express')
//const router = new express.Router()

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes above the module.exports line


// Credits metric upload
router.post('/sign-in', function (req, res) {
    res.redirect('application-list');
});


// Credits metric upload
router.post('/metric-upload', function (req, res) {
    res.redirect('metric-upload-check');
});

router.post('/metric-upload-check', function (req, res) {
    if (req.session.data['metric-correct'] == 'yes') {
        res.redirect('development-location');
    }
    else if (req.session.data['metric-correct'] == 'no') {
        res.redirect('metric-upload');
    }
});

router.post('/development-location', function (req, res) {
    if (req.session.data['development-data'] == 'yes') {
        res.redirect('tasklist');
    }
    else if (req.session.data['development-data'] == 'no') {
        res.redirect('metric-upload');
    }
});

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

// Customer due diligence (CDD)
router.post('/individual-or-organisation', function (req, res) {
    res.redirect('applicant-details-confirm');
});

router.post('/applicant-details-confirm', function (req, res) {
    if (req.session.data['ind-or-org'] == 'Individual') {
        res.redirect('individual-middle-name');
    }
    else {
        res.redirect('tasklist');
    }
});

router.post('/individual-middle-name', function (req, res) {
    res.redirect('individual-dob');
});

router.post('/individual-dob', function (req, res) {
    res.redirect('individual-nationality');
});

router.post('/individual-nationality', function (req, res) {
    res.redirect('tasklist');
}); 

// Terms and conditions
router.post('/terms-and-conditions', function (req, res) {
    res.redirect('tasklist');
});

module.exports = router
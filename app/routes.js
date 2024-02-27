//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Add your routes here


// Register
const registerapplicationv22 = require('./views/register-application/v22/_routes');
router.use('/register-application/v22', registerapplicationv22);
const registerapplicationv23 = require('./views/register-application/v23/_routes');
router.use('/register-application/v23', registerapplicationv23);
const registerapplicationv24 = require('./views/register-application/v24/_routes');
router.use('/register-application/v24', registerapplicationv24);

// Public register
const biodiversitygainsitesregisterv6 = require('./views/biodiversity-gain-sites-register/v6/_routes');
router.use('/biodiversity-gain-sites-register/v6', biodiversitygainsitesregisterv6);


// Credits estimation
const creditsestimationv5 = require('./views/credits-estimation/v5/_routes');
router.use('/credits-estimation/v5', creditsestimationv5);

// Credits buy
const creditsbuyv4 = require('./views/credits-buy/v4/_routes');
router.use('/credits-buy/v4', creditsbuyv4);


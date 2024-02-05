//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Add your routes here

const registerapplicationv22 = require('./views/register-application/v22/_routes');
router.use('/register-application/v22', registerapplicationv22);

const biodiversitygainsitesregisterv6 = require('./views/biodiversity-gain-sites-register/v6/_routes');
router.use('/biodiversity-gain-sites-register/v6', biodiversitygainsitesregisterv6);

const creditsestimationv5 = require('./views/credits-estimation/v5/_routes');
router.use('/credits-estimation/v5', creditsestimationv5);


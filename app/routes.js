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

// Adding "query" to every page. There could be a better implementaion using middleware. 
// in nunjkucks you can call {{query[key]}}
router.get('*', function(req, res) {
  let path = req.params[0]
  let pathEnd = path.slice(-1)
  let newPath = path.substring(1)
  if (path == "/") {
	// Top home page
	path = "index"
  } else if (pathEnd == "/") {
	// Check if this is the route folder, if so, then render the index page.
	path = newPath + "index"
  } else {
	path = newPath
  }
  res.render(path, {
	"query": req.query,
  });
})
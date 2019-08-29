// Analyser base route
const baseRoute = '/analyse'

// controller for analyser
const analyser = require('../controllers/analyser')

module.exports = (app) => {
    app.get(baseRoute + '/test', analyser.getHomePage)
    app.post(baseRoute, analyser.getResult)
}
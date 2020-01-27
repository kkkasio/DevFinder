const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello world! :)' });
});
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);
module.exports = routes;

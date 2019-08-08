const express = require('express');
const DevController = require('./controllers/DevController.js');
const LikeController = require('./controllers/LikeController.js');
const DislikeController = require('./controllers/DislikeController.js');
const routes = express.Router();

/*
Principais métodos em uma api-rest:
GET, POST, PUT, DELETE

via html, somente post e get
*/

// routes.get('/', (req, res) => {
// 	//quando o navegador faz uma chamada de rota, ele sempre utiliza m=o metodo get
// 	return res.json({message:`oie ${req.query.name}`});
// } ); 

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;
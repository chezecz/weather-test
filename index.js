const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

const func = require('./functions');

app.use(cors());

app.use(bodyParser.json());

app.use('/', express.static(__dirname+'/weather-app/dist/weather-app'));

app.get('/:city', async function (req, res) {
	res.json(await func.weather(req.params));
});

app.listen(8080, () => console.log('Server Activated!'));

app.use(function (req, res, next) {
	res.status(404).send('404')
});

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('500');
});
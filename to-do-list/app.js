const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


let tasks = [
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next){
	console.log(`request url ${req.url} \n request method ${req.method}\n`);
	console.log(req.body);
	next();
});

app.use(express.static('public'));
app.use(cors());
app.get('/tasks', function(req, res){
	res.json(tasks);
})

app.listen(port);
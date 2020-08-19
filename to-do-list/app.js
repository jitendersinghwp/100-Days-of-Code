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
});

app.post('/tasks', function(req, res){
	tasks.push(req.body);
	res.json(tasks);
})

app.delete('/tasks/:task', function(req, res){
	tasks = tasks.filter(function(v, i){
		return v.title.toLowerCase() !== req.params.task.toLowerCase(); 
	});
	res.json(tasks);
});

app.listen(port);
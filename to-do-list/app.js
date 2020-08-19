const express = require('express');
const app = express();
const port = 3000;

let tasks = [
];
app.use(express.static('public'));

app.get('/tasks', function(req, res){
	res.json(tasks);
})

app.listen(port);
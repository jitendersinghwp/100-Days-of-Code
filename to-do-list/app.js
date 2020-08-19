const express = require('express');
const app = express();
const port = 3000;

let tasks = [
	{
		'title' : 'Update title tag',
		'description' : 'Update title tag of all pages of website'
	}
]
app.use(express.static('public'));

app.listen(port);
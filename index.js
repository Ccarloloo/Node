const  express = require('express');
const  axios = require('axios');

const  app = express();

  
app.get('/show', async (req, res) => {
	res.send('[{"achievement":"BackEnd What?"},{"sayGreeting":"Hello From StackTrek"}]');
});

app.get('/achievemnet', async (req, res) => {
	res.send('BackEnd What?');
});


app.listen(3001, () => {
	console.log('Server listening on port 3001');
});
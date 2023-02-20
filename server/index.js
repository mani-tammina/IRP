const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./api');
const port = 3000;
const app = express();

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Parses the text as json
app.use(bodyParser.json());

app.use('/api', api);

app.use(express.static('../server/irp'))
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
});


app.listen(port, () => {
    console.log("Server is listening on port " + port);
});


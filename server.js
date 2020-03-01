//Install express server
const express = require('express');
const path = require('path');
const dirname = '.';
const app = express();

const dataGetController = require('./getdata.js');

// Serve only the static files form the dist directory
app.use(express.static(dirname + '/dist/yahoo-financial-history-details'));
app.use('/getHistroy', dataGetController);

app.get('/*', function (req, res) {

    res.sendFile(path.join(dirname + '/dist/yahoo-financial-history-details/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
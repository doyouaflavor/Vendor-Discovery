
require('dotenv').config();

const port = process.env.PORT? process.env.PORT:8080;
let express = require('express');
let path = require('path');
let app = express();

app.use(express.static(__dirname + 'public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port, () => {
    console.log('server is listening on ' + port);
});
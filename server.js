
require('dotenv').config();

const port = process.env.PORT? process.env.PORT:8080;
let express = require('express');
let path = require('path');
let app = express();
let engine = require('express-dot-engine');

var mapDataSheetID = '1wZfJ2J1ntvhDcWuyrJO1OKSMpGgbeU9-Yt_KZd7r0x4';

app.engine('dot', engine.__express);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'dot');
app.use(express.static(__dirname + 'public'));
app.get('/', (req, res) => {
    res.render('sheet-geo-info-viewer', { 
        sheetClientID: process.env.SHEET_CLIENT_ID, 
        sheetAPIKey: process.env.SHEET_API_KEY, 
        sheetID: mapDataSheetID, 
        sheetRange:'H2:I',
        
        mapAPIKey: process.env.MAP_API_KEY
    });
});

app.listen(port, () => {
    console.log('server is listening on ' + port);
});
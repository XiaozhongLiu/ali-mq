let express = require('express');
let config = require('./config');
let ejs = require('ejs-mate');
let app = express();

app.set('views', './static');
app.set('view engine', 'html');
app.engine('html', ejs);
app.use(express.static('./static'));
app.use('/', (req, res) => {
    res.render('consumer.html');
});

app.listen(config.Port, function () {
    console.log('Webapp listening at http://localhost:' + config.Port);
});

console.log(require('./util/crypto').sign('GID_test_sole_1'));
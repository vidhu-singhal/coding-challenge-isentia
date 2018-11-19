let express = require('express');
let app = express();
let morgan = require('morgan');
let bodyParser = require('body-parser');
let port = process.env.PORT || 8080;
let methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
let router = express.Router();

console.log('Running on port '+ port);

router.get('*', function(req, res){
  res.sendFile('index.html', { root: __dirname + '/' });
});

app.use(morgan('dev')); // log every request to the console
app.use(express.static(__dirname + '/')); // Static (public) folder

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use('/', router);

app.listen(port);

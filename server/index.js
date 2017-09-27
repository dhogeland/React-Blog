const port        = 3001,
      express     = require('express'),
      massive     = require('massive'),
      cors        = require('cors'),
      bodyParser  = require('body-parser'),
      config      = require('../config');
      srvCtrl     = require('./serverController'),
      app         = express();


massive(config.postgresql)
  .then(dbInstance => {
    db = dbInstance;
    app.set('db', dbInstance)
  })
  .catch(err => {
    console.log(err)
    return err;
  });

app.use(cors());
app.use(bodyParser.json());

app.get('/api/getInitialSite', srvCtrl.getInitialSite);


app.listen(port, () => console.log('The eagle has landed...'));

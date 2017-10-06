const port        = 5001,
      express     = require('express'),
      massive     = require('massive'),
      cors        = require('cors'),
      bodyParser  = require('body-parser'),
      config      = require('../config');
      srvCtrl     = require('./serverController'),
      app         = express();


massive(config.postgresql)
  .then(dbInstance => {
    const db = dbInstance;
    app.set('db', dbInstance)
    console.log('db connected')
  })
  .catch(err => {
    console.log(err)
    return err;
  });

app.use(cors());
app.use(bodyParser.json());

app.get('/api/getInitialSite', srvCtrl.getInitialSite);

app.listen(port, () => console.log('The eagle has landed...' + port));

module.exports = {

  getInitialSite: (req, res, next) => {
    let db = req.app.get('db');
    db.getInitialSite()
      .then(info => {
        res.status(200).json(info)
      })
      .catch(err => {
        console.log('error on serverController', err)
        res.status(500).json(err)
      })
  }



}

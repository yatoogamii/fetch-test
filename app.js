const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', {});
});

app.get('/films', function (req, res) {
  fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON')
    .then((value) => value.json()
      .then((list) => {
        res.render('index', { films: list });
      }))

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
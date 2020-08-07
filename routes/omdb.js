var express = require('express');
var router= express.Router();
const secrets = require('./secrets.js');

const axios = require('axios');

router.get('/', function(req, res, next){
res.send("Hello I am router");
});

const id=0;
router.get('/search', (req, res, next) => {
    const title = req.query.title
    const url = `${secrets.URL}?apikey=${secrets.API_KEY}&s=${title}`
    axios.get(url)
      .then( function(response) {
        console.log(response.data.Search[0].imdbID);
        res.send(response.data);
        if(id==0)
        {
            console.log("HI");
        }
      })
      .catch(err => {
        res.send(err)
      })
  });
  
  /* Single IMDB Movie */
  router.get('/imdb/:imdbId', (req, res, next) => {
    const imdbId = req.params.imdbId
    const url = `${secrets.URL}?apikey=${secrets.API_KEY}&i=${imdbId}`
    axios.get(url)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.send(err)
      })
  });


module.exports = router;

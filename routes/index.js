var express = require('express');
var Map=require('../models/map');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', { title: 'Express' });
});

router.post('/map', function(req, res, next) {
  console.log('kk');
  var map= new Map( {
    lat: 29.0266, 
    lang: 77.6887,
    status: 'red',
    location: 'BVCOE'
  });
  
  // res.render('map/map', {lat: 28.677067, lang: 77.114024, status: 'red', location: 'Paschim Vihar'})
  map.save(function(err, result){
    if(err){
      console.log('kk'+ err);
    }
    res.redirect('/map');
  });
});


router.get('/map', function(req, res, next){
  Map.find({status: 'red'}, function(err, orders){
   if(err){
     return res.write('Error!');
   }
 //  console.log('get'+ orders);
   res.render('map/map', {marker: orders});
  });
});


module.exports = router;
 
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()){
       return next();
  }
  req.session.oldUrl=req.url;
  res.redirect('/user/signin');
}

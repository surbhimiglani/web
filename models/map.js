var mongoose= require('mongoose');
var Schema=mongoose.Schema;

var schema=new Schema({
 lat: {type: Number, required: true},
 lang: {type: Number, required: true},
 status: {type: String, required: true},
 location: {type: String, required: true}
});

module.exports=mongoose.model('map', schema);
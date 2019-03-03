var mongoose= require('mongoose');
var Schema=mongoose.Schema;

var schema=new Schema({
 lat: {type: Number, required: true},
 lang: {type: Number, required: true},
 status: {type: Number}
});

module.exports=mongoose.model('ph', schema);
var mongoose= require('mongoose');
var Schema=mongoose.Schema;

var schema=new Schema({ 
 lat: {type: Number, required: true},
 lang: {type: Number, required: true},
 deltaz: {type: Number, required: true}
});

module.exports=mongoose.model('accelerator', schema);
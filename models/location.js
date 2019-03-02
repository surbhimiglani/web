var mongoose= require('mongoose');
var Schema=mongoose.Schema;

var schema=new Schema({ 
 type: {type: String, required: true},
 lat: {type: Number, required: true},
 lang: {type: Number, required: true},
 origin: {type: String, required: true},
 destination: {type: String, required: true}
} ,{
    timestamps: true
});

module.exports=mongoose.model('location', schema);
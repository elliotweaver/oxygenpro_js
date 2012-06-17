var mongoose = require('mongoose')
  , Schema      = mongoose.Schema
  , ObjectId    = Schema.ObjectId;

var Case = new Schema({
    name              : String
  , title             : String
  , description       : String
  , categories        : [String]
  , image             : String
  , quick			  : String
  , created           : {type: Date, default: Date.now}
  , updated           : {type: Date, default: Date.now}
  , status            : {type: Number, default: 1}
});
	 
module.exports = mongoose.model('Case', Case);

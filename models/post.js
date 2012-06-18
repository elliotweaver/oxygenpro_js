var mongoose = require('mongoose')
  , Schema      = mongoose.Schema
  , ObjectId    = Schema.ObjectId;

var Post = new Schema({
    title             : String
  , slug              : String
  , featured          : {type: Number, default: 0}
  , post              : String
  , tags              : [String]
  , summary           : String
  , author            : String
  , created           : {type: Date, default: Date.now}
  , updated           : {type: Date, default: Date.now}
  , status            : {type: Number, default: 1}
});
	 
module.exports = mongoose.model('Post', Post);

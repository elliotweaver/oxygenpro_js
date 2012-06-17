var mongoose = require('mongoose')
  , Schema      = mongoose.Schema
  , ObjectId    = Schema.ObjectId;

var Project = new Schema({
    name              : String
  , title             : String
  , description       : String
  , image             : String
  , categories        : [String]
  , type              : String
  , video             : String
  , link              : String
  , photo             : String
  , position          : {type: Number, default: 0}
  , created           : {type: Date, default: Date.now}
  , updated           : {type: Date, default: Date.now}
  , status            : {type: Number, default: 1}
});
	 
module.exports = mongoose.model('Project', Project);

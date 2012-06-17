var mongoose = require('mongoose')
  , Schema      = mongoose.Schema
  , ObjectId    = Schema.ObjectId;

var User = new Schema({
    email             : String
  , password          : String
  , roles             : [String]
  , status            : String
  , accessed          : {type: Date, default: Date.now}
  , created           : {type: Date, default: Date.now}
  , updated           : {type: Date, default: Date.now}
});
	 
module.exports = mongoose.model('User', User);

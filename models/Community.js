var mongoose = require('mongoose')

var CommunitySchema = new mongoose.Schema({
  name: {type: String, unique: true, required: [true, "can't be blank"], index: true},
  symbol: {type: String, unique: true, required: [true, "can't be blank"], index: true},
  address: {type: String, unique: true, required: [true, "can't be blank"], index: true},
  metadata: {type: String}
}, {timestamps: true})

mongoose.model('Community', CommunitySchema)

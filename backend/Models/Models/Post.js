const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let postSchema = new Schema({
  userid: {
    type: String
  },
  username: {
    type: String
  },
  postdescription: {
    type: String
  },
  setstars: {
    type: String
  },
}, {
    collection: 'post'
  })
module.exports = mongoose.model('Post', postSchema)
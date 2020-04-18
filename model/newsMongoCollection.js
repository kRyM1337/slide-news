const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewsCollection = new Schema({
   newsId: String,
   created: String,
   expiration: String,
   articles: [{title: String, url: String, imageUrl: String}]
})

module.exports = mongoose.model('newsdumps', NewsCollection)
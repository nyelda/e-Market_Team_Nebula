const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemName: String,
  itemDescription: String,
  itemPic: String,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;

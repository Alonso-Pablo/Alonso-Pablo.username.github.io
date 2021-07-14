const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please add a email'],
    maxLength: [60, 'Description cannot be more than 60 characters']
  },
  message: {
    type: String,
    required: [true, 'Please add a message'],
    maxLength: [500, 'Description cannot be more than 500 characters']
  },
  date: Date
});

module.exports = mongoose.models.Message || mongoose.model('Message', messageSchema);;
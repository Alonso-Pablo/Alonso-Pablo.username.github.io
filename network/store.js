const Model = require("./model");

function addMessage(messages) {

  const myMessage = new Model(messages);
  myMessage.save();
}

module.exports = {
  add: addMessage
}
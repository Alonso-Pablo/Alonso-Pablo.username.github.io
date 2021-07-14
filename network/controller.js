const store = require('./store');

function addMessage(email, message) {
  // console.log(user) // Si ponemos un objeto con "user": "Pablo" nos daria Pablo en la consola
  // console.log(message) // "message": "Hola" nos daria Hola en la consola.
  return new Promise((resolve, reject) => {

    if (!email || !message) {
      console.error('[messageController] No email or message.')
      reject('Bad Request.');
      return false;
    }

    const fullMessage = {
      email: email,
      message: message,
      date: new Date(),
    };

    store.add(fullMessage);


    resolve(fullMessage);
  })
}

module.exports = {
  addMessage
}
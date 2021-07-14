const express = require('express');
const next = require('next');

const config = require('./config');
const db = require('./db');
db(config.dbUrl);

const server = express();
const router = express.Router();

const dev = config.nodeEnv !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const controller = require('./network/controller')

app.prepare()
.then(() => {

  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  server.use('/message', router);


  router.post('/', function (req, res) {

    // Expected: req.body.email
    // Expected: req.body.message

    controller.addMessage(req.body.email, req.body.message)
      .then((fullMessage) => {
        res.status(201).send({
          "error": "",
          "body": "Created" + fullMessage
        });
      })
      .catch(err => {
        console.log("Error in Post: " + err);

        res.status(400).send({
          "error": "Bad request",
          "body": ""
        });
      })

  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })



  server.listen(config.port, (err) => {
    if (err) throw err
    console.log(`> Ready on ${config.host}:${config.port}`)
  })

})
.catch(e => {
  console.log(e)
});
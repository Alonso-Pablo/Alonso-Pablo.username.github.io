/* eslint-disable import/no-anonymous-default-export */
import db from '../../../db';
import Model from '../../../model/model';

db(process.env.MONGO_URI);

export default async (req, res) => {

  if (req.method === 'POST') {
    try {
      const fullMessage = {
        ...req.body,
        date: new Date(),
      };

      const message = await Model.create(fullMessage);

      res.status(201).json({
        "error": false,
        "success": true,
        "data": message
      });

    } catch (err) {
      res.status(400).json({
        "error": "Bad request",
        "success": false
      });
    };
  } else {
    res.status(400).send({
      "error": "You shall not pass",
      "success": false
    });
  }
};

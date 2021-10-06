const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  /*  async store(req, res) {
    const { name, password } = req.body;

    const user = await User.create({ name, password });

    return res.json(user);
  }, */

  async store(req, res) {
    let response = await User.findOne({
      where: { name: req.body.user, password: req.body.password },
    });
    if (response === null) {
      res.send(JSON.stringify("error"));
    } else {
      res.send(JSON.stringify(response));
    }
  },
};

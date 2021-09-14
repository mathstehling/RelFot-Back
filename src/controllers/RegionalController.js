const Regional = require("../models/Regional");

module.exports = {
  async index(req, res) {
    const regional = await Regional.findAll();
    console.log(regional);
    return res.json(regional);
  },

  async store(req, res) {
    const { name_regional } = req.body;

    const regional = await Regional.create({ name_regional });
    console.log(regional);
    return res.json(regional);
  },
};

const User = require("../models/User");
const Regional = require("../models/Regional");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: "regional" },
    });

    console.log(user.regional);
    return res.json(user.regional);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { name_regional } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const regional = await Regional.findOrCreate({
      where: { name_regional },
    });

    await user.addRegional(regional);
    console.log(regional);
    return res.json(regional);
  },
};

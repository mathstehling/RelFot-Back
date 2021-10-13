const Contract = require("../models/Contracts");
const Regional = require("../models/Regional");

module.exports = {
  async index(req, res) {
    const { regional_id } = req.params;

    const regional = await Regional.findByPk(regional_id, {
      include: { association: "contract" },
    });

    /* console.log(regional.contract); */
    return res.json(regional.contract);
  },

  async store(req, res) {
    const { regional_id } = req.params;
    const { name_contract } = req.body;

    const regional = await Regional.findByPk(regional_id);

    if (!regional) {
      return res.status(400).json({ error: "Regional not found" });
    }

    const [contract] = await Contract.findOrCreate({
      where: { name_contract },
    });
    console.log(contract);

    await regional.addContract(contract);
    return res.json(contract);
  },
};

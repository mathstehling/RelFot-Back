const Contract = require("../models/Contracts");
const Equipment = require("../models/Equipments");
const Regional = require("../models/Regional");

module.exports = {
  async index(req, res) {
    const { regional_id } = req.params;

    const regional = await Regional.findByPk(regional_id, {
      include: { association: "equipments" },
    });

    return res.json(regional);
  },

  async store(req, res) {
    const { regional_id } = req.params;
    const { contract_id } = req.params;
    const {
      number_equipment,
      code_DNIT,
      code_DER,
      state,
      city,
      highway,
      Km,
      date_afericao,
      number_report,
      type,
      number_lanes,
      way,
    } = req.body;

    const regional = await Regional.findByPk(regional_id);
    const contract = await Contract.findByPk(contract_id);

    if (!regional) {
      return res.status(400).json({ error: "Regional not found" });
    }
    if (!contract) {
      return res.status(400).json({ error: "Contract not found" });
    }

    const equipment = await Equipment.create({
      number_equipment,
      state,
      city,
      highway,
      Km,
      date_afericao,
      number_report,
      type,
      number_lanes,
      way,
      regional_id,
      contract_id,
    });

    return res.json(equipment);
  },
};

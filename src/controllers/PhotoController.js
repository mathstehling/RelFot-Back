const Equipment = require("../models/Equipments");
const Photo = require("../models/Photos");

module.exports = {
  async index(req, res) {
    const { equipment_id } = req.params;

    const photos = await Photo.findAll({
      where: { equipment_id },
    });

    return res.json(photos);
  },

  async store(req, res) {
    const { equipment_id } = req.params;
    const { date, uri, name } = req.body;

    const equipment = await Equipment.findByPk(equipment_id);

    if (!equipment) {
      return res.status(400).json({ error: "Equipment not found" });
    }

    const photo = await Photo.create({
      date,
      uri,
      name,
      equipment_id,
    });

    return res.json(photo);
  },
};

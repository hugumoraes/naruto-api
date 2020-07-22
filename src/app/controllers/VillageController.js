import Village from '../models/Village';

class VillageController {
  async list(req, res) {
    const villages = await Village.findAll();

    return res.json(villages);
  }
}

export default new VillageController();

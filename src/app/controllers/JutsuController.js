import Jutsu from '../models/Jutsu';
import Character from '../models/Character';

class JutsuController {
  async associateJutsuToCharacter(req, res) {
    // Organizar e criar regra específica pra essa função
    const jutsu = await Jutsu.findOne({ where: { name: 'Kage Bushin' } });
    const character = await Character.findOne({ where: { first_name: 'Naruto' } });

    await character.addJutsu(jutsu.id);

    return res.json({ character });
  }

  async create(req, res) {
    const { name, nature, kekkei_genkai } = req.body;

    const jutsu = await Jutsu.create({
      name,
      nature,
      kekkei_genkai,
    });

    return res.json(jutsu);
  }
}

export default new JutsuController();

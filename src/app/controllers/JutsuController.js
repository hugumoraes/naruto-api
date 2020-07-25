import Jutsu from '../models/Jutsu';
import Character from '../models/Character';

class JutsuController {
  async list(req, res) {
    const jutsus = await Jutsu.findAll();
    return res.json(jutsus);
  }

  async create(req, res) {
    // Criar Validações
    const { name, nature, kekkei_genkai } = req.body;

    const jutsu = await Jutsu.create({
      name,
      nature,
      kekkei_genkai,
    });

    return res.json(jutsu);
  }

  async associateJutsuToCharacter(req, res) {
    const { jutsu_name, character_name } = req.body;

    const jutsu = await Jutsu.findOne({ where: { name: jutsu_name } });
    if (!jutsu) return res.status(400).json({ error: 'Jutsu not found' });

    let character = await Character.findOne({ where: { first_name: character_name } });
    if (!character) return res.status(400).json({ error: 'Character not found' });

    character = await character.addJutsu(jutsu);

    return res.json({ character });
  }
}

export default new JutsuController();

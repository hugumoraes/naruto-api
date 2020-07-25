import Jutsu from '../models/Jutsu';
import Character from '../models/Character';

class JutsuController {
  async associateJutsuToCharacter(req, res) {
    // Criar validações
    const { jutsu_name, character_name } = req.body;

    const jutsu = await Jutsu.findOne({ where: { name: jutsu_name } });
    const character = await Character.findOne({ where: { first_name: character_name } });

    await character.addJutsu(jutsu.id);

    return res.json({ character });
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
}

export default new JutsuController();

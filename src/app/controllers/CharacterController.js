import { Op } from 'sequelize';

import Character from '../models/Character';
import Village from '../models/Village';
import Jutsu from '../models/Jutsu';

class CharacterController {
  async index(req, res) {
    const characters = await Character.findAll({
      where: {
        name: {
          [Op.substring]: `%${req.query.name}`,
        },
      },
      include: [
        {
          model: Village,
        },
        {
          model: Jutsu,
          through: {
            attributes: ['id'],
          },
        },
      ],
    });
    return res.json(characters);
  }

  async show(req, res) {
    // Criar validações

    const { name } = req.params;
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

    const character = await Character.findOne({
      where: { name: nameCapitalized },
      include: [
        {
          model: Village,
        },
        {
          model: Jutsu,
          through: {
            attributes: ['id'],
          },
        },
      ],
    });

    if (!character) return res.json({ error: 'Character not found' });

    return res.json(character);
  }
}

export default new CharacterController();

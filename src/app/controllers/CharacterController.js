import Character from '../models/Character';
import Village from '../models/Village';
import Jutsu from '../models/Jutsu';

class CharacterController {
  async show(req, res) {
    const { name } = req.params;
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

    const character = await Character.findOne({
      where: { first_name: nameCapitalized },
      include: [{
        model: Village,
      }, {
        model: Jutsu,
        through: {
          attributes: ['id'],
        },
      }],
    });

    return res.json(character);
  }

  async create(req, res) {
    // Criar validações
    const {
      first_name, last_name, clan, village_name, ninja_rank, sex, img,
    } = req.body;

    const village = await Village.findOne({ where: { name: village_name } });
    const village_id = village.id;

    const character = await Character.create({
      first_name,
      last_name,
      clan,
      village_id,
      ninja_rank,
      sex,
      img,
    });

    return res.json(character);
  }
}

export default new CharacterController();

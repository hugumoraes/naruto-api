import Character from '../models/Character';
import Village from '../models/Village';

class CharacterController {
  async show(req, res) {
    const { name } = req.params;
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

    const character = await Character.findOne({
      where: { first_name: nameCapitalized },
      include: [{
        model: Village,
      }],
    });

    return res.json(character);
  }

  async create(req, res) {
    const character = await Character.create({
      first_name: 'Naruto',
      last_name: 'Uzumaki',
      clan: 'Uzumaki',
      village_id: 4,
      ninja_rank: 'Genin',
      sex: 'Masculine',
      jutsus: ['Kage Bushin no Jutsu', 'Rasengan'],
      img: 'img.jpg',
    });

    return res.json(character);
  }
}

export default new CharacterController();

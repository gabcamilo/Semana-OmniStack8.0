const axios = require('axios');
const Dev = require('../models/Dev');
module.exports = {
  async store(req, res){
    console.log(req.body.username);
    const {username} = req.body; //outra forma de obter (desestruturação)
    const userExists = await Dev.findOne({user: username});
    //findOne => método do mongoose

    if(userExists){
      return res.json(userExists);
    }

    //obtem da api do github as infos do usuario
    const response = await axios.get(`https://api.github.com/users/${username}`);
    
    // chama avatar_url de avatar
    const {name, bio, avatar_url: avatar} = response.data;

    //salva as informações na base de dados
    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
  });
    console.log(response.data);
    return res.json(dev)
  }
}
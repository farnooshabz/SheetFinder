const Model = require('../Model');

module.exports = {
  findSong : (req, res) => {
    Model.findSong(req, res);
  }
}
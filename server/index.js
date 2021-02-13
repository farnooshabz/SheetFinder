const express = require('express');
const app = express();
const port = 3000;
const Controller = require('./Controller');

app.get('/api/songs/:songId', Controller.findSong);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
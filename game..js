const fs = require('fs').promises;

async function loadGames() {
  const data = await fs.readFile("./games.json", 'utf8');
  const games = JSON.parse(data);

  console.log(games);
}

loadGames();
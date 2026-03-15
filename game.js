async function loadgame(){
  const res = await fetch("./games.json");
  const game = await res.json();

  console.log(game);

  let games = document.getElementById("games");

  for(let user of game){
    let div = document.createElement('div');
    div.classList.add("div1");
    let a = document.createElement('a');
    a.href=user.game;
   
    let img = document.createElement('img');
    img.src = user.photo;
    img.alt = user.name;
    a.append(img)

    div.append(a);
    games.append(div);
  }
}

loadgame();
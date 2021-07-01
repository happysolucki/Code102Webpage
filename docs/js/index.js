const checkNation = function determineFavNation() {
  let nation;
  while (nation != 'water' && nation != 'earth' && nation != 'fire' && nation != 'air') {
    nation = prompt('Which nation are you a part of? Water, Earth, Fire, or Air?').toLowerCase();
  }
  if (nation === 'water') return 'Water Tribe';
  if (nation === 'earth') return 'Earth Kingom';
  if (nation === 'fire') return 'Fire Nation';
  if (nation === 'air') return 'Air Nomads';
}

const checkFavChar = function determineFavoriteCharacter() {
  let favNation = checkNation();
  let favChar = prompt(`Who's your favorite character from the ${favNation}?`);
  let bar = document.querySelector('.sidebar')
  let userFavs = document.createElement('div');
  let nation = document.createElement("h4");
  let character = document.createElement("h4");
  nation.innerText = `${favNation} Citizen`;
  character.innerText = `${favChar[0].toUpperCase() + favChar.substring(1)} Fan`;
  userFavs.appendChild(nation);
  userFavs.appendChild(character);
  bar.appendChild(userFavs);
}

const repeatImg = function repeatImage() {
  let imgVal = parseInt(prompt('How many air symbols do you want to show on the sidebar?'));
  let bar = document.querySelector('.sidebar');
  let placeholder = document.createElement('div');
  placeholder.classList.add('starContainer');
  for (let i = 0; i < imgVal; i++) {
    let img = document.createElement('img');
    img.src = 'https://i.pinimg.com/originals/d5/bb/51/d5bb51f166808467c89b63aedcc86c41.png';
    img.classList.add('star');
    placeholder.appendChild(img);
  }
  bar.appendChild(placeholder);
}

document.addEventListener('DOMContentLoaded', checkFavChar);
document.addEventListener('DOMContentLoaded', repeatImg);

const checkNation = function determineFavNation() {
  let nation = prompt("Which nation are you a part of? Water, Earth, Fire, or Air?").toLowerCase();
  if (nation === 'water') return 'Water Tribe';
  if (nation === 'earth') return 'Earth Kingom';
  if (nation === 'fire') return 'Fire Nation';
  if (nation === 'air') return 'Air Nomads';
  return checkNation();
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

// function colorChanger() {
//   let colorChange = prompt('What color do you want your background?').toLowerCase();
//   if (colorChange === 'purple') {
//     document.body.style.backgroundColor = 'purple';
//   }
// }

document.addEventListener('DOMContentLoaded', checkFavChar)
// checkFavChar();
// colorChanger();

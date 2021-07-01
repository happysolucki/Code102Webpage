const checkNation = function determineFavNation(nation) {
  if (nation === 'water') return 'Water Tribe';
  if (nation === 'earth') return 'Earth Kingom';
  if (nation === 'fire') return 'Fire Nation';
  if (nation === 'air') return 'Air Nomads';
}

const checkFavChar = function determineFavoriteCharacter() {
  let favNation = prompt("Which nation are you a part of? Water, Earth, Fire, or Air?").toLowerCase();
  let favChar = prompt(`Who's your favorite character from the ${checkNation(favNation)}?`);
  let bar = document.querySelector('.sidebar')
  let userFavs = document.createElement('div');
  let nation = document.createElement("h4");
  let character = document.createElement("h4");
  nation.innerText = `${checkNation(favNation)} Citizen`;
  character.innerText = `${favChar} Fan`;
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

function drawPile(array) {
  let result = '';
  array.forEach((ligne) => {
    result += '-----------------\n';
    ligne.forEach(colonne => {
      result += '| ' + colonne + ' '
    });
    result += '|\n'
  });
  result += '-----------------';
  console.log(result);
}

function addGrain(array, x, y) {
  array[x][y] += 1;
}

function topplePile(array, x, y) {
  if (array[x][y] > 3) {
    array[x][y] = 0;
    if(x - 1 > -1) array[x - 1][y] += 1
    if(x + 1 < array.length) array[x + 1][y] += 1;
    if(y - 1 > -1) array[x][y - 1] += 1;
    if(y + 1 < array.length) array[x][y + 1] += 1;
  }
}

function isStable(array) {
  result = {
    state: true,
    coordinates: []
  }
  array.forEach((ligne, indexRow) => {
    ligne.forEach((colonne, indexCol) => {
      if (colonne > 3) {
        result.state = false;
        result.coordinates = [indexRow, indexCol];
      }
    });
  });
  return result;
}


const pile = [[2, 0, 1, 1], [2, 3, 0, 1], [2, 0, 0, 2], [3, 1, 1, 0]];
console.log(isStable(pile));
console.log('Init: ')
drawPile(pile);

console.log('After1: ')
addGrain(pile, 1, 2);
topplePile(pile, 1, 2);
drawPile(pile);

console.log('After2: ')
addGrain(pile, 1, 1);
topplePile(pile, 1, 1);
drawPile(pile);

console.log('After3: ')
addGrain(pile, 1, 0);
topplePile(pile, 1, 0);
drawPile(pile);

console.log('After4: ')

addGrain(pile, 2, 0);
drawPile(pile);
//{ state, coordinates } = isStable(pile);
state = isStable(pile).state;
coordinates = isStable(pile).coordinates;
while (!state) {
  topplePile(pile, coordinates[0], coordinates[1]);
  state = isStable(pile).state;
  coordinates = isStable(pile).coordinates;
  drawPile(pile);
}


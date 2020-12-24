const finalPosition = function(moves) {
  let currentPosition = [0, 0];

  for (let move of moves) {
    let currentX = currentPosition[0];
    let currentY = currentPosition[1];
    switch (move) {
    case 'north':
      currentY += 1
      break;
    case 'south':
      currentY -= 1
      break;
    case 'west':
      currentX -= 1
      break;
    case 'east':
      currentX += 1
      break;
    }
    currentPosition = [currentX, currentY];
  }

  return currentPosition

}
const judgeVegetable = function (vegetables, metric) {
  let best = 0;
  let winner = '';
  for (let vegetable of vegetables) {
    if (vegetable[metric] > best) {
      best = vegetable[metric];
      winner = vegetable['submitter'];
    }
  }
  return winner;
}

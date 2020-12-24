const chooseStations = function (stations) {
  let goodStations = []; 
  for (const station of stations) {
    let name = station[0];
    let capacity = station[1];
    let type = station[2];
    if (capacity >= 20 && (type == 'school' || type == 'community centre')) {
      goodStations.push(name);
    }
  }
  return goodStations;
}
function createDragon(name, rider, temperment) {
  return (dragon = {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true,
  });
}
function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`;
}
function eat(dragon) {
  dragon.timesEaten += 1;
  if (dragon.timesEaten > 2) {
    dragon.hungry = false;
  }
  return dragon;
}
function findFireBreathers(dragons) {
  var fireBreathers = dragons.filter(
    (dragon) => dragon.temperment === 'aggressive'
  );
  return fireBreathers;
}

module.exports = {
  createDragon,
  greetRider,
  eat,
  findFireBreathers,
};

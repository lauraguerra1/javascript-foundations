function createVampire(name, pet) {
  let vampire = {
    name: name,
    pet: pet ||  'bat',
    thirsty: true,
    ouncesDrank: 0
  }
  return vampire;
}
function encounterDeliciousVictim(vampire) {
 if(vampire.thirsty) {
  return `I WANT TO SUCK YOUR BLOOD!`
 } else {
  return `No thanks, I am too full.`
 }
}
function drink(vampire) {
  if(vampire.ouncesDrank === 40) {
    vampire.ouncesDrank += 10;
    vampire.thirsty = false;
  } else if (vampire.thirsty) {
    vampire.ouncesDrank += 10;
  } 
  return vampire;
}
function inquirePlace(locations, location) {
 if(locations.includes(location)) {
  return `Yes, I have spent some time in ${location}.`;
 } else {
  return `No, I have never been to ${location}.`;
 }
}
function findBatLovers(vampires) {
 var batLovers = vampires.filter((vampire) => vampire.pet === 'bat')
 var batLoverNames = batLovers.map((vampire) => vampire.name)
 return batLoverNames;
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}
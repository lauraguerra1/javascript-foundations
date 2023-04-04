function createBarber(name, earnings, haircuts) {
 return {
    name: name,
    earnings: earnings || 0,
    haircuts: haircuts || []
 }
}

function giveCompliment(haircut) {
  return `This ${haircut.style} looks great!`
}

function cutHair(barber, haircut) {
 barber.haircuts.push(haircut);
 barber.earnings += haircut.price;
 return barber;
}

function listStyles(barber, styleLength) {
//  var haircuts = barber.haircuts.filter((haricut) => haricut.hairLength === styleLength)
//  return haircuts.map((haircut) => haircut.style)
  var haircuts = [];
  for (var i = 0; i < barber.haircuts.length; i ++) {
    if (barber.haircuts[i].hairLength === styleLength) {
      haircuts.push(barber.haircuts[i].style);
    }
  }
  return haircuts;
}

module.exports = { 
    createBarber,
    giveCompliment,
    cutHair,
    listStyles
 };
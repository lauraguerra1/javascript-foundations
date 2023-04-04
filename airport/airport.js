function createAirport(name, airlines, availableGates) {
 let airport = {
  name: name,
  airlines: airlines, 
  availableGates: availableGates
 }
 return airport;
}
function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`
}
function landPlanes(airport, planes) {
  if (airport.availableGates > planes) {
    airport.availableGates -= planes;
    return `Success! Current availability is ${airport.availableGates}.`
  } else {
    var overflow = planes - airport.availableGates;
    airport.availableGates = 0;
    return `Oh no! Not enough gates available. Current overflow is ${overflow}.`
  }
}

function checkAirlineLocations(airports, airline) {
  // var airlineCarriers = [];
  // for (var i = 0; i < airports.length; i++) {
  //   if (airports[i].airlines.includes(airline)) {
  //     airlineCarriers.push(airports[i].name);
  //   }
  // }
  // return airlineCarriers;

  // return airports.filter((airport) => airport.airlines.includes(airline)).map((airport) => airport.name);

  return airports.reduce((acc, curr) => {
  if (curr.airlines.includes(airline)) {
    return acc.concat(curr.name)
  }  else {
    return acc}
  }, [])
}

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
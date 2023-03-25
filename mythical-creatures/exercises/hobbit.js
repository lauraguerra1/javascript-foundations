function createHobbit(name, age) {
  let isOld = false; 
  let isAdult = false; 
  if (age >= 101) {
    isOld = true;
  } else if (age >= 33) {
    isAdult = true;
  }
  let hobbit = {
    name: name || 'unknown', 
    age: age || 0,
    isAdult: isAdult, 
    isOld: isOld, 
    acquaintances: []
}
  return hobbit;
}
function celebrateBirthday(hobbit){
  hobbit.age += 1; 
  if (hobbit.age >= 101) {
    hobbit.isOld = true;
  } else if (hobbit.age >= 33) {
    hobbit.isAdult = true;
  }
  return hobbit;
}
function getRing(hobbit) {
  if (hobbit.name === 'Frodo') {
    return `Here is the ring!`;
  } else {
    return `You can\'t have it!`
  }
}
function meetPeople(hobbit, people) {
  people.forEach((person) => hobbit.acquaintances.push(person))
  return hobbit;
}
function findFriends(hobbit) {
  let friends = hobbit.acquaintances.filter((person) => person.relationship === 'friend');
  let friendNames = friends.map((friend) => friend.name)
  return friendNames;
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}
const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }

const clone1 = {...person};
const clone2 = {...person};
var samePerson = person;


person.age++;
person.country = 'FR';
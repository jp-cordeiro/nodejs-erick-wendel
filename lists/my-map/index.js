require('./my-map');
const service = require('../service');

async function getNames(name) {
  try {
    const people = await service.getPeople(name);

    const names = people.results.myMap((person, index) => person.name);

    return names;
  } catch (error) {
    console.error('NÃO VAI DAR NÃO BAMBAM', error);
  }
}

async function main() {
  const arrayNames = await getNames('a');
  console.log(arrayNames);
}

const fruits = [
  {
    name: 'Limão',
  },
  {
    name: 'Maçã',
  },
  {
    name: 'Melancia',
  },
  {
    name: 'Tomate',
  },
];

const namesOfFruits = fruits.myMap((fruit) => fruit.name);

console.log(namesOfFruits);

main();

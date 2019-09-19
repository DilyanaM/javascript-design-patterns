// write the entire object logic in the private scope of the module
// and exposethe parts we want to be public
// by returning an anonymous object
let fruitsCollection = (function() {
  // private members
  let fruits = [];

  function addFruit(fruit) {
    fruits.push(fruit);
  }

  function removeFruit(fruit) {
    let index = fruits.indexOf(fruit);
    if (index >= 0) {
      fruits.splice(index, 1);
    }
  }

  function getFruits() {
    return JSON.parse(JSON.stringify(fruits));
  }

  // public members
  return {
    addFruit: addFruit,
    removeFruit: removeFruit,
    getFruits: getFruits
  };
})();

fruitsCollection.addFruit("Banana");
fruitsCollection.addFruit("Pineapple");
fruitsCollection.addFruit("Mango");

// prints ["Banana", "Pineapple", "Mango"]
console.log(fruitsCollection.getFruits());

fruitsCollection.removeFruit("Pineapple");

// prints ["Banana", "Mango"]
console.log(fruitsCollection.getFruits());

// Using closures, we can create objects with private and public parts,
// which are called modules
// These are very useful when we want to hide certain parts of an object
// and only expose an interface to the user of the module

let fruitsCollection = (function() {
  // private members
  let fruits = [];

  // public members
  return {
    addFruit: function(object) {
      fruits.push(object);
    },
    removeFruit: function(object) {
      let index = fruits.indexOf(object);
      if (index >= 0) {
        fruits.splice(index, 1);
      }
    },
    getFruits: function() {
      return JSON.parse(JSON.stringify(fruits));
    }
  };
})();

fruitsCollection.addFruit("Apple");
fruitsCollection.addFruit("Mango");
fruitsCollection.addFruit("Banana");

// prints ["Apple", "Mango", "Banana"]
console.log(fruitsCollection.getFruits());

fruitsCollection.removeFruit("Apple");

// prints ["Mango", "Banana"]
console.log(fruitsCollection.getFruits());

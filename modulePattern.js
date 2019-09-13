// Using closures, we can create objects with private and public parts,
// which are called modules
// These are very useful when we want to hide certain parts of an object
// and only expose an interface to the user of the module

let collection = (function() {
  // private members
  let objects = [];

  // public members
  return {
    addObject: function(object) {
      objects.push(object);
    },
    removeObject: function(object) {
      let index = objects.indexOf(object);
      if (index >= 0) {
        objects.splice(index, 1);
      }
    },
    getObjects: function() {
      return JSON.parse(JSON.stringify(objects));
    }
  };
})();

collection.addObject("Apple");
collection.addObject("Mango");
collection.addObject("Banana");

// prints ["Apple", "Mango", "Banana"]
console.log(collection.getObjects());

collection.removeObject("Apple");

// prints ["Mango", "Banana"]
console.log(collection.getObjects());

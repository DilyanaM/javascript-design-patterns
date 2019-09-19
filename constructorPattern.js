// a constructor is a special function in a class
// which initializes an object with some set of default and/or sent-in values

// create an object

var instance = {};

var instance = Object.create(Object.prototype);

var instance = new Object();

// add properties to the object

// the dot notation
instance.key = "Value";

// the bracket notation
instance["key"] = "Value";

// setting a single property
Object.defineProperty(instance, "key", {
  value: "Value",
  writable: true,
  enumerable: true,
  configurable: true
});

// setting multiple properties
Object.defineProperties(instance, {
  "firstKey": {
    value: "First key's value",
    writable: true
  },
  "secondKey": {
    value: "Second key's value",
    writable: false
  }
});

// defines a constructor for Person objects
function Person(name, age, isDeveloper) {
  this.name = name;
  this.age = age;
  this.isDeveloper = isDeveloper || false;
}

Person.prototype.killsBugs = function() {
  console.log(this.isDeveloper
    ? "This person does kill bugs"
    : "This person does not kill bugs");
}

// creates a Person instance with properties
// name: Dilyana, age: 28, isDeveloper: true and a method killsBugs
var person1 = new Person("Dilyana", 28, true);
// creates a Person instance with properties
// name: Linus, age: 32, isDeveloper: false and a method killsBugs
var person2 = new Person("Linus", 32);

// prints out: This person does write code
person1.killsBugs();
// prints out: this person does not write code
person2.killsBugs();

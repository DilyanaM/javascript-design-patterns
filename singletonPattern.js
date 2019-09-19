// Singleton pattern is used when we need only one instance of a class
// For example, if we have an object which contains some configuration
// we don't need to create a new object whenever the configuration object
// is required

const singleton = (function() {
  // private singleton value which gets initialized only once
  let config;

  function initializeConfiguration(values){
    this.randomNumber = Math.random();
    values = values || {};
    this.number = values.number || 5;
    this.size = values.size || 10;
  }

  // export the centralized method for retrieving the singleton value
  return {
    getConfig: function(values) {
      // initialize the singleton value only once
      if (config === undefined) {
        config = new initializeConfiguration(values);
      }

      // return the same config value wherever it is asked for
      return config;
    }
  };
})();

let configObject1 = singleton.getConfig({ "size": 8 });

// prints number: 5, size: 8, randomNumber: someRandomDecimalValue
console.log(configObject1);

let configObject2 = singleton.getConfig({ "number": 8 });

// prints number: 5, size: 8, randomNumber: same randomDecimalValue as in first config
console.log(configObject2);

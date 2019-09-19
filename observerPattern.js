let publisherSubscriber = {};

// send in a container object 
// which will handle the subscriptions and publishings
(function(container) {
  // the id represents a unique subscription id to a topic
  let id = 0;

  // subscribe to a specific topic by sending in
  // a callback function to be executed on event firing
  container.subscribe = function(topic, f) {
    if (!(topic in container)) {
      container[topic] = [];
    }

    container[topic].push({
      id: ++id,
      callback: f
    });

    return id;
  }

  // each subscription has its own unique ID, which we use
  // to remove a subscriber from a certain topic
  container.unsubscribe = function(topic, id) {
    var subscribers = [];
    for (let subscriber of container[topic]) {
      if (subscriber.id !== id) {
        subscribers.push(subscriber);
      }
    }
    container[topic] = subscribers;
    console.log(container[topic]);
  }

  container.publish = function(topic, data) {
    for (let subscriber of container[topic]) {
      subscriber.callback(data);
    }
  }
})(publisherSubscriber);

const subscriptionID1 = publisherSubscriber
  .subscribe("mouseClicked", function(data) {
    console.log("Callback function for a mouse clicked event, event data: " + 
      JSON.stringify(data));
});

const subscriptionID2 = publisherSubscriber
  .subscribe("mouseHovered", function(data) {
    console.log("Callback function for a hovered mouse event, event data: " +
      JSON.stringify(data));
});

const subscriptionID3 = publisherSubscriber
  .subscribe("mouseClicked", function(data) {
    console.log("Another callback function for a mouse clicked event, event data: " +
      JSON.stringify(data));
});

// after publishing an event with its data, all of the
// subscribed callbacks will execute and will receive
// a data object from the object firing the event

// there are 3 console.logs executed
publisherSubscriber.publish("mouseClicked", { "data": "data1" });
publisherSubscriber.publish("mouseHovered", { "data": "data2" });

// unsubscribe from an event by removing the subscription ID
publisherSubscriber.unsubscribe("mouseClicked", subscriptionID3);

// there are 2 console.logs executed
publisherSubscriber.publish("mouseClicked", { "data": "data1" });
publisherSubscriber.publish("mouseHovered", { "data": "data2" });

var GrowDancer = function(top, left, timeBetweenSteps) {
  // Copy the properties of Dancer class
  Dancer.call(this, top, left, timeBetweenSteps);

  // Sets a unique class on the instances jQuery node
  this.$node.addClass('grow-dancer');
};


GrowDancer.prototype = Object.create(Dancer.prototype);
GrowDancer.prototype.constructor = GrowDancer;

GrowDancer.prototype.step = function() {
  // we have a this.$node span object to manipulate in the DOM
  // can call some jQuery functions/methods on this.$node

  this.$node.animate({borderWidth: '20px'});
  this.$node.animate({borderWidth: '5px'});
  //this.$node.toggle();

  // Have to call the step method of Dancer in order to queue up the next step
  Dancer.prototype.step.call(this);
};

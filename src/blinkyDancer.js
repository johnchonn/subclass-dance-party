// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function
//   // blinkyDancer.step = function(...) {setTimeout(dancer.step, timeBetweenSteps);}
//   var oldStep = blinkyDancer.step; // oldStep -> setTimeout(blinkyDancer.step, timeBetweensteps)

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

// Pseudoclassical implementation of blinkyDancer
var BlinkyDancer = function(top, left, timeBetweenSteps) {
  // use call on Dancer to pass in 'this' which would be bound to a new instance of BlinkyDancer
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // currently this.

  this.$node.toggle();
  Dancer.prototype.step.call(this);
};
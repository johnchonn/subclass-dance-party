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

  // Check for nearby dancers
  //  for nearby dancers do something
  //    change the color
  var myTop = this.$node.position().top;
  var myLeft = this.$node.position().left;

  for (var i = 0; i < window.dancers.length; i++) {
    var top = window.dancers[i].$node.position().top;
    var left = window.dancers[i].$node.position().left;
    var distanceY = myTop - top;
    var distanceX = myLeft - left;
    var distance = Math.hypot(distanceX, distanceY);

    if (distance < 50) {
      this.$node.css('top', '+=10px');
    }
  }

  this.$node.animate({borderWidth: '20px'});
  this.$node.animate({borderWidth: '5px'});
  //this.$node.toggle();

  // Have to call the step method of Dancer in order to queue up the next step
  Dancer.prototype.step.call(this);
};

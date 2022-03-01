var SpinDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spin-dancer');
};


SpinDancer.prototype = Object.create(Dancer.prototype);
SpinDancer.prototype.constructor = SpinDancer;


SpinDancer.prototype.step = function() {

  this.$node.animate(
    { deg: 400 },
    { duration: 2400,
      step: function(now) {
        $(this).css( { transform: 'rotate(' + now + 'deg)' } );
      }
    });

  this.$node.animate(
    { deg: -400 },
    { duration: 2400,
      step: function(now) {
        $(this).css( { transform: 'rotate(' + now + 'deg)' } );
      }
    });

  Dancer.prototype.step.call(this);
};
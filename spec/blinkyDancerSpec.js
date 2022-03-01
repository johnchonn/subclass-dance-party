// describe('blinkyDancer', function() {

//   var blinkyDancer, clock;
//   var timeBetweenSteps = 100;

//   beforeEach(function() {
//     clock = sinon.useFakeTimers();
//     blinkyDancer = makeBlinkyDancer(10, 20, timeBetweenSteps);
//     //newBlinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
//   });


//   it('should have a jQuery $node object', function() {
//     expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
//   });

//   it('should have a step function that makes its node blink', function() {
//     sinon.spy(blinkyDancer.$node, 'toggle');
//     blinkyDancer.step();
//     expect(blinkyDancer.$node.toggle.called).to.be.true;
//   });

//   describe('dance', function() {
//     it('should call step at least once per second', function() {
//       sinon.spy(blinkyDancer, 'step');
//       expect(blinkyDancer.step.callCount).to.be.equal(0);
//       clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
//       clock.tick(timeBetweenSteps);

//       expect(blinkyDancer.step.callCount).to.be.equal(1);

//       clock.tick(timeBetweenSteps);
//       expect(blinkyDancer.step.callCount).to.be.equal(2);
//     });
//   });

//   // describe('new BlinkyDancer', function() {
//   //   // New tests for testing our pseudoclassical implementation

//   //   beforeEach(function() {
//   //     newBlinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps); // initialize in new style
//   //   });

//   //   it('should have a jQuery $node object', function() {
//   //     expect(newBlinkyDancer.$node).to.be.an.instanceof(jQuery);
//   //   });

//   //   it('should have a step function that makes its node blink', function() {
//   //     sinon.spy(newBlinkyDancer.$node, 'toggle');
//   //     newBlinkyDancer.step();
//   //     expect(newBlinkyDancer.$node.toggle.called).to.be.true;
//   //   });

//   //   describe('dance', function() {
//   //     it('should call step at least once per second', function() {
//   //       sinon.spy(newBlinkyDancer, 'step');
//   //       expect(newBlinkyDancer.step.callCount).to.be.equal(0);
//   //       clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
//   //       clock.tick(timeBetweenSteps);

//   //       expect(newBlinkyDancer.step.callCount).to.be.equal(1);

//   //       clock.tick(timeBetweenSteps);
//   //       expect(newBlinkyDancer.step.callCount).to.be.equal(2);
//   //     });
//   //   });
//   // });

// });

describe('new BlinkyDancer', function() {

  var newBlinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    newBlinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps); // initialize in new style
  });


  describe('new BlinkyDancer', function() {
    // New tests for testing our pseudoclassical implementation

    it('should have a jQuery $node object', function() {
      expect(newBlinkyDancer.$node).to.be.an.instanceof(jQuery);
    });

    it('should have a step function that makes its node blink', function() {
      sinon.spy(newBlinkyDancer.$node, 'toggle');
      newBlinkyDancer.step();
      expect(newBlinkyDancer.$node.toggle.called).to.be.true;
    });

    describe('dance', function() {
      it('should call step at least once per second', function() {
        sinon.spy(newBlinkyDancer, 'step');
        expect(newBlinkyDancer.step.callCount).to.be.equal(0);
        clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
        clock.tick(timeBetweenSteps);

        expect(newBlinkyDancer.step.callCount).to.be.equal(1);

        clock.tick(timeBetweenSteps);
        expect(newBlinkyDancer.step.callCount).to.be.equal(2);
      });
    });
  });

});
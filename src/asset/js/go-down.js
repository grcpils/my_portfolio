$(document).ready(function() {
  function loopB() {
    $('#go-down').animate ({
      bottom: '-=15',
    }, 1500, 'linear', function() {
      loopA();
    });
  }
  function loopA() {
    $('#go-down').animate ({
      bottom: '+=15',
    }, 1500, 'linear', function() {
      loopB();
    });
  }
  loopB()
});
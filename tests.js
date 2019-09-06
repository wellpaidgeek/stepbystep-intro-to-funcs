QUnit.test( "logArgs has no return value", function( assert ) {
  assert.ok( logArgs(1, 4) === undefined, "Passed!" );
});

QUnit.test( "logArgs logs correctly", function( assert ) {
  sinon.spy(console, 'log');
  logArgs(3, 4);
  var args = console.log.getCall(0).args
  console.log.restore();
  assert.ok(args[0] === 'Called with', 'console.log arg 1 correct');
  assert.ok(args[1] === 3, 'console.log arg 2 correct');
  assert.ok(args[2] === 4, 'console.log arg 3 correct');
});

QUnit.test( "extractNumber returns correct value", function( assert ) {
  assert.ok( extractNumber('GSX-98762') === 98762, "Returns correct number value" );
});
// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.canvas.host.size.attributes.idl
// Description:Getting/setting width/height IDL attributes
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Getting/setting width/height IDL attributes");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  canvas.width = "100";
  canvas.height = "100";
  _assertSame(canvas.width, 100, "canvas.width", "100");
  _assertSame(canvas.height, 100, "canvas.height", "100");
  canvas.width = "+1.5e2";
  canvas.height = "0x96";
  _assertSame(canvas.width, 150, "canvas.width", "150");
  _assertSame(canvas.height, 150, "canvas.height", "150");
  canvas.width = 301.999;
  canvas.height = 301.001;
  _assertSame(canvas.width, 301, "canvas.width", "301");
  _assertSame(canvas.height, 301, "canvas.height", "301");
  assert_throws_js(TypeError, function() { canvas.width = "400x"; });
  assert_throws_js(TypeError, function() { canvas.height = "foo"; });
  _assertSame(canvas.width, 301, "canvas.width", "301");
  _assertSame(canvas.height, 301, "canvas.height", "301");
  t.done();
});
done();

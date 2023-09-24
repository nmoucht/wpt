// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.strokeRect.globalcomposite
// Description:strokeRect is not affected by globalCompositeOperation
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("strokeRect is not affected by globalCompositeOperation");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.globalCompositeOperation = 'source-in';
  ctx.strokeStyle = '#f00';
  ctx.lineWidth = 50;
  ctx.strokeRect(25, 24, 50, 2);
  _assertPixel(canvas, 50,25, 0,0,0,0);
  t.done();
});
done();

var fs = require("fs");
function read(f) {
  return fs.readFileSync(f).toString();
}
function include(f) {
  eval.apply(global, [read(f)]);
}

include('./all.js');

console.log(strReverse('I love Paris'));
/*var fs = require("fs");
function read(f) { return fs.readFileSync(f).toString();}
function include(f) {eval.apply(global, [read(f)]);}

include('./all.js');*/
//import strReverse from './strReverse'
//var app = require('./strReverse');
// import * as fun from './strReverse.mjs'
var tools = require('./strReverse');

console.log(tools.strReverse('I love Paris'));
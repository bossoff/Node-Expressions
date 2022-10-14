
// var util = require('util');

// var name = 'Tony';
// var greeting = util.format('Hello, %s', name);
// util.log(greeting);

var Emitter = require("./emitter");

var emitr = new Emitter();

emitr.on('welcome',function () {
    console.log("Somewhere, Some said welcome");
});

emitr.on('geet',function () {
    console.log("A greeting occure ");
});

console.log("Hello");

emitr.emit('welcome');
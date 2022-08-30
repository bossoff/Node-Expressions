
// greeting 1

// module.exports = function() {
//     console.log('Hello to the world');
// }

// greeting 2

// module.exports.greet = function() {
//     console.log('Hello to the world');
// }

// greeting 3

// function Greetr() {
// 	this.greeting = 'Hello world!!';
// 	this.greet = function() {
// 		console.log(this.greeting);
// 	}
// }

// module.exports = new Greetr();

// greeting 4

// function Greetr() {
// 	this.greeting = 'Hello world!!!';
// 	this.greet = function() {
// 		console.log(this.greeting);
// 	}
// }

// module.exports = Greetr;

// greeting 5

var greeting = 'Hello world!!!!';

function greet() {
	console.log(greeting);
}

module.exports = {
	greet: greet
}

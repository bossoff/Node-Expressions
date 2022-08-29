var greetMe = require('./greet');

greetMe();

// Building Object 
var person = {
    'firstname': "Bossoff",
    'lastname': "Rajih",
    'greeting': function(){
        console.log("Hello "+this.firstname+" "+this.lastname);
    }
}

person.greeting();



// Object Property and prototype

function Person(firstname, lastname) {
	
	this.firstname = firstname;
	this.lastname = lastname;
	
}

Person.prototype.greet = function() {
	console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');

jane.greet();

console.log(john.__proto__);

console.log(jane.__proto__);

console.log(john.__proto__ === jane.__proto__);
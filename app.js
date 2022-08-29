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
// Function Statement

function greetings(){
    console.log("Welcome Boss");
}

greetings();

// Function Firstclass Statment

function sayMyNameByGreetins(fn){
    fn();
}

sayMyNameByGreetins(greetings);

// Function Expression

let greetMe = function(){
    console.log('Hi! Bossoff');
}

greetMe(); //Invoke it here

// We still have another  Firstclass function (LoL)
sayMyNameByGreetins(greetMe);

// Lets use Function Expression on the fly

sayMyNameByGreetins(function(){
    console.log("Hello BadBoi Bossoff");
});
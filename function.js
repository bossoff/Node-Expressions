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


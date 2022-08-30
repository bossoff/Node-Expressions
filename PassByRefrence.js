

// Pass by value

function change(b){
    b = 10;
}

let a = 1;

change(a);

console.log(a);

//  Pass by refrence
function changeObj(d){
    d.prop1 = function() {};
    d.prop2 = {};
}

c = {};
c.prop1;
changeObj(c);
console.log(c);

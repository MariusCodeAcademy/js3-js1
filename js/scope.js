"use strict"; // ijungia klaidu rodyma kurios pagal nutylejima buna nerodomos

// Aibe arba Scope

// Global scope

let x = 10; // kinamasi deklaruotas globalioj aibej
let name = 'bob'


function sayHi(name) {
    // LOcal scope
    debugger
    let x = 15; // kintamasis localioj aibej, local scope;
    console.log("hi " + name);
}
// Global scope

sayHi(name);


function changeX() {
    // galima pakeisti globalius kintamuosius;
    x++;
}

changeX();


console.log(x); // ? 


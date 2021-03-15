console.log('masyvu metodai');

// index        0         1        2        3     
const things = ['apple', 'sister', 'hammer', 'sun'];

console.log(things);

// prideti el i masyvo gala sky
// arr.push('el')

things.push('sky');
console.log('--- array push sky');
console.log(things);

// nuimti pirma masyvo el
things.shift();
console.log('--- array shift');
console.log(things);

// iterpti pirma masyvo el
things.unshift('Numbe one')
console.log('--- array unshift');
console.log(things);

// arr.pop() nuima paskutini masyvo el
let popped = things.pop();
console.log('--- array pop');
console.log(things);
console.log('popped:', popped);


// Array splice
// arr.splice(<nuo kur pradedam>, <kiek istrinti>, <ka prideti>)
console.clear()
console.log(things);

// pakeisti sister ir hammer i sky ir moon

things.splice(1, 2, 'sky', 'moon');
console.log('--- array splice');
console.log(things);

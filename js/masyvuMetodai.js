console.log('masyvu metodai');

// index        0         1        2        3     
let things = ['apple', 'sister', 'hammer', 'sun'];

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

// array splice naudojamas istrinti kazkuriam masyvo elementui
// istrinti the moon kurio index yra 2

let spliced = things.splice(2, 1);
console.log('--- array splice istrinti moon');
console.log(things, 'spliced result:', spliced);

// arr.slice()
let sliced = things.slice(-2)
console.log('--- array slice -2');
console.log(things);
console.log('sliced:', sliced);

// lets add few more elements to array blue, green, yellow
// things.push('blue', 'green', 'yellow');
// things = things.concat('blue', 'green', 'yellow');
things.splice(things.length, 0, 'blue', 'green', 'yellow')
console.log('--- array add blue, green, yellow');
console.log(things);

console.clear()
// naudojant slice gauti nauja masyva su nariais nuo sun iki green
let slicedThings = things.slice(2, 5);
console.log('--- array slice nuo sun iki green ');
console.log(things);
console.log('sliced:', slicedThings);

// naudojant slice gauti nauja masyva nuo sun iki galo
slicedThings = things.slice(2);
console.log('--- array slice nuo sun iki galo ');
console.log(things);
console.log('sliced:', slicedThings);


// masyvu sujungimas su concat things sujungti su concat naujo masyvo pavidalu

let sujugtas = slicedThings.concat(things)
console.log(sujugtas);
console.log(things);




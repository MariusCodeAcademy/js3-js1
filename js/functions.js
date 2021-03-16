console.log('functions js');

// Funkcija tai perpanaudojamas kodo blokas.
// Primiausias turime sukurti aprasyti funkcija kuri suside is siu daliu
// - funkcijos pavadinimas -> naudojamas kad iskviesti funkcija, pavadinimas turetu atspindeti ka daro funkcija
// - funkcijos argumentai/parametrus -> priimamu vietiniu kintamuju sarasas, kurie bus naudojami funkcijos viduje. ju pavadinimai turetu buti logiski
// - funkcijos body -> tai perpnaudojama funkcijos kodo dalis kuri yra vygdoma kaskart iskvietud funkcija.

// Aprasiu funkcija mes ja iskvieciam panaudodami pavadinima ir skliaustelius. 

// Funkcija gali grazinti rezulta i iskvietimo vieta su return;
// return nutraukia funkcijos vygdyma ir grazina rezultata. 

// funcijos aprasymas
function funkcijosPavadinimas(argumntas1, argumentas2) {
    // funkcijos body. kodas kuris bus vygdomas kai iskviesim funkcija
    // argumntas1 - lokalus kintamasis naudojamas tik sioje funkcijoje
    console.log(argumntas1);
}

// funkcijos kvietinys, arba iskvietimas
// funkcijosPavadinimas('kazkoks stringas', 2)
// funkcijosPavadinimas('kazkoks stringas kitoks', 2)


// pagalbine conlsole.log funkc
function lg(tema, value) {
    console.log(`-- ${tema} --`);
    console.log(value);
}



// funkija kuri atspausdina 2 nariu suma 

function addNums(num1, num2) {
    // function body
    let sum = num1 + num2;
    lg('addNums', `sudejus ${num1} ir ${num2}, gausime ${sum}`);
}

// let addRes = addNums(2, 6);
// lg('addRes', addRes)
// addNums(34, 43);
// addNums(23, 11111);
// addNums(3456, 34566);


// funkcija kuri grazina reikme

function multiply(num1, num2) {
    console.log('pries return');
    // debugger
    return num1 * num2;
    console.log('po return');
}

// debugger;
let res = multiply(2, 8);

lg('daugyba', res);

console.log(res);


// parasyti funkicja kuri grazina staciakampio plota. 
// naudojami argumentai/parmetrai ilgis ir plotis

function staciakampoPlotas(ilgis, aukstis) {
    return ilgis * aukstis;
}

// staciakampoPlotas(10, 20);
lg('staciakampio Plotas', staciakampoPlotas(10, 20))
lg('staciakampio Plotas', staciakampoPlotas(5, 50))


// apskiritimo plotas pi r^2

function apskritimoPlotas(spindulys) {
    console.log('Apskritimo plotas');
    return Math.PI * (spindulys ** 2);
}
console.log(apskritimoPlotas(10));

console.clear();

function kambarioTuris(ilgis, plotis, aukstis) {
    return ilgis * plotis * aukstis;
}

function kambarioSienuPlotas(ilgis, plotis, aukstis) {
    // kambario sienu plotas yra perimetras padaugintas is auksio
    let perimetras = (ilgis + plotis) * 2;
    let sienuPlotas = perimetras * aukstis;
    return sienuPlotas;
}

// not best use of variable and funcion names
// function pl(x, y, a) {
//     // kambario sienu plotas yra perimetras padaugintas is auksio
//     let res = (x + y) * 2;
//     let kaGrazinti = res * a;
//     return kaGrazinti;
// }


let sienos = kambarioSienuPlotas(10, 10, 10);
lg('sienos', sienos)

sienos = kambarioSienuPlotas(5, 3, 2.8);
lg('sienos', sienos)

function kabarioLubosGrindys(ilgis, plotis) {
 // ilgis x plotis   * 2
 let grindys = ilgis * plotis;
 return grindys * 2;
}

let lubosGrindys = kabarioLubosGrindys(5, 3);
lg('lubosGrindys', lubosGrindys)



// vienam rulone yra 10kv/m
function kiekReiketuTapetuRulonuKambariui(ilgis, plotis, aukstis) {
    const vienasRulonas = 10;
    
    // debugger
    // gauti visus sienu ir lubu plota
    let sienos = kambarioSienuPlotas(ilgis, plotis, aukstis);
    let grindysLubos = kabarioLubosGrindys(ilgis, plotis);
    // pagal gauta plota paskaiciuoti kiek rulonu reikes 
    let kiekRulonu = (sienos + grindysLubos) / vienasRulonas;

    return kiekRulonu;
}

let kiekRulonu = kiekReiketuTapetuRulonuKambariui(10, 5, 2.5);
console.log('kiekRulonu', kiekRulonu);

function kiekReiketuTapetuRulonuKambariuiAtmetusLangusDuris() {

}

// someFunction();

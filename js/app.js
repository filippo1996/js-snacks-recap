/**
 * Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
 * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
 * Usiamo i nuovi metodi degli array foreach o filter.
 */

const items = ['Filippo','Pippo','Rossi','Pluto','Paperino'];
const lengthItem = items.length - 1;

console.log(items);

/**
 * Funzione che effettua il controllo input se è un numero, 
 * caso contrario invoca nuovamente il prompt
 * @param {number} item 
 * @param {string} message 
 * @returns {number}
 */
const checkInputNumber = (item, message) => {
    while(isNaN(item) || item > lengthItem || item < 0){
        item = parseInt(prompt(message));
    }
    return item;
};

let message = 'inserisci un valore da 0 a ' + lengthItem;
let minValue = parseInt(prompt(message));
minValue = checkInputNumber(minValue, message);

let maxValue = lengthItem;

if(minValue !== lengthItem){
    message = 'inserisci un valore da ' + (minValue + 1) + '  a ' + lengthItem;
    maxValue = parseInt(prompt(message));
    maxValue = checkInputNumber(maxValue, message);

    while(minValue >= maxValue ){
        maxValue = checkInputNumber(NaN, message);
    }
}

console.log(arrayFromTo(items, minValue, maxValue));


/**
 * Funzione che ci ritorna un array con gli indici
 * dall'array passato in base gli elementi passati
 * @param {array} array 
 * @param  {number} index1
 * @param  {number} index2
 * @returns {array}
 */
function arrayFromTo(array, index1, index2){
    return array.filter((ele, index) => index1 <= index && index2 >= index);
}
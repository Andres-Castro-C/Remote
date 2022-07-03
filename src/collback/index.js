/* -----  Entendiendo los collback ---- */
function sum(num1, num2) {
    return num1 + num2;
}

function cals(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(cals(2,6,sum));

//---- Ejecutar un codigo a un tiempo determinado 
setTimeout(() => {
    console.log('Hello JavaScript');
}, 2000);

function saludo(nombre) {
    console.log(`Hello ${nombre}`);
}

setTimeout(saludo, 2000, 'Andres');
/* 
for(let i = 0; i < 10; i++) {
    console.log(i)
}
*/
let n = prompt("Ingrese un número N para sumar los primeros N números pares:");
let suma = 0;
for (let i = 0; i < n * 2; i += 2) {
    suma += i;
}
console.log(`La suma de los primeros ${n} números pares es: ${suma}`);
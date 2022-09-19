let altura = 1.77;        
let peso = 80;       
let imc = peso / (altura * altura);

console.log('imc', imc)

if (imc <= 18.5) {
    console.log('abaixo do peso')
}
if (imc >= 18.6 && imc <= 24.9) {
    console.log('peso ideal')
}
if (imc >= 25 && imc <= 29.9) {
    console.log('sobrepeso')
}
if (imc >= 30 && imc <= 34.9) {
    console.log('obeso 1')
}
if (imc >= 35 && imc <= 39.9) {
    console.log('obeso 2')
}
if (imc >= 40) {
    console.log('obeso 3')
}
let numbers = [10,
15,
16,
5005,
52390903]

let radix = [2,
8,16]

/* for (let i = 0; i < 5; i++){
  console.log(numbers[i].toString(radix[0]))
  console.log(numbers[i].toString(radix[1]))
  console.log(numbers[i].toString(radix[2]))}
 */
console.log(`Résultats en Binaire`)
for ( let number of numbers){
  console.log(`${number} = ${number.toString(radix[0])}`)
}
console.log(`Résultats en Octal`)
for ( let number of numbers){
  console.log(`${number} = ${number.toString(radix[1])}`)
}
console.log(`Résultats en Hexadecimal`)
for ( let number of numbers){
  console.log(`${number} = ${number.toString(radix[2])}`)
}
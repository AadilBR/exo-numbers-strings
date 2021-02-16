/*exemple du cours

let age = 30
console.log(age.toString(2)) // output: 11110
console.log(age.toString(8)) // output: 36
console.log(age.toString()) // default base 10, output: 30
console.log(age.toString(16)) // output: 1e */

/* let numbers = [0x123, 
  0123, 
  0b10011001, 
  0xdeadbeef, 
  0xea7beef, 
  0b1111111111111111, 
  0777];

  for (let i = 0; i < 7; i++){
    console.log(numbers[i].toString(10))
  }; */

  let numbers = [0x123, 
    0123, 
    0b10011001, 
    0xdeadbeef, 
    0xea7beef, 
    0b1111111111111111, 
    0777];

    for (let i = 0; i < numbers.length; i++){
      console.log(numbers[i].toString(10))
    };
let title = `Salammbô de Gustave Flaubert (1862), chapitre 1
cette phrase contient 68 caracteres`
let msg =`C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar.`
 
console.log(title)
console.log(msg)

for (let i = 0; i < msg.length; ++i) {
  console.log(`character ${msg[i]} is at index: ${i}`)
}
console.log()

for (let i = 0; i < 68; ++i) {
  console.log(`character ${msg[i]} is at index: ${i}`)
}
/* console.log(`La longueur de msg est: ${msg.length}`)  = 68*/
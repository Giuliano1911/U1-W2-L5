/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che 
non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli 
strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

//  metodo facile
//  pets.sort()
//  console.log(pets)

//bubble sorting
const bubbleSort = function (arrayOfStrings) {
  const length = arrayOfStrings.length
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (
        arrayOfStrings[j].toLowerCase() > arrayOfStrings[j + 1].toLowerCase()
      ) {
        const temp = arrayOfStrings[j]
        arrayOfStrings[j] = arrayOfStrings[j + 1]
        arrayOfStrings[j + 1] = temp
      }
    }
  }
  return arrayOfStrings
}
console.log('alphabetic order ', bubbleSort(pets))

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets",
     questa volta in ordine invertito.
*/

//metodo facile
// pets.reverse()
// console.log('reversed ', pets)

//duplicazione array
const invertedArr = []
let j = 0
for (let i = pets.length - 1; i >= 0; i--) {
  invertedArr[j] = pets[i]
  j++
}
for (let i = 0; i < pets.length; i++) {
  pets[i] = invertedArr[i]
}
console.log('reversed ', pets)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.push(pets[0])
pets.shift()
console.log('first in last', pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà 
    "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars[0].licensePlate = 'CT111AA'
cars[1].licensePlate = 'CT222BB'
cars[2].licensePlate = 'CT333CC'
console.log('license plates', cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars",
     rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: 'Toyota',
  model: 'YarisGR',
  color: 'red',
  trims: ['bbs', 'gr', 'enkei'],
  licensePlate: 'CT444DD',
})

const removeLastTrim = function (arrayOfCars) {
  for (let i = 0; i < arrayOfCars.length; i++) {
    arrayOfCars[i].trims.pop()
  }
  return arrayOfCars
}

console.log('added a car and removed last trim ', removeLastTrim(cars))

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto 
    nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let i = 0; i < cars.length; i++) {
  justTrims[i] = cars[i].trims[0]
}
console.log('first trim for each model ', justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
     Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === 'b') {
    console.log('first letter: ', cars[i].color.charAt(0), 'Fizz')
  } else {
    console.log('first letter: ', cars[i].color.charAt(0), 'Buzz')
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico
     fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0
while (numericArray[i] !== 32) {
  console.log(numericArray[i])
  i++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch,
     genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ['g', 'n', 'u', 'z', 'd']
const numbersArray = []
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case 'a':
      numbersArray[i] = 1
      break
    case 'b':
      numbersArray[i] = 2
      break
    case 'c':
      numbersArray[i] = 3
      break
    case 'd':
      numbersArray[i] = 4
      break
    case 'e':
      numbersArray[i] = 5
      break
    case 'f':
      numbersArray[i] = 6
      break
    case 'g':
      numbersArray[i] = 7
      break
    case 'h':
      numbersArray[i] = 8
      break
    case 'i':
      numbersArray[i] = 9
      break
    case 'l':
      numbersArray[i] = 10
      break
    case 'm':
      numbersArray[i] = 11
      break
    case 'n':
      numbersArray[i] = 12
      break
    case 'o':
      numbersArray[i] = 13
      break
    case 'p':
      numbersArray[i] = 14
      break
    case 'q':
      numbersArray[i] = 15
      break
    case 'r':
      numbersArray[i] = 16
      break
    case 's':
      numbersArray[i] = 17
      break
    case 't':
      numbersArray[i] = 18
      break
    case 'u':
      numbersArray[i] = 19
      break
    case 'v':
      numbersArray[i] = 20
      break
    case 'z':
      numbersArray[i] = 21
      break
    default:
      console.log(charactersArray[i], ' non è un carattere valido')
  }
}

console.log('letters positions ', numbersArray)

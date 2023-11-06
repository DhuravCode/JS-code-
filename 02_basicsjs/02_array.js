const maleStu = ['Dhruv','Sharvan','Aditya']
const femaleStu = ['Reena','Varsha','Priya']

// console.log(maleStu[2]) //Aditya
// maleStu.push('Prem')
// console.log(maleStu) //[ 'Dhruv', 'Sharvan', 'Aditya', 'Prem' ]

// maleStu.push(femaleStu)
// console.log(maleStu) //[ 'Dhruv', 'Sharvan', 'Aditya', [ 'Reena', 'Varsha', 'Priya' ] ]

// console.log(maleStu.length) //4

//============================================================================================================================

//If you want to merge 2 diff arrayes

const all_stu = maleStu.concat(femaleStu)
console.log(all_stu) //[ 'Dhruv', 'Sharvan', 'Aditya', 'Reena', 'Varsha', 'Priya' ]

                     //OR

console.log(...maleStu, ...femaleStu) //Dhruv Sharvan Aditya Reena Varsha Priya

//===========================================================================================================================

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

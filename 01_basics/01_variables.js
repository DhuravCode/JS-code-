const accountNo = 1234567890
var name = "Dhruv Bhardwaj"
let email = "dhruv123@gmail.com"
var password = "Dhruv@12112"
account_city = "Jaipur"
let state; 

//Here in line 6, We declare a variable but we dont know the value of the variable yet. But if we print this, the value of state is "Undefind". 
// ┌─────────┬───────────────────┐
// │ (index) │      Values       │
// ├─────────┼───────────────────┤   │
// │    1    │     undefined     │
// └─────────┴───────────────────┘


name = "sharvan"
console.log(name) //Here, we can overwrite the variable if we use let or var

email = "fjdfg@gmail.com"
console.log(email)  //Here, we can overwrite the variable if we use let or var

console.log(accountNo)
// accountNo = 98765544134
// console.log(accountNo) //Not Allowed Here, We can not overwrite the variable, if we use const

console.table([accountNo,name,email,password,state]) //we can also print the output in the form of table with the use of console.table().

// In Future, We will not use "var" always we use "const" and "let" because 
//Because of issue in block scope and functional scope
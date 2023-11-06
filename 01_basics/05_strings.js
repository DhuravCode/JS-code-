console.log("hello" + "world") //helloworld

let name = "Dhruv"
let sex = "Male"
let age = 23
console.log(name +" " + sex + " " + age) // Dhruv Male 23

console.log(`My name is ${name} i am a ${sex} and i am ${age} year old`) //My name is Dhruv i am a Male and i am 23 year old

//In JavaScript, you can create a string using the String constructor along with the new keyword. Here's an example of how you can declare a string using the new keyword

let myString1 = new String("Hello, this is a string.") //Another may to declare string in js
console.log(myString1); // Outputs: Hello, this is a string.

let myString = "Hello, this is a string.";
console.log(myString); // Outputs: Hello, this is a string.
console.log(myString.substring(0,4)) //Hell

//List of all String methods

// String length                       // String concat()                 // String split()
// String slice()                     // String trim()
// String substring()                 // String trimStart()
// String substr()                    // String trimEnd()
// String replace()                   // String padStart()
// String replaceAll()                // String padEnd()
// String toUpperCase()               // String charAt()
// String toLowerCase()               // String charCodeAt()

const newStringOne = "   hitesh    "
console.log(newStringOne); //It will print "   hitesh    ", means with space
console.log(newStringOne.trim()); //It will directly print hitesh without any space. 

//trim() function will help Imagine you have a web application with a form that allows users to sign up by entering their email address. 
//Users sometimes unintentionally add extra spaces at the beginning or end of their email addresses.
//The trim() function can be incredibly useful in this scenario to clean up the input before validating or processing it.  

url = 'dhruv.b@gr%20%eyorange.com'
url = url.replace('%20%','')
console.log(url)


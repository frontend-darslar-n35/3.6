// var firstname = prompt("Ismingizni kiriting:");
// var lastname = prompt("Familiyangizni kiriting:");
// var middlename = prompt("Sharifingizni kiriting:");

// // var text = `Assalomu alaykum` + " " + lastname + " " + firstname + " " + middlename;
// var text = `Assalomu alaykum ${lastname} ${firstname} ${middlename}`;
// alert(text);

// var a = 4;
// var b = "12";

// Number(b) yoki b-0 

// var c = a + Number(b);

// NaN - Not a Number

// var c = a * b
// var c = a - b
// c = a - 0 + (b - 0)

// c = b / aInfia = 4;
// var b = "12";


// c = a ** b

// c = b % a

// a = 'ba' + ('a' - 0) + "a"

// a += 3  // a = a + 3
// a -= 3
// a *= 3
// a /= 3

// a++ //post increment
// a--  //post decrement

// ++a // pre increment
// --a  // pre decrement
// --a


// console.log(typeof a) //1
// console.log("Number a:" + console.log(typeof a) //1
// console.log("Number a:" + a--)
// // a = 3
// console.log("Number a after increment:" + ++a)

// a--)
// // a = 3
// console.log("Number a after increment:" + ++a)



// var a = 6 // a = a++

// a = a + 1
// var b = a
// var c = b + a
// a = a + 1

// var c = ++a + a++

// var b = a
// a = a + 1
// a = a + 1
// var c = a + b

// var c = a++ + ++a

// console.log('a =', a)
// console.log('c=', c)

// var a = 3
Math
// var c = a-- + 1 + ++a

// console.log("c=", c)
// console.log("a=", a)

// var a = 63.423

// var result = Math.sqrt(a) // kvadrat ildiz

// var result = Math.floor(a) // Kichik butun songacha yaxlitlash
// var result = Math.ceil(a) // katta butun songacha yaxlitlash

// var result = Math.round(a) // yaxlitlash.

// var result = Math.round(Math.random() * 5 + 5)

// var a = 100
// var b = 200
// var result = Math.random() * (b - a) + a
// result = result.toFixed(9)
// [0, 1]
// [0, b - a]
// [a, b]


// console.log(result)

var password = '123'

// var userPassword = prompt("Parolni kiriting:")
// if (password == userPassword) {
//     alert("Access granted!!!")
// }

// var user = {
//     role: 'guest'
// }

// var password = "123"
// var userPassword = prompt("Parolni kiriting:")
// if (password == userPassword)
//     alert("Parol tog'ri!!")
// else
//     alert("Parol notog'ri!!!");

var age = prompt("Yoshingizni kiriting:") - 0
if (age <= 7) {
    alert("Bemalol uxlayver, Bog'chaga bormasang agarda")
} else if (age <= 18) {
    alert(`Maktabga borish kerak, Siz ${age - 7} sinfda o'qiysiz`)
}
else {
    alert('Universitetga borish kerak')
}
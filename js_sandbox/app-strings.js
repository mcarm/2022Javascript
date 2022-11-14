console.log('test log this')
//alert('test');
/* multi line 

commenting is easy 

*/
console.log('test back from coment');
console.log(123)

var greeting ='hello';

console.log(greeting)

console.log([1,2,3,4])
//will also show index of the array in the console

//log object

console.log({a:1,b:2})
console.table({a:1,b:2});  //lays out in table form
console.error('this is an error') //this will show it in red.

// console.clear(); // this clears the console left off for now.
console.warn('this will be in yellow')

console.time('hello')
console.log(greeting)
console.log(greeting)
console.log(greeting)
console.log(greeting)
console.log(greeting)
console.timeEnd('hello') //this will show how long it takes to run somehting. 

// variables var, let const  generally avoid var. 
var ThisIsTheVariable='this is a string';
console.log(ThisIsTheVariable)
// let and var can be reassigned

var ThisIsTheVariable="the new string";
console.log(ThisIsTheVariable)

//init var
var greeting;
//this is an undefined variable.

///variables letters numbers and __ underscore
//cannot start with a number
//$jquery uses the dollar sign as vars
// _privatevariable - not used often
//multiword:
var firstName='John'; //javascript convetion
var first_name='wahoo'// more for php

//let works like var on global scope


//cont works differently  'constant' cannot be reassigned must have a value. 
//conts arrays and objects can change values
const person={
    name:"me",
    age:32
}

console.log(person)
person.name='sara'
console.log(person)
//const array
const numbers=[1,2,3,4]
console.log(numbers)
numbers.push(6);
console.log(numbers)

//generally makes code more secure.

//8 data types
//primitive data; direclty in location
//reference stored in a heap (dynamic memory)
//string, number boolean, null, undefined, symbols.
//ref:: array, object literal, function, dates, anything else
//data is the value not the variable so a variable can change from a number to a string
//Typescript/Flow supersets of javascript FLow.js 
//primitive

const names = "john doe";
console.log(typeof names);
age=54;
console.log(typeof age);


// undefined

let test;
console.log(typeof test);

//symbo9le
const sym = Symbol();

//reference type array
const hobbies= ['ets', 'what', 'this is what'];

//obj literal:
const address ={city:"boston", state:'mass'};

console.log(address['city']);



let val; 
val=23
//
console.log(val);
console.log(typeof val);
console.log(val.length)
val=String(23)
//
console.log(val);
console.log(typeof val);
console.log(val.length)

val= (new Date)
console.log(val)

val  = "45";
val =Number("45")
console.log(typeof val);
console.log(val.toFixed(2));  //evaluates a number 2 is the number of decimal points

val=parseInt('23')
val=parseFloat('12')

const val1= 3
const val2=5
const sum = val1+ val2
console.log(typeof sum, sum)

const val3= "3"//but when we turn it to a string....
const val4=5
const sum2 = val3+ val4
console.log(typeof sum2, sum2)

//math object
val=Math.PI
console.log(val)
val=Math.round(3.8879)
console.log(val)
val=234.234565892345
console.log(val.toFixed(2))  //round to a fixed deciminal place
val=Math.min(2,23,5,23,65,2,3,56,2,6) //this will find the lowest number
val=Math.random(); //but to get whole.... :
val=Math.floor(Math.random()*20 +1)
console.log(val, "this is val") //seems much more covoluted than python

//Strings
const firstname="my first";
const lastname='hones';
val=firstName+lastname;
console.log(val);
val=firstName+ ' ' +lastname;
console.log(val);
val='Brad ';
val +='lastname'; //+= appends
console.log(val);

//template strings are much easier>> later video

//Escaping ' ' '
let testx= 'that\'s a wrap!' // back slash escapes 

val=firstname.length; //this is like len in pyton;
val =firstName.concat(' ', lastname, 'this is the end!'); // this is like join
console.log(val);

val=firstname.toUpperCase('t');
console.log(val);
val=firstname.toUpperCase();
console.log(val);

val =firstName[0]// this will be the index letter (eg the first letter)
val=firstname.lastIndexOf('f')  //gives the index position of a character in a string
console.log(val);

//substring
val= firstname.substring(0,4)
val= firstName.slice(0, 4)
//split very handy

const str='this is the string i am going to array'
val= str.split(' ')
console.log(val);
console.log(val[2]);

val=str.replace('the', 'whatisthe')
console.log(val)

val=str.includes('true'); // test to see if something is inside a string
console.log(val)


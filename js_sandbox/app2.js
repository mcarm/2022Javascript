//date and time. 

let val;

const today = new Date();
let birthday=new Date('9-10-1981  11:25:00');

val=today.toDateString();
console.log(val);
val=today;
console.log(val);
val=birthday;
console.log(birthday);

// date has a lot of formats: Date("September 11, 1928") for example
let today2
today2=new Date().getMonth();
today2=new Date().getDay();  // this is the day of the week starting with zero
console.log(today2)// starts with 0= January

val=today.getTime();
console.log(val)

birthday.setMonth(2);  //set day, hour, seconds etc
console.log(birthday)

//conditionals if statements comparison operators

const id=100;  //doesnt matter if a string or number - not the production way to do it.
//equal to 
if(id==102){
console.log('correct');
}else{
    console.log('whoops!')
}

//== is an comparison not equal to. 

// not equal to::
if(id!=102){
    console.log('correct');
    }else{
        console.log('whoops!')
    }

// === verifies type too
if(id===102){
    console.log('correct');
    }else{
        console.log('whoops!')
    }
  
// !== verifies type too not equal
if(id!==102){
    console.log('correct');
    }else{
        console.log('whoops!')
    }
    
// use the ===  for prod unless there is a good reason not to

if(id){
    console.log(`the id value ${id}`)  // mremember to use back ticks!
} else{
    console.log(`the id is not ${id}`)
}
let pid
if(pid){
    console.log(`the id value ${pid}`)  // mremember to use back ticks!
} else{
    console.log(`the id is  ${pid}`)  // this will come up 'undefined'
}
let squid
if (typeof squid !== 'undefined'){
    console.log(`the id is ${id}`);
} else{
    console.log('no defined value for this var');
}

//Greater or less

if (id>=200){
    console.log('greater than 200')
} else{
    console.log(`less than 200 the value is ${id}`)
}

//if else 

const color='yellow'
if (color==='red'){
    console.lorg('color is red');
}else if (color==='blue'){
    console.log('color is blue');
} else{
    console.log(`not bleu or red it is ${color}`);
}

//logical operators

const name='Steve';
const age=13;

if(age>0 && age < 12){
    console.log(`${name} is a child`);
} else if(age>=13 && age<=19){
    console.log(`${name} is a teenager`)
}else{
    console.log(`${name} an adult`)
}

// or function ||

if(age<16 || age >65 ){
    console.log(`${name} not in age range`);
} else if(age>=13 && age<=19){
    console.log(`${name} is a teenager`)
}else{
    console.log(`${name} an adult`)
}

//short hand conditionals Ternary operator ?

console.log(id===100 ? "id is correct":"incorrect");

//alert('this is an alert')  // disabled because it stops everythign else.

//curly braces not needed 
if (id===100)
    console.log('this works yes it does ');
else
    console.log('this is the elase')

console.log('why isnt thjis working')

//switches

const color2='red';
switch(color2){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('colro is blue');
        break;
    default:
        console.log('this is default');
        break;
}

//use switches for multiple cases rather than else if
// functions

function greet(firstName="Default First", lastName= "last name default"){
    //fucntion scope
    //console.log('hello');
    return 'hello' + ' '+ firstName + ' ' +lastName;
}

console.log(greet("John", 'Jones'));
console.log(greet());

//function expressions

const square=  function(x){
return x*x;
};

console.log(square(8))

//IIIFES

// (function(name){
// console.log('this is iffee'+ name);

// })();


// (function(name){
// console.log('test function'+name);
// }
// )('brad');

// the above doesn't work. Go back to it error says not a function

//Property Methods

const todo={
    add: function(){
        console.log(':::add to do::');
    }, 
    edit: function(id){
        console.log(`edit todo ID ${id}`);
    }
}

todo.delete= function(){
    console.log(`delete to do.. ${id}`);
}

todo.add();
todo.edit(22);
todo.delete(22);

//loops and iter

const Thisarray=[1,3,4,5,6,6]
console.log(Thisarray[1])

for(let i = 0; i <=10; i++){
//console.log('number is ' +i);
if(i===2){
    console.log('two is my favorite number');
    continue;
}
if(i==5){
    break;
}
console.log('number is ' +i);
}


// for loop when you know many times its going to run
//while loop when its unclear

let i=0;


while(i<10){
console.log('new number '+ i);
i++;
}


//do while.... always runs once no matter what

i= 100;

do{
    console.log('do number ' +i);
    i++
}

while(i<10);  // this runs even though i is already over a 100

const cartypes=['ford', 'xke','dodge','thiscar', 'penelope pitstop'];

for ( i=0;i <cartypes.length;i++){
    console.log(cartypes[i])
}

console.log(`this is the cartype array length ${cartypes.length}`);

cartypes.forEach(function(car){
    console.log("this is the for each function " +car);
});

//use foreach loops for looping throw arrayws

//MAP
const userobject =[
{id:1, name:'John'},
{id:2, name:'2John'},
{id:3, name:'3John'},
];

const ids=userobject.map(function(user)
{
return user.id;
});

console.log(ids);

cartypes.forEach(function(car, index, array){
console.log(`${index} : ${car}`);
console.log(array)
});

//for in loop

const user2 =
    {firstname:'testboy', 
    name:'John',
    age: 30
} ;

for (let x in user2){
console.log(`${x} : ${user2[x]}`);
console.log(x)
};

// Window Objects - DOM document object model
//alert
// alert('this is an alert'); // disabled 
// const input=prompt();
// alert(input);
//confirm
// if(confirm('sure?')){
//     console.log('yes');
// }else{
//     console.log('no');
// }

let val2;
//outer height and width
val=window.outerHeight;
val=window.outerWidth;
val=window.innerHeight;
val=window.innerWidth;

//scroll points
val=window.scrollY; //scrollbars have to be on for this.  Good for animations at scroll points

//location and history objects
val=window.location;
val=window.location.hostname;  //also port, anything in the all 
val=window.location.search;  
console.log(val);
val=window.location.href;  
console.log(val);

//redirect
//window.location.href='http://google.com'  //or window locaiton reload


//history object
//window.history.go(-2);   //brings you back in history
val =window.history.length;
console.log("this is history lenght" + val)

val=window.navigator;  //check out all the object functions
console.log(val)  // you can't do a "+" with this since its an object;
val=window.navigator.platform;  //check out all the object functions
console.log(val)  // you can't do a "+" with this since its an object;

// SCOPE
var a=1;
let b=2;
const c=3 ;

function test(){
    var a=4;
    let b=5;
    const c=6 ;
console.log('function SCOPE TEST', a,b,c);
//these variables are within this function
}
test()
console.log('GLOBAL SCOPE TEST', a,b,c);

// QUESTION how to access variables like in python from defs? 

if(true){
    //block scope
    var a=4;
    let b=5;
    const c=6 ;
    console.log('if  SCOPE TEST', a,b,c);
}

console.log(`this is var A ${a}`);

console.log(test.toString);
// var caused confusion and security risks in javascript

for(let a=0; a<10; a++){
console.log(`loop ${a}`)
}

for(var a; a<10; a++){
    console.log(`new loop ${a}`)  //this would access the last 'a' var
    }

// the DOM Document object model
// do the whole document html is a dom object and elements within can be accessd


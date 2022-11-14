//templates

const Name='first name';
const age =33;
const job='web developer';
const city= 'new york';
let html;

//without template strings(es5)
html='<ul><li>Name:'+ Name + '</li></ul>' +'<ul><li>age:'+ age + '</li></ul>' ;

//document.body.innerHTML=html;

//works but not easy.
//template string method::
//use back ticks (to the left of 1 key)

function hello(){
    return 'hello';
}

html= `
<ul>
 <li>Name: ${Name}</li>
 <li>age: ${age}</li>
 <li>job: ${job}</li>
 <li>city: ${city}</li>
 <li>none: nothing honey</li>
 <li>${2+2}</li>
<li>${hello()}</li>
<li>${age>32? 'over 32 this is rendered by a calculation': 'this doesnt print'}</li>
<li></li>
</ul>
`
;
document.body.innerHTML=html;


//arrays - store multple values, iterated, etc
const numbersarrays=[2,2,35,564,345,53,563];
const numbersarrays2=new Array(22,35,235,235,); 
//both are arrays
const fruit=['aale', 'orange','pears', 23, 'test', true, undefined, null, {a:1, b:1}, new Date() ];
console.log(fruit) 
console.log('this will yeild fruit 8 A::',fruit[8].a) 

let val;
val=numbersarrays.length
val=Array.isArray(numbersarrays);

val= numbersarrays[2] ; // this is how you get an index value
console.log(numbersarrays);
console.log(val);

//insert into an array
numbersarrays[2]="wahoo"
console.log(numbersarrays)

val= fruit.indexOf('orange')
console.log(val)

val= numbersarrays.indexOf(564)
console.log(val)

//mutating arrays.
// add by push

numbersarrays.push('this is added on');
console.log(numbersarrays);
numbersarrays.unshift('this is added on');
console.log(numbersarrays);

//removing:
numbersarrays.pop();
console.log(numbersarrays);

numbersarrays.shift();
console.log(numbersarrays);

//splice
numbersarrays.splice(1,3); //start and end values

console.log(numbersarrays)

// to erase:
numbersarrays.reverse();

//Concatenate arrays
val= numbersarrays.concat(numbersarrays2); // puts them togeter
val=fruit.sort();

//numbers srot
val=numbersarrays.sort(function(x,y){
    return x-y;
})

console.log(numbersarrays)

//FIND:
function under50(num){
    return num < 70;
}
;
const numbersarrays3=[222,222,35,564,345,53,563];
val=numbersarrays3.find(under50)
console.log(numbersarrays3)
console.log("updated  under fifty", val)

//************************* */
function isBigEnough(value) {
    return value >= 10;
  }
  var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtered is [12, 130, 44]
console.log(filtered)
//************************* */

// Object Literals:

let person={
    name:"me",
    age:32,
    email: 'steve@aol.com',
    hobbies:['sports', 'hunting'],
    address:{
        city:'new bedford',
        state:'ma'
    },
    getBirthYear: function(){
        return 2022-this.age;  //have to use the this keyword to access var
    }
    }
    
let val2 ;

val2=person;

val2=person.name;
// val=person.['name']; // you can do it this way too

console.log(val2);
console.log(person.address.city); //
val2=person.hobbies;
console.log(val2);

val2=person.getBirthYear();
console.log(val2);


const newpeople=[
    {name:'name1', age:32},
    {name:'name2', age:33},
];

for(let i= 0; i < newpeople.length; i++){
console.log(newpeople[i].name);
}

// how do get that into here:
html= `
<ul>
 <li>Name: ${Name}</li>
 <li>age: ${age}</li>
 <li>job: ${job}</li>
 <li>city: ${city}</li>
 <li>none: nothing honey</li>
 <li>${2+2}</li>
<li>${hello()}</li>
<li>${age>32? 'over 32 this is rendered by a calculation': 'this doesnt print'}</li>
<li></li>
</ul>
`
;


//dates and time date object


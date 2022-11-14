//dom model building

let val;

val=document; // this gives the whole doc
//val=document.all;
//val=document.all[0];
val=document.all.length;
val=document.doctype;
val=document.URL; //domain, characterSet; contentType;

val=document.forms[0].id;

for (i in document.forms){
console.log(i);
}

val=document.links;

val=document.images;  //get images?
console.log(val);

//for each 

let scripts=document.scripts;

let scriptsarray=Array.from(scripts);


scriptsarray.forEach(function(script) {
    console.log(script);
});

//dom selectors

document.getElementById('test');

console.log(document.getElementById('task-title'));
document.getElementById('task-title').id;
console.log(document.getElementById('task-title').id);
//

// change styles

document.getElementById('task-title').style.background='orange';  // can do any css 
//document.getElementById('task-title').style.display='none';  // can do any css 

//Change content
document.getElementById('task-title').textContent="this is a test"
document.getElementById('task-title').innerText="this is text only so <p>paragrah shows up</p>"
//document.getElementById('task-title').innerHTML="<span style='color:red'>this is a test</span>"
//

const TaskTitle=document.getElementById('task-title'); // this is the prefered way to do it make a variable first
TaskTitle.innerText="this is the text via VAR"

//query selector is much more powerful....can select by anything

console.log(document.querySelector('.card-title'))  //can use any selector h5, p ect if more than one gets the first one.

// to get all selectors.

document.querySelector('li:nth-child(3)').style.color='yellow'  //can use pseudo classes, odd, even, first last, etc

document.querySelector('li:nth-child(odd)').style.background='#ccc' 

//query selector all: 

const items= document.getElementsByClassName('collection-item');
console.log(items) ;//this gets a collection.
console.log(items[0]) ;

const listItems=document.querySelector('ul').getElementsByClassName('collection-item');

//convert an html collection to an array

let lis=document.getElementsByTagName('li');
lis=Array.from(lis);  //creates an array from the collection
lis.reverse();
console.log(lis);

let MyTest=document.querySelectorAll('li');
console.log(MyTest);
MyTest[2].style.color='blue';

//
lis.forEach(function(li){
    li.style.color='orange';
});

lis.forEach(function(li, index){
    li.textContent= `${index}:: This is a var`
});

//queryseletor all  returns a node list

const listitemsnew=document.querySelectorAll('ul.collection li.collection-item');

console.log(listitemsnew);

const liOdd=document.querySelectorAll('li:nth-child(odd)');
const liOEven=document.querySelectorAll('li:nth-child(even)');

//this makes every other list item grey
liOdd.forEach(function(li, index){
li.style.background='#ccc';
});

//even works with an uncoverted html collection
for(let i=0; i<liOEven.length; i++){
    liOEven[i].style.background="red";
};

//traversing the DOM

let valdom;
const listdom=document.querySelector('ul.collection');
const listitemdom=document.querySelector('li.collection-item:first-child');
 //valdom=listitemdom;

//get child notes

//valdom=listdom.childNodes;
//use get dhildren element notes
//valdom=listdom.children;
valdom=listdom.childNodes[0].nodeName;
console.log(valdom);
valdom=listdom.childNodes[1].nodeName;
console.log(valdom);
valdom=listdom.childNodes[8];
console.log(valdom);
//1- Element
//2=attribute
// 3. Text nodeName
// 8 Comment9 document itstel
// 10 doctype
// children is use more than childnode becaues children are the elements 
//chlidren of children

valdom= listdom.children[3].children[0];
valdom = listdom.firstChild;
valdom = listdom.firstElementChild;  // also last


valdom = listdom.childElementCount;
console.log(valdom);

valdom =  listitemdom.nextElementSibling;
console.log(`this is next element: ${valdom}`);
valdom =  listitemdom.nextElementSibling;
console.log(valdom);
valdom =  listitemdom.nextElementSibling;
console.log(`letus try this again: ${listitemdom.nextElementSibling.textContent}`); // this pulls out the text otherwise doesn't seem to work. 

//get previous

valdom=listitemdom.nextElementSibling.previousElementSibling;
console.log(valdom);

//how to create Elements::
const liConst = document.createElement('li');
liConst.className="collection-item";
//console.log(liConst);

//create text node and appenf
const li =document.createElement('li');
li.className="collection-item";
li.id='new item';
li.appendChild(document.createTextNode('**this is created text'));
console.log(li);

const link=(document.createElement('a'));
link.className="delete-item secondary-content";
//add icon html
link.innerHTML='<i class="fa fa-remove"></i>';

//append link into li:
li.appendChild(link);

//applend child as ul
document.querySelector('ul.collection').appendChild(li);

//replacing elements in the dom changing, ect 

//replacing element

const newHeading=document.createElement('h2');
//add id
newHeading.id="task-title";
// new text node
newHeading.appendChild(document.createTextNode('task list new'));

const oldHeading=document.getElementById('task-title');

//parent
const cardAction=document.querySelector('.card-action');

// replace
cardAction.replaceChild(newHeading,oldHeading)

//remove element
const lis2=document.querySelectorAll('li');
const list=document.querySelector('ul');

//removing a list item:
lis2[0].remove();  //first we selected all li items then removed the first one in the list.

//remove by child
list.removeChild(lis2[3]);


console.log(list.firstChild, '^ first child')
//classes and attributes
const firstLi=document.querySelector('li:first-child');
console.log(firstLi.children[0], "*** first child");

const link2=firstLi.children[0];
console.log(link2)
val=link2.className;

console.log(val);
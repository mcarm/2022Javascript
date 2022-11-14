const lis=document.querySelectorAll('li');
const list=document.querySelector('ul');

//remove list item
lis[0].remove();

//Remove child element
list.removeChild(lis[3]);

//Classes and atr

const firstLi = document.querySelector('li:first-child');
console.log(firstLi)
const link =firstLi.children[0];

console.log(link);

let val
val=link.className;
val=link.classList;
val=link.classList[0];
link.classList.add('testclass');
val=link
console.log(val);
link.classList.remove('testclass');
val=link
console.log(val);
link.classList.add('anoter-class-add');
console.log(val);

//attributes

val=link.getAttribute('href');
val=link.setAttribute('href', 'http://duckduckgo.com');

link.setAttribute('title', 'this is the added title')
val=link.hasAttribute('title'); // true false if exists
link.removeAttribute('title');
link.setAttribute('href',"#")

console.log(val)

newdiv=document.createElement('div');
newdiv.innerHTML="this is the div";
document.querySelector('body').appendChild(newdiv);

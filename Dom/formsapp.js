//Forms and input::

const form= document.querySelector('form');
const taskInput=document.getElementById('task');

const heading2=document.querySelector('h4');

//clear the default input bvalue
taskInput.value='';

//form.addEventListener('submit', newRunevent);//
taskInput.addEventListener('keydown', newRunevent);

function newRunevent(e){
console.log(`event type is: ${e.type}`);
console.log(taskInput.value);
heading2.innerText=e.target.value;
//heading2.innerText="now";
//e.preventDefault();
};


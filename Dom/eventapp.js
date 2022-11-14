//event listener
//event listern takes two arugments event and what happens
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
// console.log('this is the event listener')
// e.preventDefault(); //this keeps the buttons default behavior
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

//events - mouseover, click others listed

function onClick(e){
    console.log('clicked', Date());
    e.preventDefault();
    let val;
    val=e
    //can get all values:
    val=e.target.className;
    val=e.target.classList;
    console.log(val);
    console.log(val[2]);
    e.target.innerText="this is the new button lable"
heading.textContent=(`Mousex: ${e.offsetX} MouseY: ${e.offsetY}`);
    val=e.type;
    val=e.clientY;
    val=e.clientX;
    val=e.offsetX;
    console.log(val);
};

//mouse events:

const clearBtn=document.querySelector('.clear-tasks');
const card=document.querySelector('.card');
const heading=document.querySelector('h5');

function runEvent(e){
console.log(`Event type: ${e.type}`);
heading.textContent=(`Mousex: ${e.offsetX} MouseY: ${e.offsetY}`);
document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY}, 24)`
}

//click
// clearBtn.addEventListener('click',runEvent);
// clearBtn.addEventListener('dblclick',runEvent);
// clearBtn.addEventListener('mousedown',runEvent);
// clearBtn.addEventListener('mouseup',runEvent);
//mouse enter
clearBtn.addEventListener('mouseenter',runEvent);
//mouse leave
clearBtn.addEventListener('mouseleave',runEvent);

//mous move
card.addEventListener('mousemove', runEvent);

//Forms and input::

const form= document.querySelector('form');
const taskInput=document.getElementById('task');

const heading2=document.querySelector('h4');

//clear the default input bvalue
taskInput.value='';

//form.addEventListener('submit', newRunevent);//

function newRunevent(e){
console.log(`event type is: ${e.type}`);
console.log(taskInput.value);
heading2.innerText=e.target.value;
//e.preventDefault();
};

taskInput.addEventListener('keydown', newRunevent);
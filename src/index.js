// imports section
import { todoFormOpen, todoFormClose } from "./todo_modal";
import { todoCreate } from "./todo_create";
import { todoSort } from "./todo_sort";


// selectors section
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const formBtn = document.querySelectorAll('[data-type="formBtn"]');
const type = document.getElementById('type');
const dueDate = document.getElementById('dueDate');
const dueTime = document.getElementById('dueTime');
const priority = document.getElementById('priority');

// Logic for the form popup functionality 
overlay.addEventListener('click', () =>{
    let modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        todoFormClose(modal);
    });
});

formBtn.forEach((element) => {
    element.addEventListener('click', ()=>{ 

        todoFormOpen() });
});

closeModalButtons.forEach((element) => {
    element.addEventListener('click', ()=>{ 

        todoFormClose() });
});

// logic to hide/show form options based on todo type
type.addEventListener('change', () =>{
    let x = document.getElementById('type');
    if (x.value === 'Note'){
        dueDate.style.display = 'none';
        dueTime.style.display = 'none';
        priority.style.display = 'none';
    }else {
        dueDate.style.display = 'inline';
        dueTime.style.display = 'inline';
        priority.style.display = 'inline';
    }
})

// Logic for todo creation 
const submitButton = document.querySelector('[data-submit-button]');

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    todoCreate()
})

// logic for todo sorting
todoSort()

//
const modalBody = document.querySelector('.modalBody');
modalBody.appendChild(document.createElement('p').innerHTML = 'fuck')
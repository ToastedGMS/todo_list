// imports section
import { todoFormOpen, todoFormClose } from "./todo_modal";
import { todoCreate } from "./todo_create";
import { todoSort } from "./todo_sort";


// selectors section
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const formBtn = document.querySelectorAll('[data-type="formBtn"]');

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
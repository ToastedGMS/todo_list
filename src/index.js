// imports section
import { todoFormOpen, todoFormClose } from "./todo_modal";
import { todoSort } from "./todo_sort";


// selectors section
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const formBtn = document.querySelectorAll('[data-type="formBtn"]');

// modal section

// close modal when overlay is clicked
overlay.addEventListener('click', () =>{
    let modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        todoFormClose(modal);
    });
});

// Logic for the modal popup functionality 

formBtn.forEach((element) => {
    element.addEventListener('click', ()=>{ 

        todoFormOpen() });
});

closeModalButtons.forEach((element) => {
    element.addEventListener('click', ()=>{ 

        todoFormClose() });
});

// logic for todo sorting
todoSort();
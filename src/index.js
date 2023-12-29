import { Todo, todoList } from "./todo_create";
import { todoNotes, todoTasks, todoSort } from "./todo_sort";
import { projects } from "./todo_projects";
import { todoFormOpen, todoFormClose } from "./todo_modal";

const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const formBtn = document.querySelectorAll('[data-type="formBtn"]');

overlay.addEventListener('click', () =>{
    let modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        todoFormClose(modal)
    })
})

formBtn.forEach((element) => {
    element.addEventListener('click', ()=>{ 

        todoFormOpen() })
})

closeModalButtons.forEach((element) => {
    element.addEventListener('click', ()=>{ 
        const modal = document.querySelector('.closeBtn')

        todoFormClose() })
})

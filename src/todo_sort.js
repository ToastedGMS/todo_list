import { todoList } from "./todo_class";
import { cardCreate } from "./todo_card";

let todoTasks = [];
let todoNotes = [];

const todoSort = () => {
    const noteBtn = document.querySelector('[data-notes]');
    const taskBtn = document.querySelector('[data-tasks]');
    const homeBtn = document.querySelector('[data-all]')

    noteBtn.addEventListener('click', () => {
    cardCreate(todoNotes)
    })

    taskBtn.addEventListener('click', () => {
    cardCreate(todoTasks)
    })

    homeBtn.addEventListener('click', () => {
        cardCreate(todoList)
    })
};

export { todoTasks, todoNotes, todoSort }
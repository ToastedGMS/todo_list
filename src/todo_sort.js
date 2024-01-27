import { todoList } from "./todo_class";
import { cardCreate } from "./todo_card";

let todoTasks = [];
let todoNotes = [];
let todoCheckLists = [];

const todoSort = () => {
    const projectBtn = document.querySelector('[data-projects]');
    const listBtn = document.querySelector('[data-lists]');
    const noteBtn = document.querySelector('[data-notes]');
    const taskBtn = document.querySelector('[data-tasks]');
    const homeBtn = document.querySelector('[data-all]');

    projectBtn.addEventListener('click', () => {
    })

    noteBtn.addEventListener('click', () => {
    cardCreate(todoNotes)
    })

    taskBtn.addEventListener('click', () => {
    cardCreate(todoTasks)
    })

    homeBtn.addEventListener('click', () => {
        cardCreate(todoList)
    })

    listBtn.addEventListener('click', () => {
        cardCreate(todoCheckLists)
    })
};

export { todoTasks, todoNotes, todoCheckLists, todoSort }
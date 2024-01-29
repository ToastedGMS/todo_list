import { todoList } from "./todo_class";
import { cardCreate } from "./todo_card";

let todoTasks = [];
let todoNotes = [];
let todoCheckLists = [];

const todoSort = () => {
    //creates todo cards based on todo type array
    const listBtn = document.querySelector('[data-lists]');
    const noteBtn = document.querySelector('[data-notes]');
    const taskBtn = document.querySelector('[data-tasks]');
    const homeBtn = document.querySelector('[data-all]');

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
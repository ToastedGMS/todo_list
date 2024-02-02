import { todoList } from "./todo_class";
import { cardCreate } from "./todo_card";

let todoNotes = [];
let todoTasks = [];
let todoCheckLists = [];


const todoSort = () => {
    //creates todo cards based on todo type array
    const listBtn = document.querySelector('[data-lists]');
    const noteBtn = document.querySelector('[data-notes]');
    const taskBtn = document.querySelector('[data-tasks]');
    const homeBtn = document.querySelector('[data-all]');

    homeBtn.addEventListener('click', () => {
        cardCreate(todoList)
    })

    noteBtn.addEventListener('click', () => {
        todoNotes.splice(0, todoNotes.length)
        todoList.forEach((e) => {
            if (e.type === 'Note'){
                todoNotes.push(e);
            }
            cardCreate(todoNotes)
        })
    })

    taskBtn.addEventListener('click', () => {
        todoTasks.splice(0, todoTasks.length)
        todoList.forEach((e) => {
            if (e.type === 'Task'){
                todoTasks.push(e);
            }
            cardCreate(todoTasks)
        })    })

    listBtn.addEventListener('click', () => {
        todoCheckLists.splice(0, todoCheckLists.length)
        todoList.forEach((e) => {
            if (e.type === 'List'){
                todoCheckLists.push(e);
            }
            cardCreate(todoCheckLists)
        })    })
};

export { todoTasks, todoNotes, todoCheckLists, todoSort }
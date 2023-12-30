import { cardCreate } from "./todo_card";
import { Todo, todoList } from "./todo_class";


const todoCreate = () => {
    let type = document.getElementById('type').value;
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    let dueTime = document.getElementById('dueTime').value;
    let priority = document.getElementById('priority').value;

    let newTodo = new Todo(type, title, description, dueDate, dueTime, priority);

    newTodo.pushToList()
    cardCreate()
    console.log(newTodo)
    console.log(todoList)
}

export { todoCreate }
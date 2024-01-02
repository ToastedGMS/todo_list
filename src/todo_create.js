import { cardCreate } from "./todo_card";
import { Todo, todoList } from "./todo_class";
import { todoTasks, todoNotes, todoSort } from "./todo_sort";


const todoCreate = () => {
    let type = document.getElementById('type').value;
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    let dueTime = document.getElementById('dueTime').value;
    let priority = document.getElementById('priority').value;

    let newTodo = new Todo(type, title, description, dueDate, dueTime, priority);

    if (newTodo.type === 'Task'){
        todoTasks.push(newTodo);
    } else if (newTodo.type === 'Note'){
        todoNotes.push(newTodo);
    }

    newTodo.pushToList()
    cardCreate(todoList)
}

export { todoCreate }
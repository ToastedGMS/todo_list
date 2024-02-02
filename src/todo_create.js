import { cardCreate } from "./todo_card";
import { Todo, todoList } from "./todo_class";
import { todoTasks, todoNotes, todoCheckLists } from "./todo_sort";


const todoCreate = () => {
    let type = document.getElementById('type').value;

    let titleElement = document.getElementById('title');
    let title = titleElement ? titleElement.value : undefined;

    let descriptionElement = document.getElementById('description');
    let description = descriptionElement ? descriptionElement.value : undefined;

    // Check if the element with ID 'dueDate' exists
    let dueDateElement = document.getElementById('dueDate');
    let dueDate = dueDateElement ? dueDateElement.value : undefined;

    // Check if the element with ID 'dueTime' exists
    let dueTimeElement = document.getElementById('dueTime');
    let dueTime = dueTimeElement ? dueTimeElement.value : undefined;

    // Check if the element with ID 'priority' exists
    let priorityElement = document.getElementById('priority');
    let priority = priorityElement ? priorityElement.value : undefined;

    // Handle list items
    let listItems = [];
    let listItemsContainer = document.getElementById('listItemsContainer');
    if (listItemsContainer) {
        let listItemInputs = listItemsContainer.getElementsByTagName('input');
        for (let input of listItemInputs) {
            listItems.push(input.value);
        }
    }

    let newTodo = new Todo(type, title, description, dueDate, dueTime, priority, listItems);

    newTodo.pushToList();
    cardCreate(todoList);
}

export { todoCreate };

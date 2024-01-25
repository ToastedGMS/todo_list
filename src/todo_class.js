let todoList = [];

class Todo {
    constructor(type, title, description, dueDate = undefined, dueTime = undefined, priority = undefined, listItems = []) {
        this.type = type;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = priority;
        this.listItems = listItems;
    }

    pushToList(){
        todoList.push(this);
        return todoList;
    }
}

export { Todo, todoList }
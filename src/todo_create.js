let todoList = [];

export class Todo {
    constructor(type, title, description, dueDate, dueTime, priority){
        this.type = type;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = priority;
    }

    pushToList(){
        todoList.push(this);
        return todoList;
    }
}

export { todoList }
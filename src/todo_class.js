let todoList = [];

export class Todo {
    constructor(type, title, description = undefined, dueDate = undefined, dueTime = undefined, priority = undefined){
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
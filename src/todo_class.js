let todoList = [];

class Todo {
    constructor(type, title, description, dueDate = undefined, dueTime = undefined, priority = undefined, listItems = [], color = undefined, textColor = undefined) {
        this.type = type;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = priority;
        this.listItems = listItems;
        this.color = color;
        this. textColor = textColor;
    }

    pushToList(){
        todoList.push(this);
        return todoList;
    }
}

export { Todo, todoList }
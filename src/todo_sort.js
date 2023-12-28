let todoTasks = [];
let todoNotes = [];

const todoSort = (todoList) => {
    todoList.forEach(element => {
        
        if (element.type === 'Task'){
            todoTasks.push(element);
        } else if (element.type === 'Note'){
            todoNotes.push(element);
        }
    });
};

export { todoTasks, todoNotes, todoSort }
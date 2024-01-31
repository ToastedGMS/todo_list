import { cardCreate } from "./todo_card";
import { todoList } from "./todo_class";
import { todoCreate } from "./todo_create";
import { form } from "./todo_modal";

let projectList = [];

function addProjectToList() {
    // Get the project title from the input field
    let projectTitle = document.getElementById('projectTitle').value;
    const arr = [projectTitle];

    // Check if the project already exists in projectList
    let projectExists = false;

    for (const project of projectList) {
        if (project[0] === projectTitle) {
            projectExists = true;
            break;
        }
    }

    if (projectExists) {
        console.log('1', projectList)
        todoCreate();
        // Find the existing project and push the todo details
        const existingProject = projectList.find(project => project[0] === projectTitle);
        existingProject.push(todoList[todoList.length - 1]);
        console.log('2', projectList)
        // Remove existing span, if any
        let existingSpan = form.querySelector('span');
        if (existingSpan) existingSpan.remove();
        form.appendChild(document.createElement('span')).innerText = `${document.getElementById('projectTitle').value} already exists! Todo added to existing project.`;
    } else {
        todoCreate();
        const arr = [projectTitle, todoList[todoList.length - 1]];
        projectList.push(arr);
        // Remove existing span, if any
        let existingSpan = form.querySelector('span');
        if (existingSpan) existingSpan.remove();
        form.appendChild(document.createElement('span')).innerText = `Todo Created and added to ${document.getElementById('projectTitle').value}!`;
    }
}

function showProjectList (){
    // shows a list of all projects and displays selected one on button click
    let projectBtn = document.querySelector('#projectBtn');
    let projectDiv = document.querySelector('#projectDiv');

    projectBtn.addEventListener('click',() => {
        projectList.forEach((element, index) => {
            let newBtn = document.createElement('button');
            newBtn.setAttribute('data-index', index)
            newBtn.innerText = element[0];
            projectDiv.appendChild(newBtn)
            newBtn.addEventListener('click', () => {
                cardCreate(element)
                })
        })
    })
}

showProjectList()
export { addProjectToList, projectList };
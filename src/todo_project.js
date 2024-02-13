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
        todoCreate();
        // Find the existing project and push the todo details
        const existingProject = projectList.find(project => project[0] === projectTitle);
        existingProject.push(todoList[todoList.length - 1]);
        // Remove existing span, if any
        let existingSpan = form.querySelector('span');
        if (existingSpan) existingSpan.remove();
        form.appendChild(document.createElement('span')).innerText = `${document.getElementById('projectTitle').value} already exists! Todo added to existing project.`;
        let storableProjectList = JSON.stringify(projectList)
        localStorage.setItem('projectList', storableProjectList)
    } else {
        todoCreate();
        const arr = [projectTitle, todoList[todoList.length - 1]];
        projectList.push(arr);
        // Remove existing span, if any
        let existingSpan = form.querySelector('span');
        if (existingSpan) existingSpan.remove();
        form.appendChild(document.createElement('span')).innerText = `Todo Created and added to ${document.getElementById('projectTitle').value}!`;
        let storableProjectList = JSON.stringify(projectList)
        localStorage.setItem('projectList', storableProjectList)
    }
}

function showProjectList (){
    // shows a list of all projects and displays selected one on button click
    let projectBtn = document.querySelector('#projectBtn');
    let projectDiv = document.querySelector('#projectDiv');

    let counter = 0;

    projectBtn.addEventListener('click',() => {

    if (counter === 0){
    // delete all buttons to free up space for new ones
    while (projectDiv.firstChild) {
        projectDiv.removeChild(projectDiv.lastChild)
    }
        projectList.forEach((element) => {
            let newBtn = document.createElement('button');
            let projIndex = projectList.indexOf(element)
            newBtn.innerText = element[0];
            projectDiv.appendChild(newBtn)
            newBtn.addEventListener('click', () => {
                cardCreate(element)
                })
            let delProjectBtn = document.createElement('button');
            delProjectBtn.innerText = 'delet';
            projectDiv.appendChild(delProjectBtn);
            projectDiv.appendChild(document.createElement('br'))
            projectDiv.appendChild(document.createElement('br'))
            delProjectBtn.addEventListener('click', () => {
                const isConfirmed = confirm(`Are you sure you want to delete the project?`);
                if (isConfirmed) {
                    projectList.splice(projIndex, 1);
                    let storableProjectList = JSON.stringify(projectList)
                    localStorage.setItem('projectList', storableProjectList)
                }
            })
        })
        counter = 1;
    } else if (counter = 1){
        while (projectDiv.firstChild) {
            projectDiv.removeChild(projectDiv.lastChild)
        }
        counter = 0;
    }
    })
}

showProjectList()
export { addProjectToList, projectList };
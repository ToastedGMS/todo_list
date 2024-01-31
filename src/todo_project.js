import { cardCreate } from "./todo_card";
import { todoList } from "./todo_class";

let projectList = [];

function addProjectToList(){
    //creates array to store projects, and stores it in projectList array
    const projectTitle = document.getElementById('projectTitle').value;

    const arr = new Array(projectTitle)
    arr.push(todoList[todoList.length-1])
    projectList.push(arr)
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
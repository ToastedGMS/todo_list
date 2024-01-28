import { cardCreate } from "./todo_card";
import { todoList } from "./todo_class";

let projectList = [];

function addProjectToList(){
    const projectTitle = document.getElementById('projectTitle').value;

    const arr = new Array(projectTitle)
    arr.push(todoList[todoList.length-1])
    projectList.push(arr)
    console.log('project list', projectList)
    console.log('array', arr)
}

function showProjectList (){
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
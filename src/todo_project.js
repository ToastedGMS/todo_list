let projectList = {};

function addProjectToList(){
    const projectTitle = document.getElementById('projectTitle').value;
    projectList[projectTitle] = [];

    console.log(projectList)
}

function showProjectList (){
    let projectBtn = document.querySelector('#projectBtn');
    let projectDiv = document.querySelector('#projectDiv');

    projectBtn.addEventListener('click',() => {
        Object.keys(projectList).forEach((e) => {
            let newBtn = document.createElement('button');
            newBtn.innerText = e;
            projectDiv.appendChild(newBtn)
        })
    })
}

showProjectList()
export { addProjectToList };
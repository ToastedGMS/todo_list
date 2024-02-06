import { format } from "date-fns";
import { todoList } from "./todo_class";
import { projectList } from "./todo_project";

function cardCreate(arr){
    const main = document.querySelector('main');
    
    // delete all cards in main section to free up space for new ones
    while (main.firstChild) {
        main.removeChild(main.lastChild)
    }
    
    let scheduleCardDiv = document.querySelector('#scheduleCardDiv');
    while (scheduleCardDiv.firstChild) {
        scheduleCardDiv.removeChild(scheduleCardDiv.lastChild)
    }
    // card creation logic for each type of todo
    arr.forEach((element, index) => {
        const cardIndex = arr.indexOf(element);


        // task todo
        if (element.type === 'Task'){
            const taskCard = document.createElement('div');
            taskCard.classList.add('taskCard');
            taskCard.setAttribute('data-task-id', element.title);

            
            const titleH3 = document.createElement('h3');
            titleH3.innerText = element.title;
            const descP = document.createElement('p');
            descP.innerText = element.description;
            const dateP = document.createElement('p');
            if (element.dueDate === ''){
                dateP.innerText = element.dueDate;
            } else {
            dateP.innerText = format(new Date(element.dueDate), 'MMMM d, yyyy');
            };
            const timeP = document.createElement('p');
            timeP.innerText = element.dueTime;
            const prioriP = document.createElement('p');
            prioriP.innerText = element.priority;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('data-type', 'delete-button');
            deleteBtn.addEventListener('click', () => {
                const isConfirmed = confirm(`Are you sure you want to delete the todo?`);
                
                        if (isConfirmed) {
                            todoList.splice(cardIndex, 1);
                            cardCreate(todoList);
                            // Find and remove the corresponding schedule card from scheduleCardDiv
                            const scheduleCardToRemove = document.querySelector(`[data-schedule-id="${element.title}"]`);
                            if (scheduleCardToRemove) {
                                scheduleCardToRemove.remove();
                            }
                            for (const project of projectList) {
                                const projectIndex = project.indexOf(element);
                                if (projectIndex !== -1) {
                                    project.splice(projectIndex, 1);
                                    break;
                                }
                            }
                        }
            })

            main.appendChild(taskCard);
            taskCard.appendChild(titleH3);
            taskCard.appendChild(descP);
            taskCard.appendChild(dateP);
            taskCard.appendChild(timeP);
            taskCard.appendChild(prioriP);
            taskCard.appendChild(document.createElement('br'));
            taskCard.appendChild(deleteBtn).innerText = 'Delete';
            
            const scheduleCard = document.createElement('div');
            scheduleCard.classList.add('scheduleCard');
            scheduleCard.setAttribute('data-schedule-id', element.title);


            let scheduleTitle = document.createElement('h3');
            scheduleTitle.innerText = element.title;

            scheduleCard.appendChild(scheduleTitle)
            scheduleCardDiv.appendChild(scheduleCard)

        // note todo
        } else if (element.type === 'Note'){
            const noteCard = document.createElement('div');
            noteCard.classList.add('noteCard');
            noteCard.setAttribute('data-index', index);
            
            const titleH3 = document.createElement('h3');
            titleH3.innerText = element.title;
            const descP = document.createElement('p');
            descP.innerText = element.description;
            const deleteBtn = document.createElement('button')
            deleteBtn.setAttribute('data-type', 'delete-button');
            deleteBtn.addEventListener('click', () => {
                const isConfirmed = confirm(`Are you sure you want to delete the todo?`);
                
                        if (isConfirmed) {
                            todoList.splice(cardIndex, 1);
                            cardCreate(todoList);
                        }
            })

            main.appendChild(noteCard);
            noteCard.appendChild(titleH3);
            noteCard.appendChild(descP);
            noteCard.appendChild(document.createElement('br'));
            noteCard.appendChild(deleteBtn).innerText = 'Delete';


        // list todo
        } else if (element.type === 'List') {
            const listCard = document.createElement('div');
            listCard.classList.add('listCard');
            listCard.setAttribute('data-index', index);

            const titleH3 = document.createElement('h3');
            titleH3.innerText = element.title;

            const listItemsUl = document.createElement('ul');

            // Include logic to display list items if they exist
            if (element.listItems && element.listItems.length > 0) {
                element.listItems.forEach((listItem) => {
                    const listItemLi = document.createElement('li');
                    listItemLi.innerText = listItem;
                    listItemsUl.appendChild(listItemLi);
                });
            }
            const deleteBtn = document.createElement('button')
            deleteBtn.setAttribute('data-type', 'delete-button');
            deleteBtn.addEventListener('click', () => {
                const isConfirmed = confirm(`Are you sure you want to delete the todo?`);
                
                        if (isConfirmed) {
                            todoList.splice(cardIndex, 1);
                            cardCreate(todoList);
                        }
            })

            main.appendChild(listCard);
            listCard.appendChild(titleH3);
            listCard.appendChild(listItemsUl);
            listCard.appendChild(document.createElement('br'));
            listCard.appendChild(deleteBtn).innerText = 'Delete';
            
        }
    })
    
    }


    export { cardCreate }
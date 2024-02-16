import { format } from 'date-fns';
import { todoList } from "./todo_class";
import { projectList } from "./todo_project";
import { orderSchedule } from './todo_schedule';

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
            taskCard.classList.add('card');

            // take values input in modal form and display on card
            const titleH3 = document.createElement('h3');
            titleH3.innerText = element.title;
            const descP = document.createElement('p');
            descP.innerText = element.description;
            const dateP = document.createElement('p');
            if (element.dueDate === ''){
                dateP.innerText = element.dueDate;
            } else {
                dateP.innerText = `Due for ${format(new Date(`${element.dueDate}T12:00:00`), 'MMMM d, yyyy')}`;
            }
            dateP.style.marginBottom = '0px';
            const timeP = document.createElement('p');
            if (element.dueTime === ''){
                timeP.innerText = element.dueTime
            } else {
                timeP.innerText = `at ${element.dueTime}`;
            }
            timeP.style.marginTop = '0px';
            const prioriP = document.createElement('p');
            prioriP.innerText = `Priority: ${element.priority}`;
            
            // button to delete cards from main card div and schedule div
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('fa-regular', 'fa-trash-can');
            deleteBtn.addEventListener('click', () => {
                const isConfirmed = confirm(`Are you sure you want to delete the todo?`);
                
                        if (isConfirmed) {
                            todoList.splice(cardIndex, 1);
                            let storableList = JSON.stringify(todoList)
                            localStorage.setItem('todoList', storableList)
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
                                    let storableProjectList = JSON.stringify(projectList)
                                    localStorage.setItem('projectList', storableProjectList)
                                    break;
                                }
                            }
                        }
            })

            // append text to card, and card to div
            main.appendChild(taskCard);
            taskCard.appendChild(titleH3);
            taskCard.appendChild(descP);
            taskCard.appendChild(dateP);
            taskCard.appendChild(timeP);
            taskCard.appendChild(prioriP);
            taskCard.appendChild(document.createElement('br'));
            taskCard.appendChild(deleteBtn)
            
            // schedule cards area
            const scheduleCard = document.createElement('div');
            scheduleCard.classList.add('card');
            scheduleCard.classList.add('scheduleCard');
            scheduleCard.setAttribute('data-schedule-id', element.title);

            // create schedule card and fill it up
            let scheduleTitle = document.createElement('h4');
            scheduleTitle.innerText = element.title;
            let scheduleDate = document.createElement('p');
            if (element.dueDate === ''){
                dateP.innerText = element.dueDate;
            } else if (element.dueTime === ''){
                scheduleDate.innerText = format(new Date(`${element.dueDate}T12:00:00`), 'MMMM d, yyyy');
            } else {
                scheduleDate.innerText = format(new Date(`${element.dueDate}T12:00:00`), 'MMMM d, yyyy') + ' - ' + element.dueTime;
            }

            //append schedule card to schedule div
            scheduleCard.appendChild(scheduleTitle)
            scheduleCard.appendChild(scheduleDate)
            scheduleCardDiv.appendChild(scheduleCard)
            // function to order cards by date
            orderSchedule()

            if (element.priority === 'Low'){
                taskCard.style.borderLeft = '6px solid #00b3b3';
                scheduleCard.style.borderLeft = '6px solid #00b3b3'
            } else if (element.priority === 'Medium'){
                taskCard.style.borderLeft = '6px solid #ffff00';
                scheduleCard.style.borderLeft = '6px solid #ffff00' 
            } else if (element.priority === 'High'){
                taskCard.style.borderLeft = '6px solid #ff0000';
                scheduleCard.style.borderLeft = '6px solid #ff0000' 
            }

        // note todo
        } else if (element.type === 'Note'){
            const noteCard = document.createElement('div');
            noteCard.classList.add('noteCard');
            noteCard.setAttribute('data-index', index);
            noteCard.classList.add('card');
            
            // take values input in modal form and display on card
            const titleH3 = document.createElement('h3');
            titleH3.innerText = element.title;
            const descP = document.createElement('p');
            descP.innerText = element.description;
            const deleteBtn = document.createElement('button')

            // button to delete cards from main card div and schedule div
            deleteBtn.classList.add('fa-regular', 'fa-trash-can');
            deleteBtn.addEventListener('click', () => {
                const isConfirmed = confirm(`Are you sure you want to delete the todo?`);
                
                        if (isConfirmed) {
                            todoList.splice(cardIndex, 1);
                            let storableList = JSON.stringify(todoList)
                            localStorage.setItem('todoList', storableList)
                            cardCreate(todoList);
                        }
            })

            // append text to card, and card to div
            main.appendChild(noteCard);
            noteCard.appendChild(titleH3);
            noteCard.appendChild(descP);
            noteCard.appendChild(document.createElement('br'));
            noteCard.appendChild(deleteBtn)

        // list todo
        } else if (element.type === 'List') {
            const listCard = document.createElement('div');
            listCard.classList.add('listCard');
            listCard.setAttribute('data-index', index);
            listCard.classList.add('card');

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

            // button to delete cards from main card div and schedule div
            const deleteBtn = document.createElement('button')
            deleteBtn.classList.add('fa-regular', 'fa-trash-can');
            deleteBtn.addEventListener('click', () => {
                const isConfirmed = confirm(`Are you sure you want to delete the todo?`);
                
                        if (isConfirmed) {
                            todoList.splice(cardIndex, 1);
                            let storableList = JSON.stringify(todoList)
                            localStorage.setItem('todoList', storableList)
                            cardCreate(todoList);
                        }
            })

            // append text to card, and card to div
            main.appendChild(listCard);
            listCard.appendChild(titleH3);
            listCard.appendChild(listItemsUl);
            listCard.appendChild(document.createElement('br'));
            listCard.appendChild(deleteBtn)
            
        }
    })
    
    }
    export { cardCreate }
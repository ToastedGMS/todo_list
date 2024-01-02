function cardCreate(arr){
    const main = document.querySelector('main');

    while (main.firstChild) {
        main.removeChild(main.lastChild)
    }

    arr.forEach((element) => {
        if (element.type === 'Task'){
            const taskCard = document.createElement('div');
            taskCard.classList.add('taskCard');
            
            const titleH3 = document.createElement('h3');
            titleH3.innerText = element.title;
            const descP = document.createElement('p');
            descP.innerText = element.description;
            const dateP = document.createElement('p');
            dateP.innerText = element.dueDate;
            const timeP = document.createElement('p');
            timeP.innerText = element.dueTime;
            const prioriP = document.createElement('p');
            prioriP.innerText = element.priority;
    
            main.appendChild(taskCard);
            taskCard.appendChild(titleH3);
            taskCard.appendChild(descP);
            taskCard.appendChild(dateP);
            taskCard.appendChild(timeP);
            taskCard.appendChild(prioriP);
        } else {
            const noteCard = document.createElement('div');
            noteCard.classList.add('noteCard');
            
            const titleH3 = document.createElement('h3');
            titleH3.innerText = element.title;
            const descP = document.createElement('p');
            descP.innerText = element.description;
        
            main.appendChild(noteCard);
            noteCard.appendChild(titleH3);
            noteCard.appendChild(descP);
        }
    })
    
    }

    export { cardCreate }
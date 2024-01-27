import { todoCreate } from "./todo_create";
import { addProjectToList } from "./todo_project";

const modalBody = document.querySelector('.modalBody');

const form = document.createElement("form");
    form.id = "todoForm";

    // Create and append type selector for the form
    form.appendChild(createLabel("Type", "type"));
    form.appendChild(createSelect("type", ["", "Project","Task", "Note", "List"]));
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    
    // Append form to the modal
    modalBody.appendChild(form);
            

        // Helper functions to create form elements
        function createLabel(text, forAttribute) {
            var label = document.createElement("label");
            label.textContent = text + ":";
            label.setAttribute("for", forAttribute);
            return label;
        };

        function createInput(type, id) {
            var input = document.createElement("input");
            input.type = type;
            input.id = id;
            input.name = id;
            input.required = true;
            return input;
        };

        function createTextarea(id) {
            var textarea = document.createElement("textarea");
            textarea.id = id;
            textarea.name = id;
            textarea.rows = "4";
            textarea.cols = "50";
            return textarea;
        };

        function createSelect(id, options) {
            var select = document.createElement("select");
            select.id = id;
            select.name = id;
            select.required = true;

            for (var i = 0; i < options.length; i++) {
                var option = document.createElement("option");
                option.value = options[i];
                option.text = options[i];
                select.appendChild(option);
            }
            return select;
        };

// logic to hide/show form options based on todo type

const type = document.getElementById('type');

type.addEventListener('change', () =>{
    let x = document.getElementById('type');
    
    if (x.value === 'Note'){
        // Removes form element children and appends only the ones relevant to selected form type
        
        var childElements = form.children; 
        // Start from the fifth child element (index 4) and remove subsequent elements
        var index = 4;
        while (index < childElements.length) {
            form.removeChild(childElements[index]);
        };

        form.appendChild(createLabel("Title", "title"));
        form.appendChild(createInput("text", "title"));
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));
          
        form.appendChild(createLabel("Description", "description"));
        form.appendChild(createTextarea("description"));
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));

        var submitButton = document.createElement("input");
        submitButton.type = "submit";
        submitButton.value = "Create Todo";
        submitButton.setAttribute("data-type", "submit-button");
        form.appendChild(submitButton);

        // Logic for todo creation 

        submitButton.addEventListener('click', (e) => {
            e.preventDefault()
            todoCreate()
        })

    }else if (x.value === 'Task'){
        // Removes form element children and appends only the ones relevant to selected form type
        
        var childElements = form.children; 
        // Start from the fifth child element (index 4) and remove subsequent elements
        var index = 4;
        while (index < childElements.length) {
            form.removeChild(childElements[index]);
        };

        // Create and append elements to the form
          
        form.appendChild(createLabel("Title", "title"));
        form.appendChild(createInput("text", "title"));
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));
          
        form.appendChild(createLabel("Description", "description"));
        form.appendChild(createTextarea("description"));
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));
          
        form.appendChild(createLabel("Due Date", "dueDate"));
        form.appendChild(createInput("date", "dueDate"));
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));
          
        form.appendChild(createLabel("Due Time", "dueTime"));
        form.appendChild(createInput("time", "dueTime"));
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));
          
        form.appendChild(createLabel("Priority", "priority"));
        form.appendChild(createSelect("priority", ["Low", "Medium", "High"]));
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));
          
        var submitButton = document.createElement("input");
        submitButton.type = "submit";
        submitButton.value = "Create Todo";
        submitButton.setAttribute("data-type", "submit-button");
        form.appendChild(submitButton);

        // Logic for todo creation 

        submitButton.addEventListener('click', (e) => {
            e.preventDefault()
            todoCreate()
        })

    } else if (x.value === 'List') {
        // Removes form element children and appends only the ones relevant to selected form type
        var childElements = form.children; 
        // Start from the fifth child element (index 4) and remove subsequent elements
        var index = 4;
        while (index < childElements.length) {
            form.removeChild(childElements[index]);
        }
    
        // Create and append elements to the form
        form.appendChild(createLabel("Title", "title"));
        form.appendChild(createInput("text", "title"));
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));
    
        // Add dynamic list item input fields
        form.appendChild(createLabel("List Items", "listItems"));
        form.appendChild(document.createElement("br"));
    
        var listItemsContainer = document.createElement("div");
        listItemsContainer.id = "listItemsContainer";
    
        function addListItemInput() {
            var listItemInput = createInput("text", "li");
            listItemsContainer.appendChild(listItemInput);
            listItemsContainer.appendChild(document.createElement("br"));
        }
    
        // Initially add one list item input
        addListItemInput();
    
        form.appendChild(listItemsContainer);
        form.appendChild(document.createElement("br"));
    
        var addButton = document.createElement("button");
        addButton.textContent = "Add List Item";
        addButton.addEventListener('click', addListItemInput);
        form.appendChild(addButton);
    
        var submitButton = document.createElement("input");
        submitButton.type = "submit";
        submitButton.value = "Create Todo";
        submitButton.setAttribute("data-type", "submit-button");
        form.appendChild(submitButton);
    
        // Logic for todo creation 
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            todoCreate();
        });
    } else if (x.value === 'Project'){
        // Removes form element children and appends only the ones relevant to selected form type
        var childElements = form.children; 
        // Start from the fifth child element (index 4) and remove subsequent elements
        var index = 4;
        while (index < childElements.length) {
            form.removeChild(childElements[index]);
        }

        form.appendChild(createLabel("Project Title", "projectTitle"));
        form.appendChild(createInput("text", "projectTitle"));
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));

        var projectCreateButton = document.createElement("input");
        projectCreateButton.type = "submit";
        projectCreateButton.value = "Create Project";
        projectCreateButton.setAttribute("data-type", "project-create-button");
        form.appendChild(projectCreateButton);
    
        // Logic for todo creation 
        projectCreateButton.addEventListener('click', (e) => {
            e.preventDefault();
            addProjectToList();
        });
    }
    
});

const todoFormOpen = () => {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');

};

const todoFormClose = () => {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');

};

export { todoFormOpen, todoFormClose }
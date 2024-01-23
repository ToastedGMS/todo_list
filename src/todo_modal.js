const modalBody = document.querySelector('.modalBody');
    modalBody.innerHTML = ''
    const form = document.createElement("form");
                form.id = "todoForm";

                // Create and append elements to the form
                form.appendChild(createLabel("Type", "type"));
                form.appendChild(createSelect("type", ["Task", "Note"]));
                form.appendChild(document.createElement("br"));
                form.appendChild(document.createElement("br"));

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
                submitButton.setAttribute("data-submit-button", "");
                form.appendChild(submitButton);

                // Append form to the modal
                modalBody.appendChild(form);
            

            // Helper functions to create form elements
            function createLabel(text, forAttribute) {
                var label = document.createElement("label");
                label.textContent = text + ":";
                label.setAttribute("for", forAttribute);
                return label;
            }

            function createInput(type, id) {
                var input = document.createElement("input");
                input.type = type;
                input.id = id;
                input.name = id;
                input.required = true;
                return input;
            }

            function createTextarea(id) {
                var textarea = document.createElement("textarea");
                textarea.id = id;
                textarea.name = id;
                textarea.rows = "4";
                textarea.cols = "50";
                return textarea;
            }

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
const dueDate = document.getElementById('dueDate');
const dueTime = document.getElementById('dueTime');
const priority = document.getElementById('priority');

type.addEventListener('change', () =>{
    let x = document.getElementById('type');
    if (x.value === 'Note'){
        dueDate.style.display = 'none';
        dueTime.style.display = 'none';
        priority.style.display = 'none';
    }else {
        dueDate.style.display = 'inline';
        dueTime.style.display = 'inline';
        priority.style.display = 'inline';
    }
})

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
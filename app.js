const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemplate = (todo) => {
    // inside span outputting todo a user types using template string
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    // adding the todo in the list
    list.innerHTML += html;
};

// listening for the submit event & trim it
addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // getting value a user types in
    const todo = addForm.add.value.trim();

    // checking if the todo has any length
    if (todo.length) {
        // invoking the generateTemplate function
        generateTemplate(todo);
        addForm.reset();
    }
});

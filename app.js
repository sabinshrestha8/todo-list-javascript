// getting reference by querying in the DOM
const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

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

// deleting todo
list.addEventListener("click", (e) => {
    if (e.target.tagName == "I") {
        e.target.parentNode.remove();
    }
});

const filterTodos = (key) => {
    // changing collection to array
    Array.from(list.children)
        // filter and put unmatched todos to new array
        .filter((todo) => {
            return !todo.textContent.toLowerCase().includes(key);
        })
        // add classList "filtered" to unmatched todos
        .forEach((todo) => {
            todo.classList.add("filtered");
        });

    Array.from(list.children)
        // filter and put matched todos to new array
        .filter((todo) => {
            return todo.textContent.toLowerCase().includes(key);
        })
        // remove classList "filtered" to matched todos
        .forEach((todo) => {
            todo.classList.remove("filtered");
        });
};

// keyup event
search.addEventListener("keyup", () => {
    // getting value a user types in
    const key = search.value.trim().toLowerCase();

    // invoking filterTodos function to search & filter todos
    filterTodos(key);
});

// Global array for todos
let todos = [];

document.addEventListener("DOMContentLoaded", function() {
    main();
    // add to list by click
    document.querySelector("#todo_add").addEventListener("click", todo_add);
    // add to list by pressing Enter
    document.querySelector("#todo_input").addEventListener("keydown", function(event){
        // run to_do when enter is pressed
        if (event.key === "Enter") {
            todo_add();
        }
    });
});

function main() {
    // if no todos is set intitialize emphty array in local storage
    if (localStorage.getItem("todos") == null) {
        // if not store the global variable in LS
        localStorage.setItem("todos", JSON.stringify(todos));
    } else {
        // if it already exist in LS retrieve it and turn it back into a list
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    // find <ul>
    const list = document.querySelector("#todo_list");

    // Render all saved todos
    for (const item of todos) {
        const li = createTodoElement(item);
        list.appendChild(li);
    }
}

function createTodoElement(text) {
    // create list item
    const li = document.createElement("li");

    // create span
    const span = document.createElement("span");
    span.textContent = text;

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";

    // delete element onclick
    delBtn.addEventListener("click", function() {
        // remove from array
        const index = todos.indexOf(text);

        if (index !== -1) {
            todos.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(todos));
        }

        // remove from DOM
        li.remove();
    });

    // append button and text to the li
    li.appendChild(span);
    li.appendChild(delBtn);

    // return li
    return li;
}

function todo_add() {
    // select input field
    const input = document.querySelector("#todo_input");
    // UI list
    const list = document.querySelector("#todo_list");
    // extract the 'value' from the input field
    const text = input.value.trim();

    // check if it is emphty
    if (text === "") {
        alert("Enter a input");
        return;
    }

    // get todos list from local storage
    const saved = localStorage.getItem("todos");

    // if it exists convert it to a list
    if (saved !== null) {
        todos = JSON.parse(saved);
    }

    // Add new todo to array
    todos.push(text);

    // Update in memeory
    localStorage.setItem("todos", JSON.stringify(todos));

    // udate UI
    const li = createTodoElement(text);
    list.appendChild(li);

    // clear input
    input.value = "";
}


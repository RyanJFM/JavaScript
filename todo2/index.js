// Global array for todos
let todos = [];

document.addEventListener("DOMContentLoaded", function () {
    main();

    document.querySelector("#todo_add").addEventListener("click", todo_add);

    // Optional: allow Enter key to add
    document.querySelector("#todo_input").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            todo_add();
        }
    });
});

function main() {
    // If no todos saved yet, initialize empty array in localStorage
    if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify(todos));
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    // Find <ul>
    const list = document.querySelector("#todo_list");

    // Render all saved todos
    for (const item of todos) {
        const li = createTodoElement(item);
        list.appendChild(li);
    }
}

// Helper: create an <li> with text + delete button
function createTodoElement(text) {
    const li = document.createElement("li");

    // Text span
    const span = document.createElement("span");
    span.textContent = text;

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";

    delBtn.addEventListener("click", function () {
        // Remove from array (first match)
        const index = todos.indexOf(text);
        if (index !== -1) {
            todos.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(todos));
        }

        // Remove from DOM
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(delBtn);

    return li;
}

function todo_add() {
    const input = document.querySelector("#todo_input");
    const list  = document.querySelector("#todo_list");
    const text  = input.value.trim();

    // Empty input check
    if (text === "") {
        alert("add an input");
        return;
    }

    // Load latest todos from localStorage
    const saved = localStorage.getItem("todos");
    if (saved !== null) {
        todos = JSON.parse(saved);
    }

    // Add new todo to array
    todos.push(text);

    // Save updated array
    localStorage.setItem("todos", JSON.stringify(todos));

    // Add to UI
    const li = createTodoElement(text);
    list.appendChild(li);

    // Clear input
    input.value = "";
}

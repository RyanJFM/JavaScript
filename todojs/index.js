
document.addEventListener("DOMContentLoaded", function() {
    main();
    document.querySelector("#todo_add").addEventListener("click", todo_add);
});

function main() {
    // check local storage for already existing list
    if (localStorage.getItem("todos") == null) {
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    todos = JSON.parse((localStorage.getItem("todos")));

    // find list
    let list = document.querySelector("#todo_list");

    for (const index in todos) {
        let li = document.createElement("li");
        li.textContent = todos[index];

        // add it to the UI
        list.appendChild(li);
    }
    return;
    
}

function todo_add() {
    let text = document.querySelector("#todo_input").value.trim();
    
    console.log(text);

    // check if the box is emphty
    if (text == "") {
        alert("add an input");
        return;
    }

    // check local storage for already existing list
    todos = JSON.parse(localStorage.getItem("todos"));

    // apped to list
    todos.push(text);

    //add the list to local storage
    localStorage.setItem("todos", JSON.stringify(todos));

    // clear input field after adding
    //text = "";

    // create a new list item
    let li = document.createElement("li");
    li.textContent = text;

    // find list
    let list = document.querySelector("#todo_list");

    // add it to the UI
    list.appendChild(li);

    // clear
    document.querySelector("#todo_input").value = "";

    localStorage.setItem("todos", JSON.stringify(todos));

    return;
}
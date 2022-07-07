const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.getElementsByTagName("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = newTodo;
}

toDoForm.addEventListener("submit", handleToDoSubmit);
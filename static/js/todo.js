const toDoform = document.querySelector(".js-toDoForm"),
    toDoInput = toDoform.querySelector("input");
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos(){
    localStorage.setItem("TODOS_LS", JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "🤧";
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;    
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id : newId
    };

    toDos.push(toDoObj); //
    saveToDos();

}
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""
}

function loadToDos() {
    
    const loadedToDos = localStorage.getItem("TODOS_LS");
    
    if (loadedToDos !== null) {
        console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);
    }
}

function init() {
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit);
}

init();
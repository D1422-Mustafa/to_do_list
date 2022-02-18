let input = document.getElementById("input");
let plus = document.getElementById("plus");
let taskTitle = document.getElementById("task__title");
let taskList = document.getElementById("task__title");
let todoList = document.getElementById("todo_list")

plus.addEventListener("click", ()=>{
    taskTitle.style.display ="block"
    let toDo = document.createElement("span");
    toDo.setAttribute("id", "todo");
    toDo.innerText = input.value;
    todoList.append(toDo);
    let remove = document.createElement("button");
    remove.setAttribute("id", "remove");
    remove.innerText = "X";
    todoList.append(remove);
    let brow =document.createElement("br");
    todoList.append(brow);
    input.value = "";

    toDo.addEventListener("click", ()=>{
        toDo.style.textDecorationLine = "line-through";
        toDo.style.textDecorationColor = "red";
    })

    remove.addEventListener("click", ()=>{
        remove.style.display = "none";
        toDo.style.display = "none";
        brow.style.display = "none";
    })
})
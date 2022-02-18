let input = document.getElementById("input");
let plus = document.getElementById("plus");
let taskTitle = document.getElementById("task__title");
let taskList = document.getElementById("task__title");
let todoList = document.getElementById("todo_list");
let rules = document.getElementById("rules");
input.focus();

plus.addEventListener("click", ()=>{
    if(input.value != ""){
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
        rules.style.display = "none";
        input.focus();
        input.value = "";

    toDo.addEventListener("click", ()=>{
        toDo.style.textDecorationLine = "line-through";
        toDo.style.textDecorationColor = "red";
    })
    toDo.addEventListener("dblclick", ()=>{
        toDo.style.textDecorationLine = "none";
    })

    remove.addEventListener("click", ()=>{
        remove.style.display = "none";
        toDo.style.display = "none";
        brow.style.display = "none";
    })
}else{
    alert("please enter to do!")
}
})

document.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
    plus.click();
    }
})

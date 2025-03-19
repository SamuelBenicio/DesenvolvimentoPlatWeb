document.addEventListener("DOMContentLoaded", ()=>{
    loadTasks();
})


function addTask(){
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Digite uma tarefa valida!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let item = document.createElement("li");
    item.innerHTML = `
    <span onclick="toogleTask(this)">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">X</button>
    `
    taskList.appendChild(item);
    saveTasks();
    taskInput.value="";
    
 }

function toogleTask(element){
    element.parentElement.classList.toggle("completed")

}
function deleteTask(button){
    button.parentElement.remove();
}

function saveTasks(){
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach((task)=>{
        tasks.push({
            task:task.innerText.replace("","").trim(),
            status:task.classList.contains("completed")

        })
    })

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");

    tasks.forEach(element =>{

        let item = document.createElement("li");
        item.innerHTML = `
        <span onclick="toogleTask(this)">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">X</button>
        `

        if(element.status){
            item.classList.add("completed");
        }
        
        taskList.appendChild(item);
    })
    }





//  document.addEventListener("keypress",(event)=>){
//     if(event=="enter"{

//     }
//  }




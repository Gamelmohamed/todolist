document.addEventListener("DOMContentLoaded", function() {

let input = document.getElementById("input");
let btn = document.getElementById("btn");
let taskes = document.getElementById("task_list");


let colors =["red", "green", "blue"]
let i = 0

input.addEventListener("keypress", function(event){
if (event.key === "Enter"){
    event.preventDefault()
    btn.onclick()
}
})

btn.onclick = function () {
 let value = input.value
 var task = document.createElement("li");
 var deleteBtn = document.createElement("button")
 deleteBtn.innerText = "Done"


if (value != ""){
  task.textContent = value;
  taskes.appendChild(task);
  task.appendChild(deleteBtn)
  input.value = ""


  deleteBtn.onclick = function(){
    task.remove()
  }
task.style.backgroundColor = colors[i % colors.length]
i++

}
};

})





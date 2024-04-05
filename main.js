document.addEventListener("DOMContentLoaded", function() {

let input = document.getElementById("input");
let btn = document.getElementById("btn");
let taskes = document.getElementById("task_list");




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
    taskes.appendChild(task);
  }

  //   let colors =["red", "green", "blue"]
  // let i = Math.floor(Math.random()*colors.length)
  
  i= Math.random().toString(16).slice(2, 8)
  task.style.backgroundColor = "#" + i


}
};

})





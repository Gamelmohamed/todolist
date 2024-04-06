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
 var doneBtn = document.createElement("button")
 doneBtn.innerText = "Done"
 doneBtn.style.position = "absolute"
 doneBtn.style.right = "80px"

 var removebtn = document.createElement("button")
removebtn.innerText = "Remove"
doneBtn.style.float="right"
removebtn.style.backgroundColor = "red"

if (value != ""){
  task.textContent = value;
  taskes.appendChild(task);

  task.appendChild(doneBtn)
  input.value = ""


  doneBtn.onclick = function(){
    taskes.appendChild(task);
 task.style.textDecoration = "line-through"
 removebtn.style.textDecoration = "none"
    
  }
  task.appendChild(removebtn)
  removebtn.onclick = function(){
  task.remove()
  }

    let colors =["rgb(255,0,0)", "green", "blue"]
  let i = Math.floor(Math.random()*colors.length)
  task.style.backgroundColor = colors[i] 
  
  // i= Math.random().toString(16).slice(2, 8)
  // task.style.backgroundColor = "#" + i


}
};

})





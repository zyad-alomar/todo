import { construct} from "./constructing.js";
import { local } from "./local.js";

// append objects in the array of objects and after each append you store the vaule in the local storage

let add = document.querySelector(".add");
let dialog = document.querySelector(".dialog");
let submit = document.querySelector(".submit");
let title = document.querySelector("#title");

let ul = document.querySelector(".projects");

let task = document.querySelector(".task");


let des = document.querySelector("#des");
let datee = document.querySelector("#date");

  let dialog2 = document.querySelector(".dialog2");
   let submit2 = document.querySelector(".submit2");

add.addEventListener("click",()=>{
  dialog.open = true ;  
});

submit.addEventListener("click",()=>{
  //check if the value exisit in the ul

    let li = document.createElement("li");
    li.textContent = title.value;
    ul.appendChild(li);

    let project = new construct(title.value);

    local(project.name,JSON.stringify(project.array));
      dialog.open = false ;  

      let list = document.querySelectorAll(".projects li");

      list.forEach((item)=>{
        item.addEventListener("click",()=>{
          task.addEventListener("click",()=>{
            dialog2.open = true;
 submit2.addEventListener("click",()=>{
      let mytask = `{description:${des.value},date:${datee.value}}`;

   let grap = JSON.parse(localStorage.getItem(item.textContent));
   grap.push(mytask);
   localStorage.setItem(item.textContent,grap);
   
 });            
          });
        });
      });
      
   });  



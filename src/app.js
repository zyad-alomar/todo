let add = document.querySelector(".add");
let dialog = document.querySelector(".dialog");
let projects = document.querySelector(".projects");
let submit = document.querySelector(".submit");
let addTask = document.querySelector(".task");
let tasks = document.querySelector(".tasks");
let dialog2 = document.querySelector(".dialog2");
let submit2 = document.querySelector(".submit2");







addTask.addEventListener("click",()=>{
    dialog2.open = true;
});

add.addEventListener("click",()=>{
    dialog.open = true;
});


    submit.addEventListener("click",()=>{
        if(document.querySelector("#title").value != ""){
        let title = document.querySelector("#title").value;
        localStorage.setItem(title,JSON.stringify([]));
        let div = document.createElement("div");
        div.textContent = title;
        projects.appendChild(div);
        dialog.open = false;
        }

             
 let selector = document.querySelectorAll(".projects div");

 selector.forEach((div)=>{
    div.addEventListener("click",()=>{
        let array = [...selector];
        for(let i = 0; i<array.length;i++){
          selector[i].classList.remove("lol");
          selector[i].classList.add("no");
          selector[i].style.backgroundColor = "midnightblue";
        }
        div.classList.add("lol");
        div.style.backgroundColor = "red";
      //  dialog2.open = true;
 let grab = JSON.parse(localStorage.getItem(div.textContent));
 //[{},{},{}]
    tasks.replaceChildren(" ");

 for(let i = 0;i<grab.length;i++){
    let div1 = document.createElement("div");
    div1.classList.add("key");
    let div2 = document.createElement("div");
    let Delete = document.createElement("button");
    Delete.classList.add("Delete");
    Delete.textContent = "Delete";
    Delete.style.backgroundColor = "red";
    div1.textContent = grab[i].desc;
    div2.textContent = grab[i].datee;

    let container = document.createElement("div");
    container.classList.add("container");
    container.appendChild(div1);
    container.appendChild(div2);
    container.appendChild(Delete);

    tasks.appendChild(container);

 }
      deleting();

    });
 });
        });


        

submit2.addEventListener("click",()=>{
    let lol = document.querySelector(".lol");
    let grap = JSON.parse(localStorage.getItem(lol.textContent));
    let des = document.querySelector("#des").value;
    let date = document.querySelector("#date").value;
    

    grap.push({desc:des,datee:date});

    localStorage.setItem(lol.textContent,JSON.stringify(grap));

    dialog2.open = false;

     let grab = JSON.parse(localStorage.getItem(lol.textContent));
 //[{},{},{}]
    tasks.replaceChildren(" ");

 for(let i = 0;i<grab.length;i++){
    let div1 = document.createElement("div");
        div1.classList.add("key");

    let div2 = document.createElement("div");
    let Delete = document.createElement("button");
    Delete.textContent = "Delete";
    Delete.style.backgroundColor = "red";
        Delete.classList.add("Delete");
    div1.textContent = grab[i].desc;
    div2.textContent = grab[i].datee;

    let container = document.createElement("div");
        container.classList.add("container");

    container.appendChild(div1);
    container.appendChild(div2);
    container.appendChild(Delete);//iii

    tasks.appendChild(container);

 }
 deleting()
});

if(localStorage.length > 0){
for(let i = 0; i<localStorage.length;i++){
    let div = document.createElement("div");
  div.textContent = localStorage.key(i);
  projects.appendChild(div);
  let grap = JSON.parse(localStorage.getItem(div.textContent));
  for(let j = 0 ; j<grap.length;j++){
    let div1 = document.createElement("div");
        div1.classList.add("key");

    let div2 = document.createElement("div");
      let Delete = document.createElement("button");
Delete.textContent = "Delete";
    Delete.style.backgroundColor = "red";
    Delete.classList.add("Delete");
    div1.textContent = grap[j].desc;
    div2.textContent = grap[j].datee;

    let container = document.createElement("div");
        container.classList.add("container");

    container.appendChild(div1);
    container.appendChild(div2);
    container.appendChild(Delete);
    tasks.appendChild(container);
    
  }
}
deleting()
submit.click();
document.querySelector(".projects div").click();
}


function deleting() {
  let Delete = document.querySelectorAll(".Delete");
  Delete.forEach((del) => {
    del.addEventListener("click", () => {
      let container = del.closest(".container");
      let key = container.querySelector(".key");
      tasks.removeChild(container);
      let projects = [...document.querySelectorAll(".projects div")];
      for (let i = 0; i < projects.length; i++) {
        let grap = JSON.parse(localStorage.getItem(projects[i].textContent));
        for (let j = 0; j < grap.length; j++) {
          if (grap[j].desc === key.textContent && grap.length > 1) {
            grap.splice(j, 1);
            localStorage.setItem(projects[i].textContent, JSON.stringify(grap));
            break;
          } else if (grap[j].desc === key.textContent && grap.length === 1) {
            localStorage.setItem(projects[i].textContent, JSON.stringify([]));
            break;
          }
        }
      }
    });
  });
}


function editing(){
  
}

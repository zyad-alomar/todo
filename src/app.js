let add = document.querySelector(".add");
let dialog = document.querySelector(".dialog");
let projects = document.querySelector(".projects");
let submit = document.querySelector(".submit");
let addTask = document.querySelector(".task");
let dialog2 = document.querySelector(".dialog2");
let submit2 = document.querySelector(".submit2");
let tasks = document.querySelector(".tasks");

add.addEventListener("click",()=>{
    dialog.open = true;
});


    submit.addEventListener("click",()=>{
        let title = document.querySelector("#title").value;
        localStorage.setItem(title,JSON.stringify([]));
        let div = document.createElement("div");
        div.textContent = title;
        projects.appendChild(div);
        dialog.open = false;

        div.addEventListener("click",(e)=>{
            submit2.addEventListener("click",()=>{
                let des = document.querySelector("#des").value;
                let date = document.querySelector("#date").value;
                let obj = {desc:des,datee:date};
                let grap = JSON.parse(localStorage.getItem(e.target.textContent));
                grap.push(obj);
                localStorage.setItem(e.target.textContent,JSON.stringify(grap));
                dialog2.open = false;
            });
        });

        });

     




addTask.addEventListener("click",()=>{
   dialog2.open = true;
});

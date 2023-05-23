const title=document.getElementById("title");
const description =document.getElementById("description");
const form= document.querySelector("form");
const container=document.querySelector(".container");

 let tasks= localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")) :[];
 ShowAlltask();

function ShowAlltask(){
    tasks.forEach((value,index)=>{
  const div = document.createElement("div");
  div.setAttribute("class","task");

  const innerDiv= document.createElement("div");
   div.append(innerDiv);


        const p= document.createElement("p");
        p.innerText=value.title ;
        innerDiv.append(p);

        const span= document.createElement("span");
        span.innerText=value.description;
        innerDiv.append(span);

     const button= document.createElement("button");
     button.setAttribute("class","buttondelete");
     button.innerText="-";
     button.addEventListener("click",()=>{
        removetask();
        
        tasks.splice(index,1);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        ShowAlltask();
     });
    //  button.addEventListener("click",()=>{
    //     removetask();
    //     tasks.splice(index,1);
    //     ShowAlltask();
    //  })

     div.append(button);
     container.append(div);
    });
}
//  function removetask(){
//      const div= document.querySelector(".task");
//      div.remove();
//      }
function removetask(){
    tasks.forEach(()=>{
        const div=document.querySelector(".task");
        div.remove();
    });
}
 
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removetask();
    
    tasks.push({
        title:title.value,
        description:description.value,

    });
   console .log(tasks);
   localStorage.setItem("tasks",JSON.stringify(tasks));
ShowAlltask();
});
 
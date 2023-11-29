let todoCon=document.getElementById("todoCon") 
let addbtn=document.getElementById("addbtn");
let userInput=document.getElementById("userInput")
let todoList=[
    {
        text:"Learn HTML",
        uniqueid:1
    },
    {
        text:"Learn CSS",
        uniqueid:2
    },
    {
        text:"Learn Js",
        uniqueid:3
    }
]
let todoCount=todoList.length;

function deleteTask(todoId)
{
  let element=document.getElementById(todoId);
  todoCon.removeChild(element);
}

function statusChange(checkboxId,labelId)
{
    let lableElement =document.getElementById(labelId);
    lableElement.classList.toggle("checked")
}

function createAndAppend(todo)
{
       
    let todoId="todo"+todo.uniqueid;
    let checkboxId="checkbox"+todo.uniqueid;
    let labelId="label"+todo.uniqueid;

    let todoElement=document.createElement("li");
    todoElement.id=todoId;
    todoElement.classList.add("d-flex","flex-row","todoCon");
    todoCon.appendChild(todoElement);

    let checkInput=document.createElement("input");
    checkInput.type="checkbox"
    checkInput.id=checkboxId;
    checkInput.classList.add("checkBoxInput")
    todoElement.appendChild(checkInput);
    checkInput.onclick=function()
    {
        statusChange(checkboxId,labelId);
    }

    let labelCon=document.createElement("div");
    labelCon.classList.add("d-flex","flex-row","labelCon")
    todoElement.appendChild(labelCon);

    let lableName=document.createElement("label");
    lableName.setAttribute("for",checkboxId);
    lableName.id=labelId;
    lableName.textContent=todo.text;
    lableName.classList.add("lableName")
    labelCon.appendChild(lableName);

    let delCon=document.createElement("div");
    delCon.classList.add("delcon")
    labelCon.appendChild(delCon);

    let delIcon=document.createElement("i");
    delIcon.classList.add("far", "fa-trash-alt", "delete-icon","delIcon");
    delCon.appendChild(delIcon);

    delIcon.onclick=function()
    {
        deleteTask(todoId)
    }
    
     
}

for (let todo of todoList)
{
    createAndAppend(todo);
}

function addTask()
{
    let inputvalue=userInput.value;
    todoCount+=1;
    if(inputvalue==="")
    {
        alert("Enter a value");
    }
    else{
        let newtodo={
            text:inputvalue,
            uniqueid:todoCount
        }

        createAndAppend(newtodo);
    }
}

addbtn.onclick=function()
{
    addTask()
}
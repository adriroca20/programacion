//Selectors

const todoInput= document.querySelector(".todo-input");
const todoButton= document.querySelector(".todo-button");
const todoList= document.querySelector(".todo-list");
const filterOption= document.querySelector(".filter-todo");

//Event listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(event){
    event.preventDefault();

    //Queremos crear esta estrcutura
    // <div class="todo">
    //         <li></li>
    //         <button class="delete"></button>
    //         <button class="checked"></button>
    // </div>


    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo= document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const trashButton= document.createElement("button");
    trashButton.innerHTML ='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    const timeButton= document.createElement("button");
    timeButton.innerHTML ='<i class="fa-solid fa-clock"></i>';
    timeButton.classList.add("time-btn");
    todoDiv.appendChild(timeButton);

    todoList.appendChild(todoDiv);
    todoInput.value="";
}

function deleteCheck(event){
    const item = event.target;

    if(item.classList[0]=="trash-btn"){
        const todo=item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
            todo.remove();
        });
    }

    if(item.classList[0]=="complete-btn"){
        item.parentElement.classList.toggle("completed");
    }
}

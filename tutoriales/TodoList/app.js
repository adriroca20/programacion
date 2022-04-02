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

    const completedButton= document.createElement("button");
    completedButton.innerHTML ='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton= document.createElement("button");
    trashButton.innerHTML ='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

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

function filterTodo(event){
    const todos= todoList.childNodes;
    todos.forEach(function(todo){
        switch(event.target.value){
            case "all":
                todo.style.display = "flex";
                break; 
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display="none";
                }
                break; 
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display="none";
                }
                break; 
            default:
                break;
        }
    });
}
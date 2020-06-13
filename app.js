//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoItemName = document.querySelector(".todo-input");


//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);


//Functions
function addTodo(event){
    //Prevent form submit
    event.preventDefault();

    //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoItemName.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Adding todo to local storage
    saveLocalStorage(todoItemName.value); //I am calling the function here because I need value & in last line I perish the value. Need before that.
    
    //Checked button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check" id="ch"></i>';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);

    //Delete button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash" id="tr"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);

    todoItemName.value = "";
}


function deleteCheck(e){
    var item = e.target; //Grab clicked item
    //Delete todo
    if(item.classList[0] === "trash-btn"){
        var theTodo = item.parentElement;
        //Animation of falling 
        theTodo.classList.add("fall");
        theTodo.addEventListener("transitionend", function(){
            theTodo.remove(); // This will remove the item down here in the function, means the animation will take place first than removal
        });
    }

    if(item.classList[0] === "complete-button"){
        var ii = item.parentElement.classList.toggle("completed");
    }
}

function saveLocalStorage(todo){
    let storetodos;
    if(localStorage.getItem("todos" === null)){
        storetodos = []; //if there is no todo then make an array
    } else{
        storetodos = JSON.parse(localStorage.getItem("todos")); //ifthere is todo then grab it it with localStorage.getItem() and put it in array 
    }
    //storetodos.push(todo); //Todo is being passed as parameter that's why we're pushing it in todos array
    localStorage.setItem("todos", JSON.stringify(storetodos)); //Stringify will convert back the string to array form from localStorage
}
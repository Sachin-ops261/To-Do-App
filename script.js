const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//function to add tasks in the to-do list 
function addTask(){

    if(inputBox.value === '')       //checks if the user is inputing nothing and giving him the warning 
    {
        alert("You must write something!");
    }
    else                            //if there is data in the input box  then adding it into the list
    {
        let li = document.createElement("li");          //making a new li in the html
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");      //making a new span tag in the html
        span.innerHTML = "\u00d7";
        li.appendChild(span);                           //adding span tag inside the li
    }
    inputBox.value = '';                        
    saveData();                     //calling function
}

//function to check/uncheck the task and also deleating it 

listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")           //checking the task
    {
        e.target.classList.toggle("checked");
        console.log("li clicked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN")     //removing the task
    {
        e.target.parentElement.remove();
        console.log("span clicked");
        saveData();
    }
}, false);

//saving the data in the local storage 

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}

//getting data from local storage to show to the user

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();                 //calling function 
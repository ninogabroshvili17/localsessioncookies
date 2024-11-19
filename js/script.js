const listInput = document.getElementById("list-input");
const addButton = document.getElementById("add-btn");
const listItem = document.getElementById("list-item");
const listItems = document.getElementById("list-items");

function addTask(){
    if(listInput.value.trim() != 0){
        let newItem = document.createElement("div");
        newItem.classList.add("list-item");
        newItem.innerHTML = `
                <p>${listInput}</p>
                <div class="item-btn">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-xmark"></i>
                </div>
        `
        listItems.appendChild(newItem);
        input.value = '';
    }else{
        alert("Please enter a task! :)");
    }
}

addButton.addEventListener('click', () => {
    addTask();
})
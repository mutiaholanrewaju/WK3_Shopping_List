

//Creating an array list for the shopping details 
const listAdded = [];

const addBtn = document.getElementById("add-btn");


let counter = 0;

const itemsContainer = document.getElementById("shop-list-container");



//Updating the shopping array
function updateItem() {

    itemsContainer.innerHTML = "";

    for (let i = 0; i < listAdded.length; i++) {

        eachColumn(listAdded[i])


    }

}


function addItem() {

    
    counter++;
    const itemName = document.getElementById("itemName").value;
    const quantity = document.getElementById("quantity").value;
    const description = document.getElementById("desc").value;


    
//Form object
    const formContent = {
        id: counter,
        itemName: itemName,
        quantity: quantity,
        description: description
    };

    listAdded.push(formContent);
    updateItem();
    
    itemName.value = "";
    quantity.value = "";
    desc.value = "";
}

//Delete function once the shopping item is done 
function deleteItem(delete_id) {

    let index = listAdded.map(x => {
        return x.id;
    }).indexOf(delete_id);

    listAdded.splice(index, 1);
    updateItem();
    
}

//sectioning and styling of the shopping details
function eachColumn(formContent) {
    

    let eachinput = "<div id='column" + formContent.id + "' class='column'><div class='card'><div class='card-head'>" + formContent.itemName + "</div><div class='class-content'><p>" + formContent.description + "</p><small>" + formContent.quantity + "</small></div><div class='card-footer'><button type='button' name='delete-button' onclick='deleteItem(" + formContent.id + ")' class='del-btn' data-id=" + formContent.id + ">Done</button></div></div></div>";

    return itemsContainer.innerHTML += eachinput;
}

addBtn.addEventListener("click", addItem)

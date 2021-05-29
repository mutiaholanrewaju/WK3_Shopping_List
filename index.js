


const itemsAdded = [];
const addBtn = document.getElementById("add-btn");



let count = 0;

const itemsContainer = document.getElementById("shop-list-container");


function updateItem() {

    itemsContainer.innerHTML = "";

    for (let idx = 0; idx < itemsAdded.length; idx++) {

        eachColumn(itemsAdded[idx])


    }

}

function addItem() {

    count++;
    const itemName = document.getElementById("itemName").value;
    const quantity = document.getElementById("quantity").value;
    const description = document.getElementById("desc").value;


    //Form object
    const formContent = {
        id: count,
        itemName: itemName,
        quantity: quantity,
        description: description
    };

    itemsAdded.push(formContent);
    updateItem();

    itemName.value = "";
    quantity.value = "";
    desc.value = "";
}
//Delete 
function deleteItem(delete_id) {

    let index = itemsAdded.map(x => {
        return x.id;
    }).indexOf(delete_id);

    itemsAdded.splice(index, 1);
    updateItem();
    
}
//sectioning and styling of the shoping details
function eachColumn(formContent) {
    

    let eachinput = "<div id='column" + formContent.id + "' class='column'><div class='card'><div class='card-head'>" + formContent.itemName + "</div><div class='class-content'><p>" + formContent.description + "</p><small>" + formContent.quantity + "</small></div><div class='card-footer'><button type='button' name='delete-button' onclick='deleteItem(" + formContent.id + ")' class='del-btn' data-id=" + formContent.id + ">Remove</button></div></div></div>";

    return itemsContainer.innerHTML += eachinput;
   

}

addBtn.addEventListener("click", addItem)
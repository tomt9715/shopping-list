// function addMoreRows() {
    
//     var itemName = document.querySelector(".item-name").click();
//     itemName

//     var priceAmount = document.querySelector(".price-amount").click();

// } 

function addRow() {
    // Parent Element
    var row = document.getElementById("entry-container");

    // New Row
    let newRow = document.createElement("input");
    let newRow2 = document.createElement("input");


    row.appendChild(newRow);
}







function removeRow() {
    // Parent Element
    var row = document.getElementById("entry-container");

    // Remove Row

    row.removeChild(
        addRow(newRow)
    );
}

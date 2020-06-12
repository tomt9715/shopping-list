function getTotals() {

    var currency = new Intl.NumberFormat("en-US", {
        style: "currency", 
        currency: "USD"
    });

    var prices = document.getElementsByClassName("price-container");
    // subtotal = starting value of the total prices.
    var subtTotal = 0;
    // setting up loop to go through all indexes of array of VAR prices.
    for (var i = 0; i < prices.length; i++) {
        // HTML input element containing the user typed price value. 
        // Contains priceElement at the specified index. 
        var priceElement = prices[i]; 
        // Function to return string to num.
        // Value is added to subTotal. Concats the inputs because the value is a string not num. 
        subtTotal += Number(priceElement.value); 
    }
    var total = (subtTotal * 0.08875) + subtTotal;

    var itemTotal = document.getElementsByClassName("item-container");
    var itemNames = "";
    for (var i = 0; i < itemTotal.length; i++) {
        var itemElement = itemTotal[i];
        itemNames += itemElement.value;
    }
    var originalText = "Total before tax: ";
    var subTotalElement = document.getElementById("subtotal")
    subTotalElement.innerText = originalText + currency.format(subtTotal);

    var originalText1 = "Total after tax: ";
    var totalElement = document.getElementById("total");
    totalElement.innerText = originalText + currency.format(total);

    var originalText3 = "Total items: ";
    var itemNamesElement = document.getElementById("total-items");
    itemNamesElement.innerText = originalText3 + itemNames;

}

function insertRow() {
    // Parent Element
    var tBody = document.getElementById("tbody");

    // New Row With Inputs
    let newRow = document.createElement("tr");
        //Column 1
    let newColumn = document.createElement("td");
    let input1 = document.createElement("input");
    input1.addEventListener("keyup", getTotals);
        // Column 2
    let newColumn2 = document.createElement("td");
    let input2 = document.createElement("input");
    input2.addEventListener("keyup", getTotals);
        // Column 3
    let newColumn3 = document.createElement("td");
    let removeBtn = document.createElement("input");

    Object.assign(input1, {
        className: "item-container",
        maxLength: "128", 
        type: "text"
    })

    Object.assign(input2, {
        className: "price-container",
        maxLength: "128",
        type: "text"
    })

    Object.assign(removeBtn, {
        className: "button-container",
        type: "button",
        value: "Remove",
        onclick: removeRow
    })

    newColumn.appendChild(input1);
    newColumn2.appendChild(input2);
    newColumn3.appendChild(removeBtn);
    newRow.appendChild(newColumn);
    newRow.appendChild(newColumn2)
    newRow.appendChild(newColumn3);
    tBody.appendChild(newRow);

}

function removeRow() {
    let td = event.target.parentNode;
    let tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}

var itemActions = document.getElementsByClassName("item-container");
var priceActions = document.getElementsByClassName("price-container");
var btnActions = document.getElementsByClassName("button-container");

for (var i = 0; i < itemActions.length; i++) {
    var itemAction = itemActions[i];
    itemAction.addEventListener("keyup", getTotals);
    var priceAction = priceActions[i];
    priceAction.addEventListener("keyup", getTotals);
}

for (var i = 0; i < btnActions.length; i++) {
    var btnAction = btnActions[i];
    btnAction.removeEventListener("click", removeRow);
}
console.log(itemActions.length);
function getTotals() {

    var currency = new Intl.NumberFormat("en-US", {
        style: "currency", 
        currency: "USD"
    });

    // var subTotal = input1 + input2 + input3 + input4 + input5;
    // var originalText1 = "Total before tax: ";
    // document.getElementById("subtotal").innerText = originalText1 +currency.format(subTotal);

    // var total = (subTotal * 0.08875) + subTotal;
    // var originalText2 = "Total after tax: ";
    // document.getElementById("total").innerText = originalText2 + currency.format(total);

    // var itemTotal = item1 + "<br>" + item2 + "<br>" + item3 + "<br>" + item4 + "<br>" + item5 + "<br>";
    // document.getElementById("total-items").innerHTML = itemTotal;

    // setting prices = returns a collection of elements in the document with the specified class name.
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
        itemNames += Number(itemElement.value);
    }
    var originalText = "Total before tax: ";
    var subTotalElement = document.getElementById("subtotal")
    subTotalElement.innerText = originalText + currency.format(subtTotal);

    var originalText1 = "Total after tax: ";
    var totalElement = document.getElementById("total");
    totalElement.innerText = originalText + currency.format(total);

    var itemNamesElement = document.getElementById("total-items");

}

function insertRow() {
    // Parent Element
    var tBody = document.getElementById("tbody");

    // New Row With Inputs
    let newRow = document.createElement("tr");
    let newColumn = document.createElement("td");
    let input1 = document.createElement("input");
    let newColumn2 = document.createElement("td");
    let input2 = document.createElement("input");

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


    newColumn.appendChild(input1);
    newColumn2.appendChild(input2);
    newRow.appendChild(newColumn);
    newRow.appendChild(newColumn2)
    tBody.appendChild(newRow);

}

function removeRow() {
}

let itemAction = document.querySelector(".item-container");

function firstFunction(event) {
    event.preventDefault();
    itemAction.innerHTML = //dont know what goes here
}
itemAction.addEventListener("keydown", firstFunction);
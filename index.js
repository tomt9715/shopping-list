function getTotals() {
    var input1 = document.getElementById("input1").nodeValue;
    var input2 = document.getElementById("input2").nodeValue;
    var input3 = document.getElementById("input3").nodeValue;
    var input4 = document.getElementById("input4").nodeValue;
    var input5 = document.getElementById("input5").nodeValue;

    var subTotal = input1 + input2 + input3 + input4 + input5;
    document.getElementById("subtotal").innerText = subTotal;

    var total = (subTotal * 0.08875) + subTotal;
    document.getElementById("total").innerText = total;

    var item1 = document.getElementById("item-input1").nodeValue; 
    var item2 = document.getElementById("item-input2").nodeValue;
    var item3 = document.getElementById("item-input3").nodeValue;
    var item4 = document.getElementById("item-input4").nodeValue;
    var item5 = document.getElementById("item-input5").nodeValue;

    var itemTotal = item1 + item2 + item3 + item4 + item5;
    document.getElementById("total-items").innerText = itemTotal;
}
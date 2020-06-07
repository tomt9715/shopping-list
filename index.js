function getTotals() {
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    var input3 = parseFloat(document.getElementById("input3").value);
    var input4 = parseFloat(document.getElementById("input4").value);
    var input5 = parseFloat(document.getElementById("input5").value);

    var currency = new Intl.NumberFormat("en-US", {
        style: "currency", 
        currency: "USD"
    });

    var subTotal = input1 + input2 + input3 + input4 + input5;
    var originalText1 = document.getElementById("subtotal").innerText;
    document.getElementById("subtotal").innerText = originalText1 +currency.format(subTotal);

    var total = (subTotal * 0.08875) + subTotal;
    var originalText2 = document.getElementById("total").innerText; 
    document.getElementById("total").innerText = originalText2 + currency.format(total);

    var item1 = document.getElementById("item-input1").value; 
    var item2 = document.getElementById("item-input2").value;
    var item3 = document.getElementById("item-input3").value;
    var item4 = document.getElementById("item-input4").value;
    var item5 = document.getElementById("item-input5").value;

    var itemTotal = item1 + "<br>" + item2 + "<br>" + item3 + "<br>" + item4 + "<br>" + item5 + "<br>";
    document.getElementById("total-items").innerHTML = itemTotal;

}
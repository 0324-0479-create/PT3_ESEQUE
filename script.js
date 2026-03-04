function computeTotal(price1, price2, price3) {

    let q1 = parseInt(document.getElementById("item1").value) || 0;
    let q2 = parseInt(document.getElementById("item2").value) || 0;
    let q3 = parseInt(document.getElementById("item3").value) || 0;
    let age = parseInt(document.getElementById("age").value) || 0;

    let total = (q1 * price1) + (q2 * price2) + (q3 * price3);
    let discount = 0;

    if (age >= 60) {
        discount = total * 0.12;
    }

    let finalTotal = total - discount;

    document.getElementById("original").innerHTML = total.toFixed(2);
    document.getElementById("discount").innerHTML = discount.toFixed(2);
    document.getElementById("final").innerHTML = finalTotal.toFixed(2);
}
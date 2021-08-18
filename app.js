function updateCaseNumber(product, price, isAdding) {
    const productNumber = document.getElementById(product + "-number");
    let productQuantity = parseInt(productNumber.value);

    if (isAdding == true) {
        productQuantity = productQuantity + 1;
    } else if (productQuantity > 0) {
        productQuantity = productQuantity - 1;
    }
    productNumber.value = productQuantity;
    const productPrice = document.getElementById(product + "-price");
    productPrice.innerText = productQuantity * price;

    // calculation:
    getTotalPrice()

}

function getInputValue(product) {
    const input = document.getElementById(product + "-number");
    const inputValue = input.value;
    return inputValue;

}

//get total price
function getTotalPrice() {
    const phoneTotalPrice = getInputValue("phone") * 1219;
    const caseTotalPrice = getInputValue("case") * 59;
    const subTotal = phoneTotalPrice + caseTotalPrice;
    const subtotal = document.getElementById("subtotal");
    subtotal.innerText = subTotal

    // tax and total Amount
    const tax = subTotal / 10;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = tax + subTotal

}
// phone price increment decrement
document.getElementById("phone-plus").addEventListener("click", function () {
    updateCaseNumber("phone", 1219, true)

})
document.getElementById("phone-minus").addEventListener("click", function () {
    updateCaseNumber("phone", 1219, false)

})


// case price increment and decrement
document.getElementById("case-plus").addEventListener("click", function () {
    updateCaseNumber("case", 59, true)

})
document.getElementById("case-minus").addEventListener("click", function () {
    updateCaseNumber("case", 59, false)

})
// phone function...
/* function updatePhoneNumber(isIncrement) {
    const phoneNumber = document.getElementById('phone-number');
    let phoneNumberValue = phoneNumber.value;
    if (isIncrement) {
        phoneNumberValue = parseInt(phoneNumberValue) + 1;
    }
    else if (phoneNumberValue > 0) {
        phoneNumberValue = parseInt(phoneNumberValue) - 1;
    }
    phoneNumber.value = phoneNumberValue;
    const totalPhone = document.getElementById('phone-total');
    totalPhone.innerText = phoneNumberValue * 1219;
}
// Phone Plus button add event..
document.getElementById('phone-plus').addEventListener('click', function () {
    updatePhoneNumber(true);
})

// Phone Minus button add event..
document.getElementById('phone-minus').addEventListener('click', function () {
    updatePhoneNumber(false);
}) */

// Phone Plus button add event..
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})

// Phone Minus button add event..
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

// case function....
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productInputNumber = productInput.value;
    // let caseInputNumber = parseFloat(caseNumber);
    if (isIncreasing == true) {
        productInputNumber = parseInt(productInputNumber) + 1;
    }
    else if (productInputNumber > 0) {
        productInputNumber = parseInt(productInputNumber) - 1;
    }
    productInput.value = productInputNumber;
    //Update case Total...
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = productInputNumber * price;
    // calculate Total...
    calculateTotal();
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
// total calculation function...
function calculateTotal() {
    // const phoneInput = document.getElementById('phone-number')
    // const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = getInputValue('phone') * 1219;
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = parseInt(caseInput.value);
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // Update on the html...
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// case Plus button add event..
document.getElementById('case-plus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // // console.log(caseNumber);
    // const caseInputNumber = parseFloat(caseNumber);
    // caseInput.value = caseInputNumber + 1;
    updateProductNumber('case', 59, true)
})

// case minus button add event..
document.getElementById('case-minus').addEventListener('click', function () {
    // console.log('case minus clickedddd...');
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // // console.log(caseNumber);
    // const caseInputNumber = parseFloat(caseNumber);
    // caseInput.value = caseInputNumber - 1;
    updateProductNumber('case', 59, false)
})


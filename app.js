
// plus and mines result count for both item
function getPlusMinesResult(ticket, isIncrease) {
    const input = document.getElementById(ticket + '-input');
    const inputValue = parseInt(input.value);
    let inputTotal = inputValue;
    if (isIncrease == true) {
        inputTotal = inputValue + 1;
    } else if (isIncrease == false && inputValue > 0) {
        inputTotal = inputValue - 1;
    }
    document.getElementById(ticket + '-input').value = inputTotal;
    calculateTotal()
}

// calculating subtotal, vat, total price
function calculateTotal() {
    const firstClassInput = getInput('firstClass');
    const economyClassInput = getInput('economy');
    const subtotal = firstClassInput * 150 + economyClassInput * 100;
    document.getElementById('subtotal').innerText = subtotal
    const vatCount = subtotal * 10 / 100;
    document.getElementById('vat').innerText = vatCount;
    const totalPrice = subtotal + vatCount;
    document.getElementById('total').innerText = totalPrice;
}

// input value and int number
function getInput(isInput) {
    const input = document.getElementById(isInput + '-input').value
        ;
    const inputValue = parseInt(input);
    return inputValue;
}

// alert for user 
function getUserAlert() {
    const firstClassInput = getInput('firstClass');
    const economyClassInput = getInput('economy');
    const ticket = document.getElementById('total-ticket').innerText;
    const totalTicket = parseInt(ticket);
    const quantity = economyClassInput + firstClassInput;
    document.getElementById('total-ticket').innerText = totalTicket + quantity
    const totalPrice = document.getElementById('total').innerText;
    document.getElementById('total-amount').innerText = totalPrice;
    if (quantity == 0) {
        alert('Please Select One Thank You')
    }
    else {
        document.getElementsByClassName('booking-form')[0].style.display = 'none';
        document.getElementById('purchase-alert').style.display = 'block';
    }

}

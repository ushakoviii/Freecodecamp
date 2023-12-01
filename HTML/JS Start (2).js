let balance = 110;
document.write ('START', '<br>');

const productCost0 = window.prompt('How much product?');
const productCostNumber0 = window.Number(productCost0);
if (window.isNaN(productCostNumber0)) {
    document.write('You input incorrect price', '<br>');
    document.write('Balance = ');
    document.write(balance, '<br>');
}
else {
    if (balance >= productCostNumber0) {
        document.write('Product purchased', '<br>');
        balance = balance - productCostNumber0;
        document.write('Balance = ');
        document.write(balance, '<br>');
    }
    else {
        document.write('Not enough money', '<br>');
        document.write('Balance = ');
        document.write(balance, '<br>');
    }
}

document.write('END');
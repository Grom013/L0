let products = [
    { name: "Товар 1", price: 522, quantity: 1 },
    { name: "Товар 2", price: 10500, quantity: 200 },
    { name: "Товар 3", price: 247, quantity: 2}
];

function increaseQuantity(productIndex) {
    products[productIndex].quantity += 1;
    updateDisplay();
}

function decreaseQuantity(productIndex) {
    if (products[productIndex].quantity > 0) {
        products[productIndex].quantity -= 1;
        updateDisplay();
    } else {
        console.log("Количество не может быть меньше нуля!");
    }
}

function changeQuantity(productIndex, value) {
    value = parseInt(value);
    if (!isNaN(value) && value >= 0) {
        products[productIndex].quantity = value;
        updateDisplay();
    } else {
        console.log("Введите корректное значение количества!");
    }
}

function calculateTotal() {
    let totalQuantity = 0;
    let totalCost = 0;

    products.forEach(product => {
        totalQuantity += product.quantity;
        totalCost += product.quantity * product.price;
    });

    return { totalQuantity, totalCost };
}

function updateDisplay() {
    const orderCheckbox = document.getElementById('order-checkbox');
    const orderButton = document.getElementById('order-button');

    orderCheckbox.addEventListener('change', function() {
        if (this.checked) {
            orderButton.textContent = `${totalCost} com`;
        } else {
            orderButton.textContent = 'Заказать';
        }
    });
    const { totalQuantity, totalCost } = calculateTotal();
    document.getElementById("totalQuantity").innerHTML = `${totalQuantity} товара`;
    const totalCostElements = document.querySelectorAll('.totalCost');
    const totalCostValue =totalCost;

    totalCostElements.forEach(element => {
        element.innerHTML = `${totalCostValue} <span>com</span>`;
    });
    products.forEach((product, index) => {
        const quantityInput = document.querySelector(`#product${index + 1} .count`);
        quantityInput.value = product.quantity;

        const priceElementDesktop = document.querySelector(`#product${index + 1} .prod-price-now-desk`);
        const priceElementMobile = document.querySelector(`#product${index + 1} .prod-price-now`);

        const price = window.matchMedia('(max-width: 768px)').matches ? product.price : null;

        if (price !== null) {
            priceElementDesktop.style.display = 'none';
            priceElementMobile.style.display = 'block';
            priceElementMobile.innerHTML = `${product.quantity * price} <span>сом</span>`;
        } else {
            priceElementDesktop.style.display = 'block';
            priceElementMobile.style.display = 'none';
            priceElementDesktop.innerHTML = `${product.quantity * product.price} <span>сом</span>`;
        }
    });
}

window.addEventListener('resize', updateDisplay);
updateDisplay();

const menu = document.getElementById("menu");
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");

function addItem() {
    const productName = productNameInput.value;
    const productPrice = parseFloat(productPriceInput.value);

    if (productName && !isNaN(productPrice)) {
        const item = document.createElement("div");
        item.className = "menuItem";
        item.innerHTML = `
            <p>${productName}</p>
            <p>R$ ${productPrice.toFixed(2)}</p>
            <button onclick="removeItem(this)">Remover</button>
        `;
        menu.appendChild(item);

        productNameInput.value = "";
    }
    productPriceInput.value = "";
}

function removeItem(button) {
    const item = button.parentElement;
    menu.removeChild(item);
}

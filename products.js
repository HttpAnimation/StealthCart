// products.js

const productSection = document.getElementById("product-section");

function loadProducts() {
    fetch("products.txt")
        .then(response => response.json())
        .then(data => displayProducts(data));
}

function displayProducts(products) {
    products.forEach((product, index) => {
        const productItem = document.createElement("div");
        productItem.className = "product-item";

        const productImage = document.createElement("img");
        productImage.src = product["Main-Photo"];

        const productTitle = document.createElement("h3");
        productTitle.textContent = product["Name"];

        const productDescription = document.createElement("p");
        productDescription.textContent = product["Description"];

        const productButton = document.createElement("button");
        productButton.textContent = "Show more info";
        productButton.onclick = () => openPopup(product["Name"], product["Description"], Object.values(product["Slideshow"]), product["Buy-Button-URL"]);

        const buyButton = document.createElement("a");
        buyButton.id = "popup-buy-button"; // Assuming the ID is "popup-buy-button"
        buyButton.href = product["Buy-Button-URL"];
        const buyButtonElement = document.createElement("button");
        buyButtonElement.textContent = "Buy";
        buyButton.appendChild(buyButtonElement);

        productItem.appendChild(productImage);
        productItem.appendChild(productTitle);
        productItem.appendChild(productDescription);
        productItem.appendChild(productButton);
        productItem.appendChild(buyButton);

        productSection.appendChild(productItem);
    });
}

// Load products when the page is ready
document.addEventListener("DOMContentLoaded", loadProducts);

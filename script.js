// script.js

let slideIndex = 1;

function showSlides(n) {
    const slides = document.querySelectorAll(".mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function openPopup(title, description, images, buyButtonUrl) {
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");
    const buyButton = document.getElementById("popup-buy-button");

    // Reset slideIndex when opening a new popup
    slideIndex = 1;

    // Log information to the console for debugging
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Images:", images);

    // Set popup details
    popupTitle.textContent = "Product Name: " + title;
    popupDescription.textContent = "Description: " + description;

    // Set the source of the existing image element
    popupImage.src = images[0];

    // Set the Buy button URL
    buyButton.href = buyButtonUrl;

    // Display the popup
    popup.style.display = "block";

    // Show the slides
    showSlides(slideIndex);

    // Previous and Next button event listeners
    document.querySelector(".prev").addEventListener("click", () => {
        plusSlides(-1);
        popupImage.src = images[slideIndex - 1];
    });

    document.querySelector(".next").addEventListener("click", () => {
        plusSlides(1);
        popupImage.src = images[slideIndex - 1];
    });
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
    slideIndex = 1;
}

// Show the first slide when the page is ready
document.addEventListener("DOMContentLoaded", () => showSlides(slideIndex));

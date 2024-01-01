// script.js

// Initialize slide index
let slideIndex = 1;

// Function to show slides
function showSlides(n, images) {
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

    // If images are provided, update the source of the existing image element
    if (images) {
        const popupImage = document.getElementById("popup-image");
        popupImage.src = images;
    }
}

// Function to navigate to the next or previous slide
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Function to open the popup with details and images
function openPopup(title, description, images, buyButtonUrl) {
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");
    const buyButton = document.getElementById("popup-buy-button");

    // Reset slideIndex when opening a new popup
    slideIndex = 1;

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
    showSlides(slideIndex, images);
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
    slideIndex = 1;
}

// Show the first slide when the page is ready
document.addEventListener("DOMContentLoaded", () => showSlides(slideIndex));

// Function to automatically cycle through slides
function autoCycleSlides() {
    setInterval(() => {
        plusSlides(1);
        const images = document.getElementById("popup-image").getAttribute("src");
        showSlides(slideIndex, images);
    }, 3000); // Change the duration (in milliseconds) between slides as needed
}

// Call the autoCycleSlides function to start automatic cycling
document.addEventListener("DOMContentLoaded", autoCycleSlides);

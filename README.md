# StealthCart - Elevate Your Dropshipping Experience

Discover unparalleled convenience in online shopping with StealthCart, your premier destination for dropshipping.

## Installation Guide

Set up StealthCart effortlessly with these simple steps:

1. Open a terminal.
2. Clone the repository using Git:
    ```bash
    git clone https://github.com/HttpAnimation/StealthCart.git
    ```
3. Navigate to the StealthCart folder:
    ```bash
    cd StealthCart
    ```
4. Open StealthCart in your preferred IDE:
    ```bash
    code .
    ```
    If using the Flatpak version, use:
    ```bash
    flatpak run flathub com.visualstudio.code .
    ```
    If you don't have an IDE or Flatpak installed, run:
    ```bash
    flatpak install flathub com.visualstudio.code
    ```

## Adding a Product

Effortlessly integrate new products into StealthCart with the following steps:

1. Open the **products.txt** file and replace its content with this template:

```json
[
    {
        "Name": "Product 1",
        "Main-Photo": "Testing/Main.png",
        "Description": "Description of the product",
        "Slideshow": {
            "Photo-1": "Testing/Slideshow1.png",
            "Photo-2": "Testing/Slideshow2.png",
            "Photo-3": "Testing/Slideshow3.png"
        },
        "Buy-Button-URL": "https://example.com/"
    }
]
```

Note: The **Photo-3** and **Photo-2** links are currently broken.

2. Customize the template by replacing placeholders with your product details:

```json
[
    {
        "Name": "USB Mouse",
        "Main-Photo": "Product-2/Main.png",
        "Description": "Experience nostalgia with this USB mouse from 2001, complete with extra dirt on the ball inside.",
        "Slideshow": {
            "Photo-1": "Product-2/Slideshow1.png",
            "Photo-2": "Product-2/Slideshow2.png",
            "Photo-3": "Product-2/Slideshow3.png"
        },
        "Buy-Button-URL": "https://example.com/"
    }
]
```

Ensure your product information is accurate and compelling. Update image URLs to point to your actual product images.

Now, unveil your product on StealthCart and captivate potential customers!

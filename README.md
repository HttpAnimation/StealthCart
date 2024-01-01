# StealthCart

StealthCart is your go-to dropshipping website for a seamless shopping experience.

## Adding a Product

To add a new product to StealthCart, follow these steps:

1. Open the file **products.txt** and replace its contents with the following template:

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

Please note that the **Photo-3** and **Photo-2** links are currently broken.

2. Modify the template by replacing each placeholder with the specific details of your product. For example:

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

Ensure that you provide accurate and enticing information about your product to attract potential customers. Additionally, update the image URLs to point to the actual location of your product images.

Now you're ready to showcase your product on StealthCart!
//Product class creation to be used on the main page cards display, product page and cart page. 
//! not all of the constructor elements are present on main or product page. 
//I used the same spelling used in the backend files and added two other elements (variation and quantity)
class Product{
    constructor(id, name, description, imageUrl, price, variation, quantity) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.variation = variation;
        this.quantity = quantity;        
    };
};
//end of Product class
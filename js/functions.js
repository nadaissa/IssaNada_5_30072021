//Product class creation to be used on the main page cards display, product page and cart page. 
//! not all of the constructor elements are present on main or product page. 
//I used the same spelling used in the backend files and added two other elements (option and quantity)
class Product{
    constructor(id, name, description, imageUrl, price, option, quantity) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.option = option;
        this.quantity = quantity;        
    };
};

//Product class creation to be used on the main page cards display
class Product{
    constructor(id, name, description, imageUrl, price, option, quantity) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = +price;
        this.option = option;
        this.quantity = +quantity;        
    };
};

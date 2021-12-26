//localStorage call for shopping cart content
const cartStorage = JSON.parse(localStorage.getItem("cameras")) || [];
console.log("cartStorage", cartStorage);

//defining the price converting function to be insert to the single product fetch and to cart table items
function convertPrice(productPrice) {
    let cost = `${productPrice}`;
    cost = Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
    }).format(cost / 100);
    return cost;
};


//class to be used to add products to the shopping cart and modify products quantity in cart
class productObject{
    constructor(id, name, imageUrl, price, quantity) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.quantity = quantity;        
    };
};


//
const totalBadge = document.querySelector("#numProdsInCart");
totalBadge.innerHTML +=
        `<span>${badge()}</span>`;    

function badge(){
    let totalIn = 0;
    cartStorage.forEach((item) => {
        totalIn = totalIn + item.quantity;
    });
    return totalIn;  
};






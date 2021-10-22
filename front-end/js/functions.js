//getting items from local storage
const shoppingCart = JSON.parse(localStorage.getItem('cameras'));

//class to be used to add products to the shopping cart
class productObject{
    constructor(id, name, imageUrl, price, quantity) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.quantity = quantity;        
    };
};

//defining the price converting function (it's in the product page too, try to put it only here)
function convertPrice(productPrice) {
    let cost = `${productPrice}`;
    cost = Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
    }).format(cost / 100);
    return cost;
};

//shopping cart display
function displayProducts(productObject) {
    let indexProduct = shoppingCart.indexOf(productObject);
    const productList = document.getElementById("cart-tablebdoy");
    productList.innerHTML += `
    <tr class="text-center">
        
        <th>
            <img src="${productObject.imgUrl}" class="img-fluid img-thumbnail" alt="${productObject.name}">
        </th>
       
        <td>
            <span>${productObject.name}</span>
        </td>

        <td>
            <button type="button" class="rounded minus data-toggle="modal" data-target="#exampleModal" data-index="${indexProduct}"><span class="fas fa-minus-square text-danger" data-index="${indexProduct}"></span></button>
            <span class="mx-0 mx-lg-3"> ${productObject.quantity}</span>
            <button type="button" class="rounded plus" data-toggle="modal" data-target="#exampleModal" data-index="${indexProduct}"><span class="fas fa-plus-square text-success" data-index="${indexProduct}"></span></button>
        </td>

        <td>
            <span>${convertPrice(productObject.price)}</span>
        </td>
    </tr>`
};
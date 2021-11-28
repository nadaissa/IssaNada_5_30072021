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

//class to be used to add products to the shopping cart
/*class productObject{
    constructor(id, name, imageUrl, price, quantity) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.quantity = quantity;        
    };
};*/

//displaying shopping cart
/*function CartDisplay(product) {
    const indexProduct = cartStorage.indexOf(product);
    const productsTable = document.querySelector("#productTable");
    productsTable.innerHTML += `
            <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Nom</th>
                  <th scope="col">Quantité</th>
                  <th scope="col">Prix</th>
                  <th scope="col">Supprimer</th>
                </tr>
            </thead>
            <tbody id="cart-tablebody">
                <tr>
                    <th scope="row">
                        <img src="${product.imgUrl}" class="img-fluid img-thumbnail" alt="${product.name}">
                    </th>
                    <td>
                        <span>${product.name}</span>
                    </td>
                    <td>
                        <button type="button" class="rounded minus data-toggle="modal" data-target="#exampleModal" data-index="${indexProduct}">
                            <span class="fas fa-minus-square text-danger" data-index="${indexProduct}"></span>
                        </button>
                        <span class="mx-0 mx-lg-3"> ${product.quantity}</span>
                        <button type="button" class="rounded plus" data-toggle="modal" data-target="#exampleModal" data-index="${indexProduct}">
                            <span class="fas fa-plus-square text-success" data-index="${indexProduct}"></span>
                        </button>
                    </td>
                    <td> 
                        <span>${convertPrice(product.price)}</span>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="2"></th>
                    <td>Sous total</td>
                    <td class="subtotal">
                        <span>${convertPrice(product.quantity * product.price)}</span>
                    </td>
                    <td></td>
                </tr>
            </tfoot>
            <!--end of products table-->
            <div class="col d-flex align-items-center justify-content-center my-4">
              <button type="button" class="btn btn-danger m-1">Vider le panier</button>
            </div>
    `
 
};*/




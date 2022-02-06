//localStorage call for shopping cart content
const cartStorage = JSON.parse(localStorage.getItem("cameras")) || [];
//console.log("cartStorage", cartStorage);

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


//setting the badge preview
const totalBadge = document.getElementById("numProdsInCart");
totalBadge.innerHTML +=
        `<span>${badge()}</span>`;    

function badge(){
    let totalIn = 0;
    cartStorage.forEach((item) => {
        totalIn = totalIn + item.quantity;
    });
    return totalIn;  
};

//Setting the total price in shopping cart function
  
function calculation(){
    let totalCalcul = 0;
    cartStorage.forEach((product) => {
        totalCalcul = totalCalcul + product.price * product.quantity;
        //console.log(totalCalcul);
    });
    return convertPrice(totalCalcul);
};

//display table of products
function productsDisplay(product){
    const indexProduct = cartStorage.indexOf(product);
    let productsTable = document.querySelector("#cart-tablebody");
    productsTable.innerHTML += `
            <tr class= "items-row">                    
                <td>
                    <a href="../front-end/product.html?_id=${product.id}" class="text-light">  
                        <img src="${product.imageUrl}" class="img-fluid img-thumbnail w-50" alt="${product.name}"><br>                    
                        <span> ${product.name}</span>
                    </a>  
                </td>
                <td class="w-25">
                    <span type="button" class="fas fa-minus-square removeMinus" data-index="${indexProduct}"></span>
                    <span class="mx-0 mx-lg-3 items-qty"> ${product.quantity}</span>
                    <span type="button" class="fas fa-plus-square addPlus" data-index="${indexProduct}"></span>
                </td>
                <td class="w-50"> 
                    <span id="totalItem" class="total-item">${convertPrice(product.quantity * product.price)}</span>
                    <span class="fas fa-trash-alt deleteTrash" data-index="${indexProduct}"></span>
                </td>
                    
            </tr>            
`
};


//setting the function for the command form in shopping cart page
function order(){
    let contactInfo = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        inputEmail: document.querySelector("#inputEmail").value,
        inputAddress: document.querySelector("#inputAddress").value,
        inputCity: document.querySelector("#inputCity").value,
        inputZip: document.querySelector("#inputZip").value,
    };
    

    //setting the loop for the successful input
    if (
        (condName.test(contactInfo.firstName) === true) &
        (condName.test(contactInfo.lastName) === true) &
        (condMail.test(contactInfo.inputEmail) === true) &
        (condCity.test(contactInfo.inputCity) === true) &
        (condZip.test(contactInfo.inputZip) === true) &
        (condAddress.test(contactInfo.inputAddress) === true) &
        (checkBox.checked === true) 
        ) {
            let products = [];
            for (list of cartStorage){
                products.push(list.id);            
            };
        
            //the post method
            fetch("http://localhost:3000/api/cameras/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ contactInfo, products }),
            })
                .then((response) => response.json())
                .then(() => {
                    let order = {
                        contactInfo,
                        products
                    };
                    localStorage.setItem("order", JSON.stringify(order));
                    document.location.href = "confirmation.html";
                })
                
            .catch((erreur) => console.log("erreur : " + erreur));
        
        }else{   
        //setting the loop for the non-successful input
        alert("Merci de respecter les consignes de saisie et de remplir et cocher tous les champs!");
    };
};



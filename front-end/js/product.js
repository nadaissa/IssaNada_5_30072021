//query parameter url
const urlParams = new URLSearchParams(location.search);
const productId = urlParams.get("_id");
//const tableOption = urlParams.get("lenses");



//url constant with id parameter
const productUrl = `http://localhost:3000/api/cameras/${productId}`;

//defining the optional lenses function to be insert to the single product fetch later
function lenseParam(singleProduct){
    let optionContent = '';
    for (let lense of singleProduct.lenses){
        optionContent += `<option>${lense}</option>`;           
        };
        return optionContent;  

};

//defining the price converting function to be insert to the single product fetch later
function convertPrice(productPrice) {
    let cost = `${productPrice}`;
    cost = Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
    }).format(cost / 100);
    return cost;
};


//let productTable = [];

//fetching single product and defining its display and its add-to-cart method

fetch(productUrl)
    .then((response) => response.json())
    .then((data) => {
        //productTable.push(data);
        displayProduct(data);
        addItem(data);    
    })
    //the error catch
    .catch(function(error) {
        console.log('Il y a eu un problème: ' + error.message);
    });
    //console.log(productTable[0]._id + "test");
    

    function displayProduct(singleProduct){    
        const productDiv = document.querySelector("#pcontent");
            productDiv.innerHTML += 
            `<div class="col-sm">
            <div class="card mt-4">
                    <img class="card-img-top" src="${singleProduct.imageUrl}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">${singleProduct.name}</h5>
                        <p class="card-text">${singleProduct.description}</p>
                        <select class="custom-select my-2">
                                <option >Modèles</option>
                                ${lenseParam(singleProduct)}                                                      
                        </select>
                        <p id="price_tag" class="card-text font-weight-bold text-right my-2">
                                <span class="my-1">Prix</span>
                                <span class="my-1">${convertPrice(singleProduct.price)}</span>                        
                                </p>
                        <button id="addToCartBtn" class="add_btn btn btn-primary btn-dark font-weight-bold my-2">Ajouter au panier</button>
                    </div>
            </div>
            </div>`
    };
    

    
    //adding an item function:
    function addItem(productIn) {
        const addBtn = document.querySelector("#addToCartBtn");
        addBtn.addEventListener("click", (addEvent) => {
            addEvent.preventDefault();
        //create a product object
        const productObject = {
            id: productIn._id,
            name: productIn.name,
            imageUrl: productIn.imageUrl,
            price: productIn.price,
            quantity: 0, //problème parce que jn'ai la qt que dans le panier
        };
        
        //check if product is there or not
        //if yes let alreadyAdded be true and keep it in the localStorage
        let alreadyAdded = false;
        let returnFromIndex;
        for (specificProd of cartStorage) {
            switch(productObject) {
                case specificProd.id:
                    alreadyAdded = true;
                    returnFromIndex = cartStorage.indexOf(specificProd);
                    //products index is to be defined in the cart page ([])
            };
        };
        
            //and then add quantity
            if(alreadyAdded){
                cartStorage[returnFromIndex].quantity = 
                    +cartStorage[returnFromIndex].quantity + +productObject.quantity;
                localStorage.setItem("cameras", JSON.stringify(cartStorage));
            //if not add the product
            }else{
                cartStorage.push(productObject);
                localStorage.setItem("cameras", JSON.stringify(cartStorage));
            }; 
        });
    };

    

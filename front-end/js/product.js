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




//fetching single product and defining its display

fetch(productUrl)
    .then((response) => response.json())
    .then((data) => {
        displayProduct(data);
        //addItem(data);
    })
    //the error catch
    .catch(function(error) {
        console.log('Il y a eu un problème: ' + error.message);
    });

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
                        <button id="addToCartBtn" class="add_btn btn btn-primary btn-dark font-weight-bold my-2" onclick="{addItem()}">Ajouter au panier</button>
                    </div>
            </div>
            </div>`
    };
    

    
    //adding an item function:
    function addItem(singleProduct) {
        console.log("hello");
        
        //create a new product object by the class productObject declared
        let newProduct = new productObject(
            productId,
            singleProduct.name,
            singleProduct.imageUrl,
            singleProduct.price,
            singleProduct.quantity,
        );

        //check if product is there or not
        //if yes let alreadyAdded be true and keep it in the localStorage
        let isAlreadyAdded = false;
        let modifyingIndex;
        for (allProducts of cartContent) {
            switch(newProduct.productId) {
                case allProducts.productId:
                    isAlreadyAdded = true;
                    modifyingIndex = cartContent.indexOf(allProducts);
                    //products index is to be defined in the cart page ([])
            };
        };
        
            //and then add quantity
            if(isAlreadyAdded){
                cartContent[modifyingIndex].quantity ++;
                localStorage.setItem("cameras", JSON.stringify(cartContent));
            //if not add the product
            }else{
                cartContent.push(newProduct);
                localStorage.setItem("cameras", JSON.stringify(cartContent));
            };    
    };   

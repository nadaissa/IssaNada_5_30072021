//query parameter url
const urlParams = new URLSearchParams(location.search);
const productId = urlParams.get("_id");




//url constant with id parameter
const productUrl = `http://localhost:3000/api/cameras/${productId}`;

//setting the optional lenses function to be insert to the single product fetch later
function lenseParam(singleProduct){
    let optionContent = '';
    for (let lense of singleProduct.lenses){
        optionContent += `<option>${lense}</option>`;           
        };
        return optionContent;  

};

//fetching single product and defining its display and its add-to-cart method
fetch(productUrl)
    .then((response) => response.json())
    .then((data) => {
        displayProduct(data);
        addItem(data);    
    })
    //the error catch
    .catch(function(error) {
        console.log('Il y a eu un problème: ' + error.message);
    });
    
    
    //the product display function included in the fetch 
    function displayProduct(singleProduct){    
        const productDiv = document.querySelector("#pcontent");
            productDiv.innerHTML += 
            `<div class="col productCard" style="max-width: 550px">
            <div class="card mt-4">
                <img class="card-img-top img-fluid" style="width: 100%; height: 75%" src="${singleProduct.imageUrl}" alt="Card image cap">
                <div class="card-body">
                    <h2 class="card-title font-weight-bold h5">${singleProduct.name}</h2>
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
                    <div class="toast show font-weight-bold" id="addedToast" hidden>
                        <div class="toast-header" style="background-color: #2E2E2E">
                            <strong class="mr-auto text-light">Produit ajouté!</strong>
                            <strong type="button" class="ml-2 mb-1" data-dismiss="toast" style="color: #8F5BFE" id="closeToast">rester ici</strong>
                        </div>
                        <div class="toast-body" style="background-color: #2E2E2E">
                            <a id="nav__cart-icon" class="nav-link" style="color: #E78B06" href="cart.html" aria-label="icon panier">
                                <span class="fas fa-shopping-basket"></span>
                                => Aller au panier
                            </a>
                            <a id="nav__home-icon" class="nav-link" style="color: #E78B06" href="../index.html" aria-label="icon accueil">
                                <span class="fas fa-home"></span>
                            <= Retourner aux produits </a>
                        </div>
                    </div>
                </div>                    
            </div>
        </div>`
    };
    

    
    //adding an item function:
    function addItem(productIn) {
        const addBtn = document.querySelector("#addToCartBtn");
        addBtn.addEventListener("click", (addEvent) => {
            addEvent.preventDefault();
        //create a product new object from the class created in the function js document
        const productToCart = new productObject (
            productId,
            productIn.name,
            productIn.imageUrl,
            productIn.price,
            quantity = 1
        );
        
        //check if product is there or not
        //if yes let alreadyAdded be true and keep it in the localStorage
        let alreadyAdded = false;
        let returnFromIndex;
        for (specificProd of cartStorage) {
            if(specificProd.id === productToCart.id){
                alreadyAdded = true;
                returnFromIndex = cartStorage.indexOf(specificProd);
                
            };
            };
        
            //and then add quantity
            if(alreadyAdded){
                cartStorage[returnFromIndex].quantity = 
                    +cartStorage[returnFromIndex].quantity + +productToCart.quantity;
                localStorage.setItem("cameras", JSON.stringify(cartStorage));
            //if not add the product
            }else{
                cartStorage.push(productToCart);
                localStorage.setItem("cameras", JSON.stringify(cartStorage));
            };

            //disabling add button and displaying toast with navigation option when product added
            addBtn.disabled = true;
            const toastConf = document.getElementById("addedToast");
            toastConf.toggleAttribute("hidden");
            document.getElementById('closeToast').addEventListener('click', function(){
                toastConf.setAttribute("hidden", "");
                location.reload();
            });              
        });
        
    };

    
    

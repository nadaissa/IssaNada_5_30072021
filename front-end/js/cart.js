//setting display functions if cart is empty
if (cartStorage == 0){
    let productsTable = document.querySelector("#cart-tablebody");
    productsTable.innerHTML += `
                <tr>
                <td colspan="3" class="text-center font-weight-bold"> Votre panier est vide</td>
                </tr>
    `;
    //let the common buttons be desabled if cart is empty
    let emptyDisabled = document.getElementsByTagName("button");
    for (i of emptyDisabled){
    i.disabled = true;
    };
    //if cart is not empty display the products list
}else{
    for(product of cartStorage){
        //displaying function set later
        productsDisplay(product);
    };
};

//the display function for table of products in shopping cart
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
                    
            </tr>`
};




//displaying the total sum of the shopcart by calling the calculation function in the js functions doc
const totalCart = document.querySelector("#total-cart");
totalCart.innerHTML +=
        `<td>Total Panier</td>
        <td></td>
        <td>${calculation()}</td>`; 

        

//indexRef is for defining the indexation property to add and remove products -
//by targeting data-index attribute in innerHtml content here above

//add item by plus button
let addWPlus = document.getElementsByClassName("addPlus");
for (adding of addWPlus) {
    adding.addEventListener("click", (event) => {
    let indexRef = event.target.getAttribute("data-index");
    cartStorage[indexRef].quantity++;
    localStorage.setItem("cameras", JSON.stringify(cartStorage));
    location.reload();
    });
};

//remove item by minus button
let remWMinus = document.getElementsByClassName("removeMinus");
for (removing of remWMinus) {
    removing.addEventListener("click", (event) => {
        let indexRef = event.target.getAttribute("data-index");
        //prevent clicking on minus button if the item quantity is 1
        if (cartStorage[indexRef].quantity === 1){
            remWMinus.disabled = true;
        //remove one item with the minus button if the quantity more than 1    
        }else{
            cartStorage[indexRef].quantity--;
        }
        localStorage.setItem("cameras", JSON.stringify(cartStorage));
        location.reload();
    });
};

//deleting individual item
let dltWTrash = document.getElementsByClassName("deleteTrash");
for (deleting of dltWTrash){
    deleting.addEventListener("click", (event) => {
        let indexRef = event.target.getAttribute("data-index");
        cartStorage.splice(indexRef, 1);
        localStorage.setItem("cameras", JSON.stringify(cartStorage));
        location.reload();
    });
};


//clear cart content
const emptyCart = document.querySelector("#emptyCart");
emptyCart.addEventListener('click', (empty) =>{
    empty.preventDefault();
    //ask for confirmation before deleting
    if ( confirm( "êtes-vous certain(e) de vouloir vider votre panier?" ) ) {
        localStorage.clear();
        location.reload();
    } else {         
    };
    });


//setting input rules for form validation

//setting constants for the form div, the submit button and the checkbox
const orderForm = document.querySelector("#orderForm");
const submitForm = document.querySelector("#submitBtn");
const checkBox = document.querySelector("#checkbox");



//setting constants for the regex conditions
//for names one or more strings from characters between a and z (lower and upper cases)
const condName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
//for emails one or more strings from characters between a and z (lower and upper cases) then @ symbole then a dot and lowercases
const condMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
//for city name same as names but limited to 10 characters
const condCity = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
//for zip code a non-capturing group of 5digits, first two from 01 to 98
const condZip = /^(?:[0-8]\d|9[0-8])\d{3}$/;
//for address same as names but with possibility of numbers and limited to 10 characters by string
const condAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;



   
    //setting the event listener in case of click on the submit button
    //setting the function for the command form
    submitForm.addEventListener("click", (validate) =>{
        validate.preventDefault();
       //setting the contactInfo object to use later in the confirmation page
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
                
                //setting the order id random operation
                let orderId = Math.floor((1 + Math.random())* 0x10000)
                    .toString(16)
                    .substring(1);
                    localStorage.setItem("orderId", orderId);
            
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
                            products,
                            orderId
                        };
                        localStorage.setItem("order", JSON.stringify(order));
                        document.location.href = `confirmation.html?&${order.orderId}&${order.contactInfo.firstName}&${order.contactInfo.lastName}`;
                        
                    })
                    
                .catch((erreur) => console.log("erreur : " + erreur));
            }else{   
            //setting the loop for the non-successful input
            alert("Merci de respecter les consignes de saisie et de remplir et cocher tous les champs!");
        };
    });
    
    
    
    
    
        

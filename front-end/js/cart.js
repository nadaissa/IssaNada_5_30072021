if (cartStorage == 0){
    let productsTable = document.querySelector("#cart-tablebody");
    productsTable.innerHTML += `
                <tr>
                <td colspan="3" class="text-center font-weight-bold"> Votre panier est vide</td>
                </tr>
    `;
}else{
    for(product of cartStorage){
        const indexProduct = cartStorage.indexOf(product);
        let productsTable = document.querySelector("#cart-tablebody");
        productsTable.innerHTML += `
                <tr>                    
                    <td>
                        <img src="${product.imageUrl}" class="img-fluid img-thumbnail w-50" alt="${product.name}"><br>                    
                        <span> ${product.name}</span>
                    </td>
                    <td class="w-25">
                        <span type="button" id="removeMinus" class="fas fa-minus-square" data-index="${indexProduct}"></span>
                        <span class="mx-0 mx-lg-3"> ${product.quantity}</span>
                        <span type="button" id="addPlus" class="fas fa-plus-square" data-index="${indexProduct}"></span>
                    </td>
                    <td class="w-25"> 
                        <span id="totalItem">${convertPrice(product.quantity * product.price)}</span><br>
                        <span id="deleteTrash" class="fas fa-trash-alt" data-index="${indexProduct}"></span>
                    </td>
                </tr>            
    `
    };
};

//Setting the function for total sum of the shopcart
const totalCart = document.querySelector("#total-cart");
totalCart.innerHTML +=
        `<td>Total Panier</td>
        <td></td>
        <td>${calculation()}</td>`;    

function calculation(){
    let totalCalcul = 0;
    cartStorage.forEach((product) => {
        totalCalcul = totalCalcul + product.price * product.quantity;
        console.log(totalCalcul);
    });
};

//add item by plus button
let addWPlus = document.querySelector("#addPlus");
addWPlus.addEventListener("click", (adding) =>{
    adding.preventDefault();
    console.log("add?");
});


//Clear cart
const emptyCart = document.querySelector("#emptyCart");
emptyCart.addEventListener('click', (empty) =>{
    empty.preventDefault();
    localStorage.clear();
});


//setting input rules for form validation

//setting constants for the form div, the submit button and the checkbox
const orderForm = document.querySelector("#orderForm");
const submitForm = document.querySelector("#submitBtn");
const checkBox = document.querySelector("#checkbox");

//setting constants for the regex conditions
/*for names one or more strings from characters between a and z (lower and upper cases) 
with possible accent letters with one white space or - only, 
or one or more strings with no space or -*/
const condName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
/*for emails one or more strings from characters between a and z (lower and upper cases) 
and/or entire number and/or dots dashes then @ symbole, then two or more characters 
with the same rules with no special characters then a dot and then lowercases between 2 and 4 letters*/
const condMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
//for city name same as names but limited to 10 characters
const condCity = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
/*for zip code a non-capturing group of 5digits, first two ange from 01 to 98 
(\d indicates for each of this cases we have only one digit) then the rest is limited to 3 digits*/
const condZip = /^(?:[0-8]\d|9[0-8])\d{3}$/;
//for address same as names but with possibility of numbers and limited to 10 characters by string
const condAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;

//setting the contactInfo object to use later in the confirmation page

    
    //setting the event listener in case of click on the submit button
    submitForm.addEventListener("click", (validate) =>{
        validate.preventDefault();
        checkInput();
    });
    
    function checkInput (){
        const contactInfo = {
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
                //alert("bravo!");
                //the post method
                fetch("http://localhost:3000/api/cameras/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactInfo),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        localStorage.setItem("order", JSON.stringify(data));
                        document.location.href = "confirmation.html";
                    })
                .catch((erreur) => console.log("erreur : " + erreur));
        //setting the loop for the non-successful input
        } else {   

            alert("Merci de respecter les consignes de saisie et de remplir et cocher tous les champs!");
        }
    };        
            
        

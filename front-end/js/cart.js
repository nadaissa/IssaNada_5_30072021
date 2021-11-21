//localStorage call for shopping cart content
const cartContent = JSON.parse(localStorage.getItem("cameras"));

//displaying shopping cart
function cartDisplay(product) {
    const indexProduct = cartContent.indexOf(product);
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
 
};


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
            
        
    //setting the function for the validation upcome
    /*function submitOk(){
            console.log("mm");

            ici mettre function de submit ou il y a la list de produit et aussi la liste des contacts et post et définir le post
            //here create product list
            let products = [];
            for (listId of basket) {
                products.push(listId.id);
            }

            //the post method
            fetch("http://localhost:3000/api/cameras/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactInfo),
            });
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem("order", JSON.stringify(data));
                    document.location.href = "https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage";
                });
                .catch((erreur) => console.log("erreur : " + erreur));

        };*/
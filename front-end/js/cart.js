//getting items from local storage
const shoppingCart = JSON.parse(localStorage.getItem('cameras'));


//displaying shopping cart
function productsDisplay(product) {
    //const indexProduct = shoppingCart.indexOf(product);
    const productsTable = document.querySelector("#pcontent");
    productsTable.innerHTML += `
    //contenu
    ` 
};



//setting input rules for form validation
//setting constants for the form div and the submit button
const orderForm = document.querySelector("#orderForm");
const submitForm = document.querySelector("#submitBtn");
const checkBox = document.querySelector("#checkbox");
//setting constants for the regex conditions
const condName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
const condMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
const condCity = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
const condZip = /^(?:[0-8]\d|9[0-8])\d{3}$/;
const condAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;

      



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

        
        if (
            (condName.test(contactInfo.firstName) === true) &
            (condName.test(contactInfo.lastName) === true) &
            (condMail.test(contactInfo.inputEmail) === true) &
            (condCity.test(contactInfo.inputCity) === true) &
            (condZip.test(contactInfo.inputZip) === true) &
            (condAddress.test(contactInfo.inputAddress) === true) &
            (checkBox.checked === true) 
            ) {
                alert("bravo!");

        } else if(
            (!condName.test(orderForm.firstName.value)) ||
            (!condName.test(orderForm.lastName)) ||
            (!condMail.test(contactInfo.inputEmail)) ||
            (!condCity.test(contactInfo.inputCity)) ||
            (!condZip.test(contactInfo.inputZip)) ||
            (!condAddress.test(contactInfo.inputAddress)) ||
            (checkBox.checked !== true)     

        ) {
            
            alert("Merci de remplir ou cocher tous les champs!");    
        
        
        } else {
        
            alert("Un problème inattendu!");
        }
    };        
            
            /*ici mettre function de submit ou il y a la list de produit et aussi la liste des contacts et post et définir le post
            //here create product list
            /*let products = [];
            for (listId of basket) {
                products.push(listId.id);
            }

            //here the post method
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
                    document.location.href = "./confirmation.html";
                });
                .catch((erreur) => console.log("erreur : " + erreur));*/


/*        */



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

const orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("click", validate);
function validate() {      
    if( document.formArea.fName.value === "" ) {
       alert( "Please provide your name!" );
       document.formArea.fName.focus() ;
       return false;
    };
    return( true );
};

//forms input rules
//defining the form fields constants
/*const orderForm = document.getElementsByid("orderForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("inputEmail4");
const address = document.getElementById("inputAddress");
const city = document.getElementById("inputCity");
const zipCode = document.getElementById("inputZip");
const checkBox = document.getElementById("invalidCheck2");

//defining the form input conditions
const condName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
const condMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
const condCity = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
const condZip = /^(?:[0-8]\d|9[0-8])\d{3}$/;
const condAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;*/


/*submitOrder.addEventListener("click", (event) => {
    // contactInfo object
    let contactInfo = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("inputEmail4").value,
        address: document.getElementById("inputAddress").value,
        city: document.getElementById("inputCity").value,
        zipCode: document.getElementById("inputZip").value,
        
    }
    // input conditions
    if (        
        (condName.test(contactInfo.firstName) == true) &
        (condName.test(contactInfo.lastName) == true) &
        (condMail.test(contactInfo.email) == true) &
        (condAddress.test(contactInfo.address) == true) &
        (condCity.test(contactInfo.city) == true) &
        (condZip.test(contactInfo.zipCode) == true) &        
        (checkBox.checked == true)
    ) {
        event.preventDefault();

        // POST
        fetch("https://teddies-api.herokuapp.com/api/cameras/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ contactInfo }),
        });
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("order", JSON.stringify(data));
                document.location.href = "order.html";
            });
            .catch((erreur) => console.log("erreur : " + erreur));
    } else {
        alert(
            "Veuillez remplir le formulaire pour valider votre commande."
        );
    };
};*/






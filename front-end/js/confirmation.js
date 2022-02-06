//parsing the order object posted in the cart page
const orderParse = JSON.parse(localStorage.getItem('order')) || [];

//hide basket icon area to prevent redirection to cart page
let hiddenLinks = document.getElementsByClassName("nav-hide");
    for(i of hiddenLinks){
        i.style.display="none";
    };


//display products infos
for (product of cartStorage) {
    let finalDisplay = document.getElementById("finalTable");
    finalDisplay.innerHTML += `
        <tbody>
            <tr>
                <td class="w-50">${product.name}</td>
                <td class="w-50">${product.quantity}</td>
            </tr>
        </tbody>
    `
};

//display order info
const orderInfo = document.getElementById("orderInfo");
orderInfo.innerHTML += `

    <p>
        <span class="font-weight-bold">N° de commande: </span>
        <span>${orderParse.orderId}</span>
    </p>
    <p>
        <span class="font-weight-bold">Nom client(e): </span>
        <span>${orderParse.contactInfo.firstName}</span>
        <span>${orderParse.contactInfo.lastName}</span>
    </p>
    <p>
        <span class="font-weight-bold">Somme total réglée: </span>
        <span>${calculation()}</span>
    </p>

    <p>
        <span class="font-weight-bold">Confirmation envoyée à: </span>
        <span>${orderParse.contactInfo.inputEmail}</span>
    </p>

    <p>

        <a id="leave-page" class="nav-link" href="../index.html" aria-label="icon accueil">
            <span class="fas fa-hand-point-left"></span>
            <span>Revenir à l'accueil</span>
        </a>    
    </p>

    `;

    //reloading page and cartStorage when clicking on leave page
    const leaveHere = document.getElementById("leave-page");
    leaveHere.addEventListener("click", (out)=>{
        out.preventDefault;
        localStorage.clear();
    });
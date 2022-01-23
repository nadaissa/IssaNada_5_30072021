const orderParse = JSON.parse(localStorage.getItem('order')) || [];


console.log(orderParse);


//display products
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

    `;



//<p class="fs-5"><span class="fw-bold text-capitalize">${order.contactInfo.firstName}</span>
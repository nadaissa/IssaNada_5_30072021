//Fetch to display the shopping elements on the index page

fetch("http://localhost:3000/api/cameras")
        .then((response) => response.json())
        .then((data) => {
        ListProducts(data);
    })

    .catch(function(error) {
        console.log('Il y a eu un problème: ' + error.message); //the error catch needs to be confirmed
    });

    //The function mentioned in the fetch needs to be configured in order to display the products
    function ListProducts(data) {
        for (product of data){
            const content = document.querySelector("#pcontent");
            content.innerHTML +=
            `<div class="col-sm-6">
                <div class="card mt-4">
                        <img class="card-img-top" src="${product.imageUrl}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <a href="#" class="btn btn-primary btn-dark font-weight-bold ">Voir le produit</a>
                        </div>
                </div>
            </div>`
        };

    };

    
    
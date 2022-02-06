//Fetch to display the shopping elements on the index page

fetch("http://localhost:3000/api/cameras")
        .then((response) => response.json())
        .then((data) => {
        listProducts(data);
    })

    //the error catch
    .catch(function(error) {
        console.log('Il y a eu un problème: ' + error.message);
    });

    //The function mentioned in the fetch needs to be configured in order to display the products
    //image, title and description are called directly in the data fetched previously and then in relation to the product class i've created
    //the link to the product page includes the query http protocole with reference to the product id
    function listProducts(data) {
        for (product of data){
            const displayDiv = document.querySelector("#pcontent");
            displayDiv.innerHTML +=
            `<div class="col-sm-6 d-flex justify-content-center">
                <div class="card mt-4" style="max-width: 550px">
                        <img class="card-img-top img-fluid" style="width: 100%; height:75%"src="${product.imageUrl}" alt="Card image cap">
                        <div class="card-body">
                            <h2 class="card-title font-weight-bold h5">${product.name}</h2>
                            <a href="../front-end/product.html?_id=${product._id}" class="btn btn-primary btn-dark font-weight-bold">Voir le produit</a>
                        </div>
                </div>
            </div>`
        };

    };


    
    
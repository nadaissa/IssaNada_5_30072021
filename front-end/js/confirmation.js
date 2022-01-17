const getOrder = localStorage.getItem("order");
const orderParse = JSON.parse(getOrder) || [];
//const dateParse = JSON.parse(localStorage.getItem("date")) || [];

console.log(getOrder);
//console.log(dateParse);

//display order info
const orderInfo = document.getElementById("orderInfo");
orderInfo.innerHTML += `${order.contactInfo.firstName}`;


//<p class="fs-5"><span class="fw-bold text-capitalize">${order.contactInfo.firstName}</span>
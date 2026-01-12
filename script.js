const product = document.getElementById("calcProduct");
const personal = document.getElementById("calcPersonalisation");
const price = document.getElementById("price");

function updatePrice() {
    price.innerText = Number(product.value) + Number(personal.value);
}

product.addEventListener("change", updatePrice);
personal.addEventListener("change", updatePrice);

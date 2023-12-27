let products = document.getElementById("products");
function getdata() {
    products.innerHTML = ''
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach((item, index) => {
        let div = document.createElement('div');
        div.className = 'box'
        div.innerHTML = `
            <img src="${item.image}" alt="">
            <p>${item.title}</p>
            <h3>${item.price}$</h3>
            <button onclick="remove(${index})"><i class="fa-solid fa-trash"></i>Remove to cart</button>
            `
        products.appendChild(div)
    })
}
getdata()
function remove(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cart));
    getdata()
    console.log(cart);
}
function display(data) {
    products.innerHTML = ''
    data.forEach((item, index) => {
        let div = document.createElement('div');
        div.className = 'box'
        div.innerHTML = `
            <img src="${item.image}" alt="">
            <p>${item.title}</p>
            <h3>${item.price}$</h3>
            <button onclick="remove(${index})"><i class="fa-solid fa-trash"></i>Remove to cart</button>
            `
        products.appendChild(div)
    })
}
// SEARCH
let form = document.getElementById("form");
let inp = document.getElementById("inp");
let min = document.getElementById("min");
let max = document.getElementById("max");
form.addEventListener("submit", srchFunc)
min.addEventListener("click", minFunc)
max.addEventListener("click", maxFunc)

function srchFunc(e) {
    e.preventDefault();
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let data = cart.filter((item) => item.title.toLowerCase().includes(inp.value.toLowerCase()));
    display(data);
}
function maxFunc() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let data = cart.sort((a, b) => (b.price - a.price));
    display(data)
}
function minFunc() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let data = cart.sort((a, b) => (a.price - b.price));
    display(data)
}

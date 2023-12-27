let products = document.getElementById("products");
let btn = document.getElementById('btn')
btn.addEventListener("click", getdata)

let page = 1;
let limit = 4;
let data

async function getdata() {
    await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/products?page=${page}&limit=${limit}`)
        .then((res) => {
            data = res.data;
            data.forEach((item) => {
                let div = document.createElement('div');
                div.className = 'box'
                div.innerHTML = `
                    <img src="${item.image}" alt="">
                    <p>${item.title}</p>
                    <h3>${item.price}$</h3>
                    <button onclick="addTocart(${item.id})"><i class="fa-solid fa-cart-shopping"></i>Add to cart</button>
                    `
                products.appendChild(div)
            })
        })

}

getdata()

// SEARCH
let form = document.getElementById("form");
let inp = document.getElementById("inp");
form.addEventListener("submit", serachfunc);

async function serachfunc(e) {
    e.preventDefault()
    let val = inp.value
    await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/products`)
        .then((res) => {
            db = res.data;
            let data = db.filter((item) => item.title.toLowerCase().includes(val));
            display(data)
            console.log(data)
        })
}




//SORT
let min = document.getElementById("min")
let max = document.getElementById("max")
max.addEventListener("click", maxFunc)
min.addEventListener("click", minFunc)

async function maxFunc() {
    await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/products`)
        .then((res) => {
            db = res.data;
            let data = db.sort((a, b) => (a.price - b.price));
            display(data)
        })

}
async function minFunc() {
    await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/products`)
        .then((res) => {
            db = res.data;
            let data = db.sort((a, b) => (b.price - a.price));
            display(data)
        })

}

function display(data) {
    products.innerHTML = ''
    data.forEach((item) => {
        let div = document.createElement('div');
        div.className = 'box'
        div.innerHTML = `
            <img src="${item.image}" alt="">
            <p>${item.title}</p>
            <h3>${item.price}$</h3>
            <button onclick="addTocart(${item.id})"><i class="fa-solid fa-cart-shopping"></i>Add to cart</button>
            `
        products.appendChild(div)
    })

}

function addTocart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(data.find((item) => item.id == index));
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
}




// https://655f2b37879575426b44b8f7.mockapi.io/basket
// https://655f2b37879575426b44b8f7.mockapi.io/products

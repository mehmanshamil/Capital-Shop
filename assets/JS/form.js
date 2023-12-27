let email = document.getElementById("email")
let pass = document.getElementById("pass")
let form = document.getElementById("form")

form.addEventListener('submit',formget)
 function formget(e){
    e.preventDefault();
    let data={
        email:`${email.value}`,
        password:`${pass.value}`
    }
    axios.post("https://655f2b37879575426b44b8f7.mockapi.io/basket",data)
    console.log(data);
 }
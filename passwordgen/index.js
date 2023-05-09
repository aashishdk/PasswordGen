let btnElem = document.querySelector(".btn")

let inputElem = document.querySelector("#input")

btnElem.addEventListener("click",()=>{
    createPassword();
})


function createPassword() {
    const chars = "023456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const passwordLength = 8;
    let password = '';

    for (let index = 0; index < passwordLength; index++) 
    {
        let randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }
    inputElem.value = password;
}
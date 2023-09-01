let password=document.getElementById("password");
let confirmation=document.getElementById("confirmation");
let button=document.querySelector("button");

button.addEventListener("click",()=>{
    if(password.value!=confirmation.value){
        password.style.borderColor="red";
        confirmation.style.borderColor="red";
    }else{
        password.style.borderColor="revert";
        confirmation.style.borderColor="revert";

    }
})
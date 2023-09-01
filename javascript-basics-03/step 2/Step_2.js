document.addEventListener('DOMContentLoaded', function(){
    
let show=document.getElementById("show");
let hide=document.getElementById("hide");

let text=document.getElementById("texte");

show.addEventListener('click', function(){
    text.style.display="block";
});


hide.addEventListener('click', function(){
    text.style.display="none";
});

})



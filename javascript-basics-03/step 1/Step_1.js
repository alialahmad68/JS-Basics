let image=document.querySelector("#image1");


image.onmouseover = function(){mouseOver()}
image.onmouseout = function(){mouseOut()}


function mouseOver(){
image.style.border="3px solid red";

}
function mouseOut(){
    image.style.border="0";
}


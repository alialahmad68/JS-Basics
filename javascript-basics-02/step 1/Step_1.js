let image=document.querySelector("#image1");


image.onmouseover = function(){mouseOver()}
image.onmouseout = function(){mouseOut()}


function mouseOver(){
    image.src="./images/image1_2.jpg";
}
function mouseOut(){
    image.src="./images/image1.jpg";
}


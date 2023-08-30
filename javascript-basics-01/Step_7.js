

function Calculate(){
let shoe_size = parseFloat(document.getElementById("shoe_size").value);
let year = parseFloat(document.getElementById("year").value);

let result=(((((shoe_size*2)+5)*50)-year)+1766);

alert("Result is: "+result);
}

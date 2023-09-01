

function resetFields(){

    const input=document.querySelectorAll("input");

    const response=confirm("Are oyou sure you want to clear?")


if(response){
    input[0].value="";
    input[1].value="";
    input[2].value="";

}
}


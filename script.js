

let count=0;
function result(){

    let value=document.getElementById("value").value;
if(value==""){
    alert("enter some text")
}
else

{

    document.getElementById("output").value=value;
    count++;
    document.getElementById("number").innerHTML=count;
    document.getElementById("value").value="";
}
    
}



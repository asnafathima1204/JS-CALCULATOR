function btnclick(val){
   document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function cleardisplay(){
    document.getElementById("screen").value="";
}

function deleteLast() {
    var currentText = document.getElementById("screen").value;
    document.getElementById("screen").value = currentText.slice(0, -1);
}
function equalclick(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result;
}
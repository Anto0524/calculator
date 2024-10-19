function appendtodisplay(value){
    document.getElementById("display").value+=value;
}
function clear1(){
    document.getElementById("display").value="";
}
function del(){
    var current_data=document.getElementById("display").value;
    document.getElementById("display").value=current_data.slice(0,-1);

}
function calculate(){
    var data=document.getElementById("display").value;
    try{
        var result=eval(data)
        document.getElementById("display").value=result;

    }catch(error){
        document.getElementById("display").value="error";
    }
}
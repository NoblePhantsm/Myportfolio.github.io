
function add() {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = parseInt(a) + parseInt(b);
    var d = a + '  ' + "+" + '   ' + b + '   ' + "=" + '    ' + c;
    document.getElementById("text").innerHTML = d;
}
function times() {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = parseInt(a) * parseInt(b);
    var d = a + '  ' + "x" + '   ' + b + '   ' + "=" + '    ' + c;
    document.getElementById("text").innerHTML = d;



}
function divide() {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = parseInt(a) / parseInt(b);
    var d = a + '  ' + "x" + '   ' + b + '   ' + "=" + '    ' + c;
    document.getElementById("text").innerHTML = d;


}
function clear() {
    document.getElementById("numbers").reset();
}





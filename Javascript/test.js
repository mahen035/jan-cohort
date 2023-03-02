
function clearValue(){
    document.getElementById("inputCal").value = "";
}
function displayNum(value) {
    document.getElementById("inputCal").value += value;
    }
function outputValue(){
var inputValue = document.getElementById("inputCal").value;
var result= eval(inputValue);
document.getElementById("inputCal").value = result;
}
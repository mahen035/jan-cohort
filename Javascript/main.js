//var count = 0;
function test(){
    count++;       // count = count+1;(
    document.getElementById("result").innerHTML = count +" time(s)"
   //let a = document.querySelectorAll("h1");
   //a[0].hidden=true;
   //a[1].hidden=true;
   //var name = "John";  // No datatypes will be mentioned in javascript
   //name=12
   //alert(typeof name);
   //document.getElementById("head1").style.backgroundColor="yellow";
}

function greet(){
    var inputValue = document.getElementById("txt1").value
    document.getElementById("greetVal").innerHTML="Hello: "+inputValue
}

function addTen(){
    var numberOne = parseInt(document.getElementById("num1").value)
    document.getElementById("newNum").innerHTML=numberOne+10
}

function calculate(){
    var exp = document.getElementById("calc").value
    document.getElementById("res1").value=eval(exp)
}

function myPrompt(){
    let personAge = prompt("Enter your Age")
    if(personAge != null){
        document.getElementById("res2").innerHTML = "Hi, You entered your age = " +personAge
    }
}

function myConfirm(){
    let flag = confirm("You want to continue")
    alert(flag)
    if(flag){
        document.getElementById("res3").innerHTML = "User is ok to go ahead";
    }
    else{
        document.getElementById("res3").innerHTML = "User has cancelled";
    }
}
let count = 0
function guess(){
    const LUCKY_NUMBER = 6
   
    let text = ''
    let guessedNumber = document.getElementById("lucky").value

    if(guessedNumber == LUCKY_NUMBER){
        count++;
        text="You Guessed it right in "+count+" attempts"
    }
    else{
        count++
        text = "Not really, give it another try..."
    }

    document.getElementById("msg").innerHTML = text
}
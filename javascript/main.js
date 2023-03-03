
let nameData = []
let emailData = []

function addData(){
    
    let email = document.getElementById("exampleInputEmail1").value

    let name = document.getElementById("exampleInputName").value

    nameData.push(name)
    emailData.push(email)

    let table = '<table border="1">';
    table += `<tr><th>NAME</th><th>EMAIL</th></tr>`;

    for(let i=0;i<nameData.length;i++){
       table = table + `<tr>`;
       table = table + `<td>${nameData[i]}</td>`;
       table = table + `<td>${emailData[i]}</td>`;
       table += `</tr>`;
    }
    table += "</table>";

    document.getElementById("display").innerHTML = table
    document.getElementById("exampleInputEmail1").value = ''
    document.getElementById("exampleInputName").value = ''

}
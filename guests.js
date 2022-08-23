function httpGet(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}



document.addEventListener('DOMContentLoaded', function (){
    var obj = JSON.parse(httpGet("https://hostel-app-back-end-api.herokuapp.com/customers"));

    var table = document.getElementById("gueststable");
    let size = Object.keys(obj).length;
    console.log(obj);
    
    for(let i=0; i<size; i++){

        var row = table.insertRow(1);
        var cell = row.insertCell(0);
        cell.innerHTML = obj[size-i-1]["emailAddress"];
        cell = row.insertCell(0);
        cell.innerHTML = obj[size-i-1]["lastName"];
        cell = row.insertCell(0);
        cell.innerHTML = obj[size-i-1]["firstName"];
        cell = row.insertCell(0);
        cell.innerHTML = obj[size-i-1]["phoneNumber"];
        cell = row.insertCell(0);
        cell.innerHTML = obj[size-i-1]["id"];
    }
});


document.getElementById('savebtn').addEventListener('click', function () {
    window.location.href="guests.html";
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    
    var row = table.insertRow(1);
    var cell = row.insertCell(0);
    cell.innerHTML = email;
    cell = row.insertCell(0);
    cell.innerHTML = lastname;
    cell = row.insertCell(0);
    cell.innerHTML = firstname;
    cell = row.insertCell(0);
    cell.innerHTML = phone;
    cell = row.insertCell(0);
    cell.innerHTML = size+1;
}); 




let Fname = "joao";
let Lname = "silva";
let num = "+55 17 666666666";
let email = "dsadsadsa.com";
let id = 2;


var table = document.getElementById("gueststable");

for(i=0; i<guests.lenght; i++){
    var row = table.insertRow(1);
    var cell = row.insertCell(0);
    cell.innerHTML = guests.email;
    cell = row.insertCell(0);
    cell.innerHTML = guests.Lname;
    cell = row.insertCell(0);
    cell.innerHTML = guests.Fname;
    cell = row.insertCell(0);
    cell.innerHTML = guests.num;
    cell = row.insertCell(0);
    cell.innerHTML = guests.id;
}
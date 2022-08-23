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

    console.log(localStorage);
    if(localStorage.length>0){
        console.log(localStorage.getItem('email'));
        var row = table.insertRow(size+1);
        var cell = row.insertCell(0);
        cell.innerHTML = localStorage.getItem('email');
        cell = row.insertCell(0);
        cell.innerHTML = localStorage.getItem('lastname');
        cell = row.insertCell(0);
        cell.innerHTML = localStorage.getItem('firstname');
        cell = row.insertCell(0);
        cell.innerHTML = localStorage.getItem('phone');
        cell = row.insertCell(0);
        cell.innerHTML = size+1;
    }
});


function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("gueststable");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }






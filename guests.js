function httpGet(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}



document.addEventListener('DOMContentLoaded', function () {
    var obj = JSON.parse(httpGet("https://cors-anywhere.herokuapp.com/https://hostel-app-back-end-api.herokuapp.com/customers"));

    var table = document.getElementById("gueststable");

    var size = Object.keys(obj).length;
    console.log(size);

    for (i = 0; i < size; i++) {
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
});




class Guest {
  firstName;
  lastName;
  emailAddress;
  phoneNumber;

  constructor(firstName, lastName, emailAddress, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getEmailAddress() {
    return this.emailAddress;
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }

}


function httpGet(url) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
}



document.addEventListener('DOMContentLoaded', function () {
  var obj = JSON.parse(httpGet("https://cors-anywhere.herokuapp.com/https://hostel-app-back-end-api.herokuapp.com/customers"));
  let i = 0;
  var table = document.getElementById("gueststable");
  let size = Object.keys(obj).length;
  if (size == 23 && localStorage.getItem("size") == null) {
    localStorage.setItem("size", size);
  }

  for (i = 0; i < size; i++) {

    var row = table.insertRow(1);
    var cell = row.insertCell(0);

    const guest = new Guest(obj[size - i - 1]["firstName"],
      obj[size - i - 1]["lastName"],
      obj[size - i - 1]["emailAddress"],
      obj[size - i - 1]["phoneNumber"]);

    cell.innerHTML = guest.getEmailAddress();
    cell = row.insertCell(0);
    cell.innerHTML = guest.getLastName();
    cell = row.insertCell(0);
    cell.innerHTML = guest.getFirstName();
    cell = row.insertCell(0);
    cell.innerHTML = guest.getPhoneNumber();
    cell = row.insertCell(0);
    cell.innerHTML = size - i - 1;
  }


  if (localStorage.getItem("size") >= 23) {
    localStorage.setItem('size', parseInt(localStorage.getItem("size")));
    const localSize = localStorage.getItem("size");

    var data = localStorage.getItem("guest_" + parseInt(size)).split(', ');
    console.log(data + "guest_" + parseInt(size));

    for (i; i < localSize; i++) {
      var data = localStorage.getItem("guest_" + i).split(', ');
      var row = table.insertRow(size + 1);
      var cell = row.insertCell(0);
      cell.innerHTML = data[2]
      cell = row.insertCell(0);
      cell.innerHTML = data[1]
      cell = row.insertCell(0);
      cell.innerHTML = data[0]
      cell = row.insertCell(0);
      cell.innerHTML = data[3]
      cell = row.insertCell(0);
      cell.innerHTML = size;
      size = size + 1;
    }
  }
});


function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("gueststable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
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






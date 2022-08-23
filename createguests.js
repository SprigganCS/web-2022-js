document.getElementById('savebtn').addEventListener('click', function () {

    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    const size = localStorage.getItem('size');

    localStorage.setItem("guest_" + parseInt(size), firstname + ", " + lastname + ", " + email + ", " + phone + ", " + parseInt(size));
    localStorage.setItem("size", parseInt(size) + 1);
    window.location.href = "guests.html";

});



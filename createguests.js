document.getElementById('savebtn').addEventListener('click', function () {
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);

    window.location.href="guests.html";
});

    

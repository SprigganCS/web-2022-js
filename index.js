const btn = document.getElementById('loginbtn');

btn.addEventListener('click', function () {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user == 'admin' && pass == 'admin') {
            window.location.href = 'guests.html';
    }
});    

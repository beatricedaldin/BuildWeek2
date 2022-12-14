let loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', function (e) {
    e.preventDefault();


    let email = document.querySelector('input[name="email"]');
    let password = document.querySelector('input[name="password"]');

    let options = {
        method: 'POST',
        body: JSON.stringify({

            email: email.value,
            password: password.value
            

        }),

        headers:{
            "content-type":"application/json"
        }
    }

    fetch("http://localhost:3000/login", options)
    .then (res => res.json())
    .then (data => {

        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('user', JSON.stringify(data.user));
        
    if (data.accessToken != null) {

        location.href = 'index.html';

    } else {

        alert("Hai dimenticato l'id, la password, oppure non sei registrato.")
    }
    })
})
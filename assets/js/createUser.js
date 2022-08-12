import {User, apiUrlU} from './class.js'

let goBackBtn = document.querySelector('.goBack')
goBackBtn.addEventListener('click', function(){
    location.href = 'index.html'
})

let submitUser = document.querySelector('.submit')
submitUser.addEventListener('click', function(e){
    e.preventDefault()

   
    let name = document.querySelector('#name').value
    let surname = document.querySelector('#surname').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let date = document.querySelector('#date').value
    let region = document.querySelector('#region')
    var valueR = region.options[region.selectedIndex].text
    let grade = document.querySelector('#grade')
    var valueG = grade.options[grade.selectedIndex].text
    var role = User.role

    let user = new User(name, surname, email, password, date, valueR, valueG, role)
    console.log(user)

    let options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            "content-type":"application/json"
            
        }
    }
    
    fetch(apiUrlU, options)
    .then(res => res.json())
    .then(res => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'A new user just popped up!',
            text:`The User ${res.name} ${res.surname} has just been created`,
            showConfirmButton: false,
            timer: 3000
        })
        document.querySelector('#myForm').reset();

        

    })

location.href = "login.html";})
import { apiUrlU, User } from './class.js';
    
    let params = new URLSearchParams(location.search);
    let userId = params.get('id');

    // class User{
    //     constructor(email, password, name, surname, dateOfBirth, region, rank, id){
    //         this.email = email
    //         this.password = password
    //         this.name = name
    //         this.surname = surname
    //         this.dateOfBirth = dateOfBirth
    //         this.region = region
    //         this.rank = rank
    //         this.id = id
          
    //     }
    // }

    // const apiUrlU = "http://localhost:3000/users"


fetch(apiUrlU+'/'+userId)
.then(res => res.json())
.then(user => {


   
    let name = document.querySelector('#name')
    let surname = document.querySelector('#surname')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    let dateOfBirth = document.querySelector('#dateOfBirth')
    let region = document.querySelector('#region')
    let rank = document.querySelector('#rank')
    // let id = document.querySelector('#id')

    //let valueA = availability.options[availability.selectedIndex].text; 


    name.value = user.name
    surname.value = user.surname
    email.value = user.email
    password.value = user.password
    dateOfBirth.value = user.dateOfBirth
    region.value = user.region
    rank.value = user.rank
    // id.value = user.id

    
    
})

let upBtn = document.querySelector('#update');

upBtn.addEventListener('click',function(e){
    e.preventDefault();


    let name = document.querySelector('#name').value
    let surname = document.querySelector('#surname').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let dateOfBirth = document.querySelector('#dateOfBirth').value
    let region = document.querySelector('#region').value
    let rank = document.querySelector('#rank').value
   
    //var valueA = availability.options[availability.selectedIndex].text;

    let user = new User(name, surname, email, password, dateOfBirth, region, rank)

    let options = {
        method: 'PUT',
        body: JSON.stringify(user),
        headers:{
            "content-type":"application/json"
        }
    }
    
    fetch(apiUrlU+'/'+userId,options)
    .then(res => res.json())
    .then(user => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Profile updated',
            text:`The profile ${user.name} has just been updated`,
            showConfirmButton: false,
            timer: 3000
        })
    })
})



let goBackBtn = document.querySelector('#goBack')
goBackBtn.addEventListener('click', function(){
    location.href = 'index.html'
})
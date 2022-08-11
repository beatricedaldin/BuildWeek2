const apiUrlU = "http://localhost:3000/users"


class User{
    constructor(name, surname, dateOfBirth, region, rank, id){
        this.name = name
        this.surname = surname
        this.dateOfBirth = dateOfBirth
        this.region = region
        this.rank = rank
        this.id = id
    }
}


let params = new URLSearchParams(location.search);
let userId = params.get('id')
console.log(userId)


fetch (apiUrlU + "/" + userId)
.then(res => res.json())
.then(user => {
    console.log(user)

let updateBtn = document.createElement('a')
updateBtn.innerHTML = "Update"
updateBtn.href = "profile.html?id=" + userId
document.querySelector('.btnProfile').append(updateBtn)


    


        let card = document.querySelector('#infoUser')



        let descriptionName = card.querySelector('#name')
        descriptionName.innerHTML = ' ' + user.name + ' ' + user.surname


        let descriptionDateOfBirth = card.querySelector('#dateOfBirth')
        descriptionDateOfBirth.innerHTML = 'Date of birth : ' + user.dateOfBirth

        let descriptionRegion = card.querySelector('#region')
        descriptionRegion.innerHTML = 'Region : ' + user.region

        let descriptionRank = card.querySelector('#rank')
        descriptionRank.innerHTML = 'Rank : ' + user.rank

        let descriptionId = card.querySelector('#id')
        descriptionId.innerHTML = 'Id : ' + user.id

        lista.append(card)
    }

)





   
 


























// let params = new URLSearchParams(location.search);
// let userId = params.get('id')
// console.log(userId)

// fetch('http://localhost:3000/utenti'+'/'+userId)
// .then(res => res.json())
// .then(utente => {

    
//     let firstName = document.querySelector('#firstName')
//     firstName.innerHTML = utente.firstName
//     let lastName = document.querySelector('#lastName')
//     lastName.innerHTML = utente.lastName
//     let dateBoard = document.querySelector('#dateBoard')
//     dateBoard.innerHTML = utente.dateBoard
//     let region = document.querySelector('#region')
//     region.innerHTML = utente.region
//     let grade = document.querySelector('#grade')
//     grade.innerHTML = utente.grade
    
    

// })

// let goBackBtn = document.querySelector('#goBack')
// goBackBtn.addEventListener('click', function(){
//     location.href='index.html'
// })
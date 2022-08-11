

function deleteBook(id,el){
    const apiUrlB = "http://localhost:3000/books"

    let options = {
        method: 'DELETE',
        headers:{
            "content-type":"application/json"
        }
    }

    fetch(apiUrlB+'/'+id,options)
    .then(res => res.json())
    .then(res => {
      
        el.remove()
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'DELETED',
            text:'YOU just removed this book from the catalog!',
            showConfirmButton: false,
            timer: 3000
        })
    })

}



// Local Storage config
let users = localStorage.getItem("userinfo") ? JSON.parse (localStorage.getItem("userinfo")) : [];

console.log(users);

 let result = document.getElementById('result');
// to print the data from the local storage

function printUser(){
    result.innerHTML += `<img src=${users.profile} height="120px" width="150px" alt="">

    <p><b>USER ID : </b><span>${users.id}</span></p>
    <p><b>Name :</b><span>${users.name}</span></p>
    <p><b>Email :</b><span>${users.email}</span></p>
    <p>
        <a href="update.html" class="btn" >EDIT</a> 
       <a href="#" class="btn" onclick = 'deleteUser(${users.id})'>DELETE</a>
    </p>`;
}
printUser();

function deleteUser(id){
    if (confirm(`Are you sure to delete an user id = ${id} ?`)) {
       
     if(id === users.id){
        localStorage.removeItem('userinfo');
            alert("user successfully deleted ");
           result.style.display = 'none';
     }
        }else{
            alert('Delete operation cancelled');
        }
    }
let userForm = document.getElementById('userForm');
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userProfile = document.getElementById('profile');
let userGender = document.getElementsByName('gender');
let selGender = "";

// Local Storage config
let users = localStorage.getItem("userinfo") ? JSON.parse (localStorage.getItem("userinfo")) : [];


// to generate random ID - arrow function
const genranId = ()=>{
    let randId = Math.floor(Math.random() * 1000);
    return randId;
}

// form submit handler
userForm.addEventListener("submit", function(e){
    e.preventDefault();


    for (let index = 0; index < userGender.length; index++) {
        if (userGender[index].checked) {
            selGender = userGender[index].value;
            // console.log(selGender)
        }
    }

    // Object 
    let data = {
        id:genranId(),
        name: userName.value,
        email: userEmail.value,
        profile: userProfile.value,
        gender : selGender
    };
    //console.log(data)
    createUser(data);
});

// TO create new user
function createUser(user){
    //console.log(user)

    if (user.email === users.email) {
        alert('user email already registered');
    }else{
        localStorage.setItem("userinfo",JSON.stringify(user));
        alert("New user created successfully");
        window.location.href = "index.html";
    }
   
};
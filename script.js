document.getElementById("loginform").addEventListener("submit", function(e){

e.preventDefault();

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

fetch("https://login-employeemanagement-3.onrender.com/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
username:username,
password:password
})

})

.then(response => response.text())

.then(token =>{

console.log("Token:",token);

localStorage.setItem("token",token);

document.getElementById("msg").innerText="Login success";

const payload = JSON.parse(atob(token.split('.')[1]));

const role = payload.roles;

if(role === "ROLE_ADMIN"){

window.location.href="admin-dashboard.html";

}else{

window.location.href="user-dashboard.html";

}

})

.catch(error=>{
console.error(error);
document.getElementById("msg").innerText="Login Failed";
});

});
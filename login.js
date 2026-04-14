document.getElementById("loginform").addEventListener("submit", function(e){

e.preventDefault();

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

fetch("https://helllo24.github.io/Login_FrontendProject/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
username:username,
password:password
})
                                
})

.then(response => response.json())

.then(data =>{
localStorage.setItem("username",username);
console.log(data);
document.getElementById("msg").innerText=data;

if(data.success && data.data === "Otp is sent to user"){

window.location.href="otp.html";
}else{
  document.getElementById("msg").innerText=data.message;

}

})                          
})



// function verifyotp(){

// localStorage.setItem("token",token);

// document.getElementById("msg").innerText="Login success";

// const payload = JSON.parse(atob(token.split('.')[1]));

// const role = payload.roles;

// if(role === "ROLE_ADMIN"){

// window.location.href="admin-dashboard.html";

// }else{

// window.location.href="user-dashboard.html";

// }

// })

// .catch(error=>{
// console.error(error);
// document.getElementById("msg").innerText="Login Failed";
// });

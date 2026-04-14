document.getElementById("registerform").addEventListener("submit", function(e){

    e.preventDefault();

    //get credendtial
   const username = document.getElementById("username").value;
   const password = document.getElementById("password").value;
   const mail = document.getElementById("email").value;

   //call api

   fetch("https://login-employeemanagement-3.onrender.com/auth/register" , {
    method : "POST",
     headers:{
        "Content-type" : "application/json"
     },

     body: JSON.stringify({
        username:username,
        password:password,
        mail : mail
     })
   })

   .then(response => response.text())
   .then(data=>{


const returnmsg =document.getElementById("msg").innerText=data;




   })
  .catch(error => {
console.error(error);
});


});



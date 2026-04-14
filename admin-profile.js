function adminProfile(){




const token = localStorage.getItem("token");




fetch("https://helllo24.github.io/Login_FrontendProject/admin/dashboard" ,{

method:"GET",

headers :{
"Authorization" : "Bearer " + token
}

})

.then(response=>response.text())

.then(data =>{

console.log("profile:" , data);

document.getElementById("profile").innerText=data;

})

.catch(error =>{

console.error(error);

});

}

function logout(){

localStorage.removeItem("token");
window.location.href="login.html"

}
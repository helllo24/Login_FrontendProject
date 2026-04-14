document.getElementById("otpverifyform").addEventListener("submit", function(e){

e.preventDefault();

const otpInputs = document.querySelectorAll(".otp-box");


let otp = "";

otpInputs.forEach(input => {
  otp += input.value;
});

if(otp.length !== 6){
document.getElementById("msg").innerText = "Enter 6 digit OTP";
return;
}

const username = localStorage.getItem("username");

fetch(`https://helllo24.github.io/Login_FrontendProject/auth/verify_otp?username=${username}&otp=${otp}`,{
method:"POST"
})

.then(res => res.text())
.then(token =>{

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
document.getElementById("msg").innerText="OTP verification failed";
});

});



const inputs = document.querySelectorAll(".otp-box");

inputs.forEach((input, index) => {

    input.addEventListener("input", (e) => {

        // only number allow
        e.target.value = e.target.value.replace(/[^0-9]/g, "");

        if (e.target.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {

        if (e.key === "Backspace" && input.value === "" && index > 0) {
            inputs[index - 1].focus();
        }
    });

});
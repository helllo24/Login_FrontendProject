document.getElementById("resetform").addEventListener("submit", async function(e){

    e.preventDefault();

    const retoken = document.getElementById("retoken").value;
    const newpassword = document.getElementById("newpassword").value;
    const confirmpassword = document.getElementById("confirmpassword").value;

    if(retoken === ""){
        document.getElementById("msg").innerText = "Retoken is empty";
        return;
    }

    if(newpassword !== confirmpassword){
        document.getElementById("msg").innerText = "Passwords do not match";
        return;
    }

    try {

        const response = await fetch("https://login-employeemanagement-3.onrender.com/auth/rest-password", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        resetToken: retoken,
        newPassword: newpassword
    })
});
        if (!response.ok) {
            const err = await response.text();
            document.getElementById("msg").innerText = err;
            return;
        }

        const data = await response.text();
        document.getElementById("msg").innerText = data;

        if(data=="Password Updated"){
            window.location.href="login.html";
        }

    } catch (error) {
        document.getElementById("msg").innerText = "error";
    }

});
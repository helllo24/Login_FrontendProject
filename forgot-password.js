document.getElementById("retokenForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const username = document.getElementById("username").value;

    if(username === ""){
        document.getElementById("msg").innerText="Enter username";
        return;
    }

    try {

        const response = await fetch(`https://login-employeemanagement-3.onrender.com/auth/forgot-password?username=${username}`, {
            method: "POST"
        });
        if (!response.ok) {
    const errorText = await response.text();
    document.getElementById("msg").innerText = errorText;
    return;
}

        const data = await response.text();

        document.getElementById("msg").innerText = data;

        // redirect to reset page
        window.location.href = "reset-password.html";

    } catch (error) {
        document.getElementById("msg").innerText = "Error";
    }

});
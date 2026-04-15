 function askAI(){

  const question = document.getElementById("aiInput").value;
    const box = document.getElementById("aiMessages");

    if(!question) return;

    // show user message
    box.innerHTML += `<p><b>You:</b> ${question}</p>`;

    fetch("https://login-employeemanagement-3.onrender.com/employee/askai", {
        method: "POST",   // 🔥 IMPORTANT
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
            question: question
        })
    })
    .then(res => res.text())   // or res.json() based on backend
    .then(data => {

        // show AI response
        box.innerHTML += `<p><b>AI:</b> ${data}</p>`;

        box.scrollTop = box.scrollHeight; // auto scroll
    })
    .catch(err => {
        console.error(err);
        box.innerHTML += `<p style="color:red;">Error connecting AI</p>`;
    });

    document.getElementById("aiInput").value = "";
}


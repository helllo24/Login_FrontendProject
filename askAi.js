function askAI() {
    const inputField = document.getElementById("aiInput");
    const box = document.getElementById("aiMessages");
    const question = inputField.value.trim();
    const token = localStorage.getItem("token");

    if (!question) return;

    // Show user message
    box.innerHTML += `<p><b>You:</b> ${question}</p>`;
    inputField.value = ""; // Clear input immediately for better UX

    fetch("https://login-employeemanagement-3.onrender.com/employee/askai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({ question: question })
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`Server error: ${res.status}`);
        }
        return res.text();
    })
    .then(data => {
        box.innerHTML += `<p><b>AI:</b> ${data}</p>`;
        box.scrollTop = box.scrollHeight;
    })
    .catch(err => {
        console.error("AI Error:", err);
        box.innerHTML += `<p style="color:red;">Error: ${err.message}</p>`;
    });
}
# Employee Management System - Frontend

A responsive, JavaScript-driven web interface for managing employee data and user authentication.

## 🚀 Live Demo
**URL:** [https://login-frontend-project.vercel.app](https://login-frontend-project.vercel.app)

## ✨ Core Features
* **Secure Authentication:** Registration and Login modules integrated with JWT storage in `localStorage`.
* **OTP Verification:** Dedicated interface for verifying One-Time Passwords during registration.
* **Password Recovery:** "Forgot Password" and "Reset Password" workflows.
* **Employee Dashboard:** * **View All:** Tabular display of employees including department and role.
    * **Add Employee:** Form to register new staff with department assignment.
    * **Edit/Update:** Specialized form to modify existing employee records using path variables.
    * **Delete:** Instant removal of records with UI feedback.

## 🛠️ Technical Implementation
* **Language:** HTML5, CSS3, Vanilla JavaScript.
* **API Communication:** Uses the **Fetch API** with `async/await` and custom headers for `Bearer` Token authentication.
* **State Management:** Utilizes `localStorage` to pass data between pages (e.g., `editEmp` object) and maintain user sessions.
* **CORS Handling:** Optimized to communicate with a Spring Boot backend hosted on Render.

## 📂 Key Files
* `login.html` / `register.html`: User entry points.
* `viewEmp.html`: Displays the `findAll` employee list.
* `updateEmp.html`: Contains the logic to map `departmentId` and update records via `PUT`.
* `otp.html`: Handshake interface for email verification.

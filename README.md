Employee Management System
A full-stack web application for managing employee records, featuring a secure authentication system and a responsive frontend.

🚀 Live Demo
Frontend: https://login-frontend-project.vercel.app

Backend API: https://login-employeemanagement-3.onrender.com

✨ Features
User Authentication: Secure Login and Registration system using JWT (JSON Web Tokens).

Employee Management: Full CRUD (Create, Read, Update, Delete) operations for employee data.

Department Integration: Employees are linked to specific departments via a relational database structure.

Automated Notifications: Integrated JavaMailSender to send OTPs and verification tokens.

Security: Role-based access control (RBAC) ensuring only authorized admins can modify data.

🛠️ Tech Stack
Backend: Java, Spring Boot (Spring Security, Spring Data JPA).

Frontend: HTML5, CSS3, JavaScript (Fetch API).

Database: PostgreSQL (or MySQL) managed via JPA.

AI Integration: Google Gemini API (gemini-1.5-flash) for generative capabilities.

Hosting: Render (Backend) and Vercel (Frontend).

🔑 Key Backend Configurations
The project uses a custom SecurityConfig to handle CORS and JWT filters:

CORS: Configured to allow cross-origin requests from Vercel to the Render API.

JWT Filter: A custom JwtAuthenticationFilter intercepts requests to validate security tokens.

📂 Project Structure
/src/main/java: Spring Boot backend logic (Controllers, Services, DTOs).

/frontend: HTML and JavaScript files for the user interface.

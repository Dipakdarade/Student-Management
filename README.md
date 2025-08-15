Student Records Management System

A simple Student Registration & Records Management web app built using HTML, TailwindCSS, and Vanilla JavaScript, with LocalStorage for data persistence.
This project allows you to register students, view their details, edit information, and delete records — all without a backend.

🚀 Features

Register Student with validation
Store Multiple Records in browser LocalStorage
Responsive Table to view all students
Edit & Update student details
Delete a student entry
Empty State Message when no records are available
Custom Auto-Close Alerts after actions

🛠 Tech Stack

HTML5 – Structure
TailwindCSS – Styling & responsiveness
JavaScript (Vanilla) – Functionality & validation
LocalStorage – Data storage

project/
│__css/                 #input.css        
|
├── dist/               # Compiled Tailwind CSS (style.css)
├── js/
│   ├── register.js     # Handles form submission & validation
│   ├── results.js      # Displays student records
│   ├── edit.js         # Edit & update student details
│
├── html/
│   ├── index.html      # Home page
│   ├── register.html   # Registration form
│   ├── result.html     # View all records
│   ├── edit.html       # Edit student details
│
└── README.md

⚙️ Installation & Setup
git clone https://github.com/Dipakdarade/Student-Management.git
cd Student-Management
npm install -D tailwindcss
npx tailwindcss init
npx tailwindcss -i ./css/input.css -o ./dist/style.css --watch

Github Repo - https://github.com/Dipakdarade/Student-Management

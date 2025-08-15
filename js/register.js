const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const studentId = parseInt(document.getElementById("studentId").value.trim(), 10);
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();

    // Simple validation
    if (!name || !email || !contact || isNaN(studentId) || studentId < 0) {
        alert("Please enter valid data!");
        return;
    }

    // Retrieve existing students or initialize empty array
    const students = JSON.parse(localStorage.getItem("students")) || [];

    // Add new student
    students.push({ name, studentId, email, contact });

    // Save back to localStorage
    localStorage.setItem("students", JSON.stringify(students));

    alert("Student added successfully!");

    // Redirect to results page
    window.location.href = "results.html";
});

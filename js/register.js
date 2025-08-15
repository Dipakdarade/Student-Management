const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const studentId = parseInt(document.getElementById("studentId").value.trim(), 10);
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();

    // validation
    if (!name || !email || !contact || isNaN(studentId) || studentId < 0) {
        alert("Please enter valid data!");
        return;
    }

    // Retrieve existing students or initialize empty array
    const students = JSON.parse(localStorage.getItem("students")) || [];

    // Add new student
    students.push({ name, studentId, email, contact });

    // Save to localStorage
    localStorage.setItem("students", JSON.stringify(students));

  function showAutoCloseAlert(message, redirectUrl) {
    // Create custom alert box
    const alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.style.position = "fixed";
    alertBox.style.top = "20px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translateX(-50%)";
    alertBox.style.background = "#4CAF50";
    alertBox.style.color = "white";
    alertBox.style.padding = "10px 20px";
    alertBox.style.borderRadius = "5px";
    alertBox.style.fontSize = "16px";
    alertBox.style.zIndex = "1000";
    document.body.appendChild(alertBox);

    // Remove after 900 miliseconds and redirect
    setTimeout(() => {
        alertBox.remove();
        window.location.href = redirectUrl;
    }, 900);
}

showAutoCloseAlert("Student added successfully!", "results.html");

});

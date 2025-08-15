const params = new URLSearchParams(window.location.search);
const index = parseInt(params.get("index"), 10);

// get students array
let students = JSON.parse(localStorage.getItem("students")) || [];

// If index is invalid, go back to results page
if (isNaN(index) || index < 0 || index >= students.length) {
    alert("Invalid student record!");
    window.location.href = "results.html";
}

// Previos form data
document.getElementById("name").value = students[index].name;
document.getElementById("studentId").value = students[index].studentId;
document.getElementById("email").value = students[index].email;
document.getElementById("contact").value = students[index].contact;

document.getElementById("studentForm").addEventListener('submit',(e)=>{
    e.preventDefault();

    //updated data
    students[index] = {
        name:document.getElementById("name").value.trim(),
        studentId:parseInt(document.getElementById("studentId").value.trim(),10),
        email:document.getElementById("email").value.trim(),
        contact:document.getElementById("contact").value.trim()
    };
    localStorage.setItem("students",JSON.stringify(students));
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

showAutoCloseAlert("Student updated successfully!", "results.html");

})
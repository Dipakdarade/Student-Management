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
    alert("Student Updated successfully");
    window.location.href='results.html';
})
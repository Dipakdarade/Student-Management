
const form = document.getElementById("studentForm");

form.addEventListener('submit',(e)=>{
    // prevents form resetting
    e.preventDefault();
    // get data from register.html
    const studentName = document.getElementById("name").value.trim();
const studentId = document.getElementById("studentId").value.trim();
const email = document.getElementById("email").value.trim();
const contact = document.getElementById("contact").value.trim();

// validates input fields are correct

    if(!studentName||!studentId||!email||!contact){
        if(studentId>0){
        alert("Please Fill all fields correctly!")
        return;
    }
    }
    const studentData = {
        name:studentName,
        id:studentId,
        email:email,
        contact:contact
    };
    // Save data to local storage
    localStorage.setItem("studentData",JSON.stringify(studentData));
    alert("Student Data Added!");
    window.location.href='results.html';

})

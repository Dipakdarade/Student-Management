const tableBody = document.getElementById("tableBody");
const noRecordMsg = document.getElementById("noRecordsMsg");
const tableDiv = document.getElementById("tableDiv");
const students = JSON.parse(localStorage.getItem("students"))||[];


tableBody.innerHTML = "";
if(students.length>0){
    //display table
    tableDiv.style.display="block";
    noRecordMsg.style.display="none"

    students.forEach((student,index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
       <td class="py-2 px-4 border-b text-gray-300 border-gray-700 break-words">${student.studentId}</td>
       <td class="py-2 px-4 border-b text-gray-300 border-gray-700 break-words">${student.name}</td>
       <td class="py-2 px-4 border-b text-gray-300 border-gray-700 break-words">${student.email}</td>
       <td class="py-2 px-4 border-b text-gray-300 border-gray-700 break-words">${student.contact}</td>
            <td class="py-2 px-4 border-b border-gray-700 text-center">
                <a href="edit.html?index=${index}" class="text-blue-400 hover:text-blue-600" title="Edit">
                    <i class="fas fa-edit" title="Edit"></i>
                </a>
                <button class="text-red-400 hover:text-red-600 ml-3" title="Delete" onclick="deleteStudent(${index})">
                    <i class="fas fa-trash-alt" title="Delete"></i>
                </button>
            </td>`;
            tableBody.appendChild(tr);
    });
}else{
    // noRecordMsg.classList.remove = 'hidden';
      // Hide table and show empty message
    tableDiv.style.display = "none";
    noRecordsMsg.style.display = "block";
}
//Delete student
function deleteStudent(index) {
    if (confirm("Are you sure you want to delete this student?")) {
        students.splice(index, 1); // Remove student from array
        localStorage.setItem("students", JSON.stringify(students));
        location.reload(); // Reload page to update table
    }
}


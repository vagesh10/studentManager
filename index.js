let details=[];
 

function addStudent(){

let Name = (document.getElementById("name").value);
 let Age= parseInt(document.getElementById("age").value);
 let Course = (document.getElementById("course").value);
if(!Name || !Age || !Course){
    alert("please fill the details");
    return 
}
const student={
    Name:Name,
    Age:Age,
    Course:Course
};
details.push(student);
studentDisplay();
}

function studentDisplay(){
    let studentDetails=document.getElementById("details");
    studentDetails.innerHTML="";
    details.forEach((student,index)=>{
        let div = document.createElement("div");
        div.className="student";
        div.innerHTML=`<strong>${index+1} ${student.Name} age: ${student.Age} course: ${student.Course}</strong>`
        studentDetails.appendChild(div);
        
    })

}

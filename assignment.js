 //1. Create array of object using students (name , age, standard, marks and gender)
 let studentData1 = {

     name: "Thomas",
     age: 10,
     standard: 5,
     mark: 250,
     gender: "Male"

 };
 let studentData2 = {

     name: "Ashwini",
     age: 9,
     standard: 4,
     mark: 280,
     gender: "Female"

 };
 let studentData3 = {

     name: "Cathirne",
     age: 11,
     standard: 6,
     mark: 320,
     gender: "Female"

 };

 let studentData4 = {

     name: "Mithun",
     age: 6,
     standard: 1,
     mark: 120,
     gender: "Male"

 };
 let studentData5 = {

     name: "sathya",
     age: 7,
     standard: 2,
     mark: 170,
     gender: "Female"

 };


 totalStudentlist = [studentData1, studentData2, studentData3, studentData4, studentData5];
 console.log(totalStudentlist);

 //2.Find gender is female.
 let findGender;

 totalStudentlist[0].gender == "Female" ? findGender = "Female" : findGender = "male";
 totalStudentlist[1].gender == "Female" ? findGender = "Female" : findGender = "male";
 totalStudentlist[2].gender == "Female" ? findGender = "Female" : findGender = "male";
 totalStudentlist[3].gender == "Female" ? findGender = "Female" : findGender = "male";
 totalStudentlist[4].gender == "Female" ? findGender = "Female" : findGender = "male";
 console.log(findGender);




 // 3. List out the student in table . 4 Apply the colors to the table using js code.
 let x = false;

 function mytable() {

     x = true;
     let studentTable = document.getElementById("show_table");

     studentTable.innerHTML = "<table>" + "<td>" + totalStudentlist[0].name + "</td>" + "<td>" + totalStudentlist[0].age + "</td>" + "<td>" + totalStudentlist[0].standard + "</td>" + "<td>" + totalStudentlist[0].mark + "</td>";

     studentTable.style.cssText = "background-Color :red; color: blue; font-size:30px; height:200px; margin: 10px 0px;"


 }

 function myfunction() {
     x = false;
     document.getElementById("show_table").innerHTML = "";

 }


 function toggle() {

     x == false ? mytable() : myfunction();

 }
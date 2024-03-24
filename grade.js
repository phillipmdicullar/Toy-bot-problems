
//we create a function to calculate our grade
function calculateGrade(marks) {
  //we use if else to check through the values
    if (marks > 79) {
      console.log("A");
    } else if (marks >= 60 && marks <= 79) {
      console.log("B");
    } else if (marks >= 50 && marks <= 59) {
      console.log("C");
    } else if (marks >= 40 && marks <= 49) {
      console.log("D");
    } else {
      console.log("E");
    }
} 
//we place our grade to ensure it prints ok   
calculateGrade(60);

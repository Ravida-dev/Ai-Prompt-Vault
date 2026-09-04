import React from "react";

function App() {

  
  // Variables
  

  var city = "Lahore";
  city = "Faisalabad";

  var city = "Islamabad";

  let studentClass = 4;
  studentClass = 5;

  const language = "JavaScript";

  console.log("City:", city);
  console.log("Class:", studentClass);
  console.log("Language:", language);

  // Data Types
  

  const studentName = "Ravida";
  const age = 21;
  const student = true;
  const result = null;
  let course;

  console.log("Student Name:", studentName);
  console.log("Age:", age);
  console.log("Is Student:", student);
  console.log("Result:", result);
  console.log("Course:", course);

  console.log(typeof studentName);
  console.log(typeof age);
  console.log(typeof student);

  // Arithmetic Operators
  

  const firstNumber = 15;
  const secondNumber = 3;

  const sum = firstNumber + secondNumber;
  const difference = firstNumber - secondNumber;
  const product = firstNumber * secondNumber;
  const quotient = firstNumber / secondNumber;
  const remainder = firstNumber % secondNumber;
  const square = firstNumber ** 2;

  console.log("Sum:", sum);
  console.log("Difference:", difference);
  console.log("Product:", product);
  console.log("Quotient:", quotient);
  console.log("Remainder:", remainder);
  console.log("Square:", square);

  // Assignment Operators
  

  let points = 20;

  points += 10;
  console.log("After adding:", points);

  points -= 5;
  console.log("After subtracting:", points);

  points *= 2;
  console.log("After multiplying:", points);

  points /= 5;
  console.log("After dividing:", points);

  // Comparison Operators


  const testMarks = 80;

  console.log("Marks greater than 50:", testMarks > 50);
  console.log("Marks less than 50:", testMarks < 50);
  console.log("Marks are 80:", testMarks === 80);
  console.log("Marks are not 60:", testMarks !== 60);
  console.log("Marks greater/equal 80:", testMarks >= 80);
  console.log("Marks less/equal 80:", testMarks <= 80);


  
  //  AND 


  console.log("5 == '5':", 5 == "5");
  console.log("5 === '5':", 5 === "5");


  
  // Logical Operators


  const ageCheck = 21;
  const studentCard = true;

  console.log(
    "AND result:",
    ageCheck >= 18 && studentCard
  );

  const teacher = false;
  const classRepresentative = true;

  console.log(
    "OR result:",
    teacher || classRepresentative
  );

  const online = true;

  console.log(
    "NOT result:",
    !online
  );

  // INCREMENT / DECREMENT


  let number = 5;

  number++;
  console.log("After increment:", number);

  number++;
  console.log("After increment again:", number);

  number--;
  console.log("After decrement:", number);

  // Displaying Data in React


  return (
    <div>

      <h1>My JavaScript Practice</h1>

      <h2>Student Information</h2>

      <p>Name: {studentName}</p>
      <p>Age: {age}</p>
      <p>Course: {language}</p>

      <h2>Arithmetic Operations</h2>

      <p>First Number: {firstNumber}</p>
      <p>Second Number: {secondNumber}</p>

      <p>Sum: {sum}</p>
      <p>Difference: {difference}</p>
      <p>Product: {product}</p>
      <p>Quotient: {quotient}</p>
      <p>Remainder: {remainder}</p>
      <p>Square: {square}</p>

      <h2>Comparison</h2>

      <p>Test Marks: {testMarks}</p>
      <p>Greater than 50: {testMarks > 50 ? "Yes" : "No"}</p>
      <p>Passed: {testMarks >= 50 ? "Yes" : "No"}</p>

    </div>
  );
}

export default App;
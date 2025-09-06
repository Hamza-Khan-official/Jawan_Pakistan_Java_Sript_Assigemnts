// CHAPTERS 9 TO 11 (USER INPUT AND CONDITIONAL STATEMENTS)

// Q1.
let city = prompt("enter your city").toLowerCase();

if(city == "karachi"){
    document.write("<h1><center>Welcome to City of lights</center></h1>");
}

// Q2.
let gender = prompt("Enter Your Gender...").toLowerCase();
let gender_message;

if(gender == "male"){
    gender_message = "Good Morning Sir";

} else if (gender == "female"){
    gender_message = "Good Morning Ma'am";
};
document.write(gender_message);


// Q3.
let Signal_Color = prompt("enter signal color").toLowerCase();
let Signal_Message;

if (Signal_Color == "red") {
    Signal_Message = "Must Stop";

}else if(Signal_Color == "yellow"){
    Signal_Message = "Ready To Move";

}else if(Signal_Color == "green"){
    Signal_Message = "Move Now";
}
document.write(Signal_Message);


// Q4.
let fuel = prompt("Enter your remaing fuel...");
if (fuel < 0.25){
    document.write("Please refill the fuel in your car");
};


// Q5.
// a.
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");   //true  
}

// b.
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");   //false
}

// c.
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");   //false
}
if (c === 13) {
  alert("condition 2 is true");  //true
}
if (++c < 14) {
  alert("condition 3 is true");   //false
}
if (c === 14) {
  alert("condition 4 is true"); //true
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {

  alert("The cost equals");         //true
}

// e.
if (true) {
  alert("True");   //true
}
if (false) {
  alert("False");   //false
}


// Q6.

let subject_marks_one = 100;
let subject_marks_two = 100;
let subject_marks_three = 100;

let obtained_marks_one = +prompt("enter Maths marks");
let obtained_marks_two = +prompt("enter Science marks");
let obtained_marks_three = +prompt("enter English marks");

let total_marks = subject_marks_one + subject_marks_two + subject_marks_three;
let obtained_marks = obtained_marks_one + obtained_marks_two + obtained_marks_three;
let percentage = obtained_marks / total_marks * 100;

percentage = Math.floor(percentage);


let grade;
let remarks;
let percentage_error_message;

if (percentage >= 80 && percentage < 100){
    grade = "A-One";
    remarks = "Excellent";

}else if( percentage >= 70 && percentage < 80){
    grade = "Grade A";
    remarks = "Good";

}else if( percentage >= 60 && percentage < 60){
    grade = "Grade B";
    remarks = "You need to improve";
    
}else if( percentage < 60){
    grade = "Fail";
    remarks = "Sorry";
}else{
    percentage_error_message = "<h2><center> Please Enter a Valid Message </center></h2>";
    document.write(percentage_error_message);

}

document.write("<h1>Marks Sheet</h1>",);
document.write("<strong>Total marks : </strong>", total_marks, "<br>", "<br>");
document.write("<strong>Marks obtained : </strong>", obtained_marks, "<br>", "<br>");
document.write("<strong>Percentage : </strong>", percentage, "%","<br>", "<br>");
document.write("<strong>Grade : </strong>", grade, "<br>", "<br>");
document.write("<strong>Remarks : </strong>", remarks, "<br>", "<br>");


// Q7.

let secret_number = 7;
let enter_secret_number = +prompt("Enter a secret number");
let number_message;

if(secret_number === enter_secret_number){
    number_message = "Bingo! Correct answer.";

}else if (enter_secret_number === secret_number + 1) {
    number_message = "Close enough to the correct answer.";
}else{
    number_message = "Sorry, try again!";
};

document.write(number_message);


// Q8.
let divisible_number = prompt("enter a number");

if (divisible_number % 3 === 0){
    document.write("Your number is divisible by 3");
}else{
    document.write("Your number is not divisible by 3");
};


// Q9.
let check_number = prompt("Enter a number");

if(check_number % 2 === 0 ){
    document.write("your number is even");

}else if(check_number % 2 != 0 ){
    document.write("your number is odd");
};    

// Q10.

let take_temperature = +prompt("Enter a temperature");
let temperature_message;

if(take_temperature > 40){
    temperature_message = "its too hot outside";

}else if(take_temperature > 30){
    temperature_message = "The weather is today normal";

}else if(take_temperature > 20){
    temperature_message = "Today's weather is cool";

}else if(take_temperature > 10){
    temperature_message = "OMG!, Today's weather is cool";
}else{
    temperature_message = "correct weather";
};
document.write(temperature_message);



// Q11.
let first_number = +prompt("Enter a first Number");
let Second_number = +prompt("Enter a Second Number");
let operation = prompt("Enter operation (+, -, *, /, %)");
let result;

if (operation === "+"){
    result = first_number + Second_number;

}else if(operation === "-"){
    result = first_number - Second_number;

}else if(operation === "*"){
    result = first_number * Second_number;

}else if(operation === "/"){
    result = first_number / Second_number;

}else if(operation === "%"){
    result = first_number % Second_number;
};

document.write(result);


// CHAPTER 12-13  (IF ELSE AND ELSE IF STATMENTS)



// Q2.
let first_number_check = +prompt("Enter a first Number");
let Second_number_check = +prompt("Enter a Second Number");
let message_number_check;

if (first_number_check > Second_number_check){
    message_number_check = "first  Number is greater than second num";

}else if  (first_number_check < Second_number_check){
    message_number_check = "Second Number is greater than first num";
}else{
    message_number_check = "both are same number";
}

document.write(message_number_check);

// Q3.
let number_check_ = +prompt("Enter a Number");
let number_check_message;

if(number_check_ > 0 ){
    number_check_message = "Your number is positive";

}else if(number_check_ < 0 ){
    number_check_message = "your nmber is neagative";

}else if(number_check_ === 0){
    number_check_message = "Your number is Zero";

}else{
    number_check_message = "Please enter a vaild number";
};

document.write(number_check_message);


// Q4.
let take_character = prompt("enter a character").toLowerCase();
let isvowel;

if(take_character === "a" || take_character === "e" || take_character === "i"|| 
    take_character === "o"|| take_character === "u"){

        isvowel  = true;
}else{
    isvowel = false;
}
document.write(isvowel);

// Q5.
let correct_passward = "hamza_123";
let user_passward = prompt("Enter your passward");
let passward_message;

console.log(user_passward);


if( user_passward === null || user_passward === ""){
    passward_message = "Please enter your password";

}else if(user_passward === correct_passward){
    passward_message = "Correct! The password you entered matches the original password";

}else{
    passward_message = "Incorrect password";
};
document.write(passward_message);

// Q6.
let hour = 18;
let greeting;

if(hour < 18){
    greeting = "Good Day";
}else {
    greeting = "Good Evening";
};
document.write(greeting);


// Q7.
let take_time = +prompt("Enter You Time");
let time_message;

if(take_time >= 0 && take_time < 1200 ){
    time_message = "Good Morning!";

}else if(take_time >= 1200 && take_time < 1700){
    time_message = "Good afternoon!"

}else if(take_time >= 1700 && take_time < 2100){
    time_message = "Good evening!"

}else if(take_time >= 2100 && take_time < 2359){
    time_message = "Good night!"
}
document.write(time_message);
// CHAPTERS 9 TO 11

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



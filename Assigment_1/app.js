//      CHAPTERS_#_1

// Q1.
alert("Welcome to Our web");

// Q2.
prompt("Enter! please enter a valid message")

// Q3.
alert("welcome to JS Land... \nHappy Coding");

//      CHAPTER_#_2 (VARAIBLES AND STRING)

// Q1.
let username;

// Q2.
let myName = "Hamza";

// Q3.
let message = "Hello World";
alert(message);

// Q4.

let bio_data_Name = "Hamza";
alert(bio_data_Name);

let bio_data_age = "15 Yeard ";
alert(bio_data_age);

let bio_data_message = "Certified Mobile Application Developement"
alert(bio_data_message );

// Q5.
let pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP";
alert(pizza);

// Q6.
let email = "example@example.com";
alert("My email address is "+ email);

// Q7.
let book = "A Smarter Way to learn JavaSript";
alert("i am trying to learn form the book"+ book);

// Q8.
document.write("Yah, I Can Write HTML Conetnt Through JavaScript")

// Q9.
alert("«════════════════════๑۩۞۩๑════════════════════»");

//      CHAPTER_#_3 (VARAIBLES FOR NUMBERS)

// Q1.
let age = 15;
alert("i am "+ age + " years old");

// // Q3.
let birth_Year = 1990;
document.write("My Birth Year is"+ birth_Year + "<br>");
document.write("Data type of my declared variable is " + typeof(birth_Year));

// Q4.
let visitor_Name = "Hamza ";
let product_Title = "Orderd! ";
let Q_uantity = "5 T-shirt ";

document.write(visitor_Name + product_Title + Q_uantity + "On XYZ Clothing Store");



//      CHAPTER_#_4 (LEGEL AND ILLEGAL)

// Q1.
var variable_one, variable_two, variable_three;

// Q2.
// legal Variabels;
let variable_1;
let variable_2;
let variable_3;
let variable_4;
let variable_5;

// iLLegal Variabels;
// let 1_number;
// let @_number;
// let 3;
// let !;
// let 9_one;

// Q3.
document.write("<h2>Rules for naming JS variables</h2>");

document.write("Variable names can only contain letters, numbers, $ and _. ");
document.write("For example : $my_1stVariable <br><br>");

document.write("Variable must begin with a letter, $ or _. ");
document.write("For example : $name, _name or name <br><br>");

document.write("Variable names are case sensitive <br><br>");

document.write("Variable names should not be JS Keywords");

//              CHAPTER_#_5 (MATH EXPERSSIONS)

// // Q1.
let num_1 = 3;
let num_2 = 5;
let num_add = num_1 + num_2;
document.write("Sum of "+ num_1+ " and "+  num_2 + " is " + num_add + "<br>");

// // Q2.
//  substract
let nums_sub = num_1 - num_2;
document.write("Sub of "+ num_1+ " and "+  num_2 + " is " + nums_sub + "<br>");

// // multiplications
let nums_mul = num_1 * num_2;
document.write("multiplication of "+ num_1+ " and "+  num_2 + " is " + nums_mul + "<br>");

// // Division
let nums_div = num_1 / num_2;
document.write("Division of "+ num_1+ " and "+  num_2 + " is " + nums_div + "<br>");

// // Modulus
let nums_mod = num_1 % num_2;
document.write("Modulus of "+ num_1+ " and "+  num_2 + " is " + nums_mod + "<br>");

// // Q3.
let initial_value;
document.write("Value after variable declaration is " + initial_value + "<br>");

initial_value = 5;
document.write("Initial Value : "+initial_value + "<br>");

++initial_value
document.write("Vaalue after increment is : "+initial_value + "<br>");

let number = 7;
let after_addition = initial_value + number;
document.write("Vaalue after adition is : " + after_addition + "<br>");

--after_addition
document.write("Vaalue after decrement is : "+after_addition + "<br>");

let Division = initial_value / number / after_addition;
document.write("The reminder is "+ Division + "<br>");

// // Q4.
let ticket_price = 600;
let Quantity = 5;
let sum_of_tickets = ticket_price * Quantity
document.write("Total Cost To buy "+ Quantity+ " to a movie is "+sum_of_tickets +" PKR " + "<br>");

// // Q5.
let table_main_num = 4;
document.write("Table of "+ table_main_num + "<br>");
document.write("4 x 1 = "+ table_main_num + "<br>");
document.write("4 x 2 = "+ table_main_num * 2 + "<br>");
document.write("4 x 3 = "+ table_main_num * 3 + "<br>");
document.write("4 x 4 = "+ table_main_num * 4 + "<br>");
document.write("4 x 5 = "+ table_main_num * 5 + "<br>");
document.write("4 x 6 = "+ table_main_num * 6 + "<br>");
document.write("4 x 7 = "+ table_main_num * 7 + "<br>");
document.write("4 x 8 = "+ table_main_num * 8 + "<br>");
document.write("4 x 9 = "+ table_main_num * 9 + "<br>");
document.write("4 x 10 = "+ table_main_num * 10 + "<br>");

// Q6.
let celsius = +prompt("Enter your Celsius");
fahrenheit = (celsius * 9/5) + 32;
document.write(celsius," <sup>o</sup>","C is" , fahrenheit," <sup>o</sup>","F ", "</br>");


let fahrenheitInput  = +prompt("Enter your Fahrenheit");
celsiusConverted  = (fahrenheitInput  -32 )* 5/9
document.write(fahrenheitInput," <sup>o</sup>","F is ",celsiusConverted,"<sup>o</sup>","C" , "</br>");



// // Q7.
let price_of_item_1 = 650;
let price_of_item_2 = 100;

let order_of_quantity_item_1 =  3;
let order_of_quantity_item_2 =  7;

let order_1 = price_of_item_1 * order_of_quantity_item_1;
let order_2 = price_of_item_2 * order_of_quantity_item_2;

let shipping_charges = 100;

let sun_of_order_1_and_order_2 = order_1 + order_2 + shipping_charges;

document.write("Price of item 1 is : "+ price_of_item_1 + "<br>");
document.write("Quantity of item 1 is : "+ order_of_quantity_item_1 + "<br>");
document.write("Price of item 2 is : "+ price_of_item_2 + "<br>");
document.write("Quantity of item 2 is : "+ order_of_quantity_item_2 + "<br>");
document.write("Shipping Charges : "+ shipping_charges + "<br>");
document.write("Total Cost Of Your Order is : " + sun_of_order_1_and_order_2 + "<br>");




//              CHAPTER_#_6 to 9 (MATH EXPERSSIONS)

// Q1.
let a_value = 10;

document.write("<h3>Result</h3>")
document.write( "<br>"+" The Value of a is : "+ a_value +"<br>");

document.write( "<br>"+"---------------------------"+"<br>");

document.write("The Value of ++a is : "+ a_value +"<br>" );
++a_value;
document.write("Now the Value of a is : "+ a_value +"<br>" );

document.write( "<br>"+"<br>");

let post_increment_of_a = a_value++;
document.write("The Value of a++ is : "+ post_increment_of_a +"<br>" );
document.write("Now the Value of a is : "+ a_value +"<br>" );

document.write( "<br>"+"<br>");


--a_value;
document.write("The Value of --a is : "+ a_value +"<br>" );
document.write("Now the Value of a is : "+ a_value +"<br>" );

document.write( "<br>"+"<br>");

let post_decrement_of_a = a_value--;
document.write("The Value of a-- is : "+ post_decrement_of_a +"<br>" );
document.write("Now the Value of a is : "+ a_value +"<br>" );


// Q2.
let a = 2;
let b = 1;

let step_1 =  --a;
console.log("step_1: " + step_1);  
                                      // expected output 1
let step_2 = --a - --b;                  // expected output 0
0   - 0
console.log("step_2: " + step_2); 

let step_3 = --a - --b + ++b;
console.log("step_3: " + step_3);             // expected output 6

console.log ("the value of a and b : " +a +"   "+b);

let step_4 = -1  - -1 + 1;

let result = --a - --b ||  b || b--;
// var result = --a - --b || b || b--;

console.log(result);

document.write("a :" + a +"<br>");
document.write("b :" + b +"<br>");
document.write("result :" + result +"<br>");

// Q3.
let greet_user = prompt("Enter your name...");
document.write("Hello "+greet_user);

// Q5.
let table_num = 5;

document.write("Table of "+ table_num + "<br>");
document.write( table_num +" x 1 = "+ table_num + "<br>");
document.write( table_num +" x 2 = "+ table_num * 2 + "<br>");
document.write( table_num +" x 3 = "+ table_num * 3 + "<br>");
document.write( table_num +" x 4 = "+ table_num * 4 + "<br>");
document.write( table_num +" x 5 = "+ table_num * 5 + "<br>");
document.write( table_num +" x 6 = "+ table_num * 6 + "<br>");
document.write( table_num +" x 7 = "+ table_num * 7 + "<br>");
document.write( table_num +" x 8 = "+ table_num * 8 + "<br>");
document.write( table_num +" x 9 = "+ table_num * 9 + "<br>");
document.write( table_num +" x 10 = "+ table_num * 10 + "<br>");


// Q6.
let English = "Engligh";
let Urdu = "Urdu";
let Math  = "Math";

let English_total_marks = 100;
let Urdu_total_marks = 100;
let Math_total_marks = 100;

let English_obtained_marks = 90;
let Urdu_obtained_marks = 92;
let Math_obtained_marks = 94;

let total_obtained = English_total_marks + Urdu_obtained_marks + Math_obtained_marks;

let total_marks = English_total_marks + Urdu_total_marks + Math_total_marks;

let percentage = (total_obtained / total_marks) * 100;
document.write(percentage)

document.write("<table border='1' cellpadding='5'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
        
document.write("<tr><td>" + English + "</td><td>" + English_total_marks + "</td><td>" + English_obtained_marks + "</td><td>" + (English_obtained_marks/English_total_marks*100) + "%</td></tr>");
document.write("<tr><td>" + Math + "</td><td>" + Math_total_marks + "</td><td>" + Math_obtained_marks + "</td><td>" + (Math_obtained_marks/Math_total_marks*100) + "%</td></tr>");
document.write("<tr><td>" + Urdu + "</td><td>" + Urdu_total_marks + "</td><td>" + Urdu_obtained_marks + "</td><td>" + (Urdu_obtained_marks/Urdu_total_marks*100) + "%</td></tr>");

document.write("<tr><th>Total</th><th>" + total_marks + "</th><th>" + total_obtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");



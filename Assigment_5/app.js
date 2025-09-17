//   chapters21-25 [STRING METHOD]

// Q1.
let first_name_ = prompt("enter your first name ");
let last_name_ = prompt(" enter your last name");

let full_name = first_name_ +" "+last_name_;
document.write("Hello ",full_name);

// Q2.
let phone = prompt("enter your mobile model");
let phone_len = phone.length;
document.write("My favorite phone is: ",phone, "</br>")
document.write("Lenght of string : ",phone_len, "</br>");

// Q3.
let string_ = "pakistani";
document.write("string : ",string_, "</br>");
let want_string_ = prompt("enter letter you want index!");
let index_string_ = string.indexOf(want_string_);
document.write("index of "," '",want_string_,"': ",index_string_);
console.log(index_string_);

// Q4.
let string_2 = "Hello Wolrd";
document.write("string : ",string_2, "</br>");
let want_string_2 = prompt("enter letter you want index!");
let index_string_2 = string_2.lastIndexOf(want_string_2);
document.write("last index of "," '",want_string_2,"': ",index_string_2);
console.log(index_string_2);

// Q5.
let string = "pakistani";
document.write("string : ",string, "</br>");
let want_string = prompt("enter index!");
let index_string = string.charAt(want_string);
document.write("index of "," '",want_string,"': ",index_string);
console.log(index_string);

// Q6.
let first_name = prompt("enter your first name ");
let middle_gap = " ";
let last_name = prompt(" enter your last name");
document.write("Hello ", first_name.concat(middle_gap, last_name));

// Q7.
let city = "Hyderabad";
let after_replacement = city.replace("Hyderabad", "islamabad");
document.write("City : ",city, "</br>");
document.write("After replacment : ",after_replacement, "</br>");

// Q8.
let para_8 = ("Ali and sami are best freinds, They play cricket and football together.");
let change_8 = "&";
let after_change_8 = para_8.replaceAll("and", change_8, "</br>");
document.write("before para : ", para_8, "</br>"); 
document.write("After para : ", after_change_8, "</br>");

// Q9.
let value_nine = "472";
document.write("befre value : ", value_nine, "<br>");
document.write("before value type : ", typeof(value_nine), "<br>");
let change_nine = Number(472);
document.write("after value : ", change_nine, "<br>");
document.write("after value type : ", typeof(change_nine), "<br>");

// Q10.
let input_ten = prompt("enter your name").toUpperCase();
document.write(input_ten);

// Q11.
let input_11 = prompt("enter your name");
let title_case = input_11.slice(0, 1);
let join_title_case = input_11.slice(1,);
let change_11 = title_case.toUpperCase()+join_title_case;

document.write("User input : ", input_11, "</br>");
document.write("Tittle Case : ", change_11, "</br>"); 

// Q12.
let number_12 = 35.36;
let change_12 = number_12.toString().replace(".", "");
document.write("Number : ", number_12, "</br>"); 
document.write("Result : ",change_12, "</br>"); 

// Q14.
let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
let user_input = prompt("enter a item").toLowerCase();
let found = false;

for(let i=0; i<bakery.length; i++){
    if(userInput === bakery[i]){
        console.log(user_input + " is available at index " + i);
        break;
}
}
if (!found) {
    console.log("Sorry, " + user_input + " is not available in our bakery.");
}


//                                  Chapters 26-30 [Math Methods]

// Q1.
let user_value = prompt("enter a float Value");
let round_off = Math.round(user_value);
let floor_value = Math.floor(user_value);
let ciel_value = Math.ceil(user_value);
document.write("number : ", user_value, "</br>");
document.write("round off Value : ", round_off, "</br>");
document.write("floor Value : ",floor_value, "</br>");
document.write("ciel Value : ",ciel_value, "</br>");

// Q2.
let chage_positive_ = prompt("enter a float Value"); 
let user_value_ = Math.abs(chage_positive_);
let round_off_ = Math.round(user_value_);
let floor_value_ = Math.floor(user_value_);
let ciel_value_ = Math.ceil(user_value_);
document.write("number : ", chage_positive_, "</br>");
document.write("round off Value : ", round_off_, "</br>");
document.write("floor Value : ",floor_value_, "</br>");
document.write("ciel Value : ",ciel_value_, "</br>");

// Q3.
let absolute_value = +prompt("enter a value");
let absolute_value_ = Math.abs(Math.round(absolute_value));
console.log(absolute_value_);

// Q4.
let random_value_of_four = Math.random() * 6;
console.log("random dice value : ", Math.floor(Math.random() * 6) + 1);
console.log("random dice value : ", Math.floor(Math.random() * 6) + 1);

// Q6.
let random_number = Math.random()*100;
let round_random_number = Math.round(random_number);
console.log("random number between 1 and 100 : ", round_random_number);

// Q7.
let userInput = prompt("Enter your weight in kilograms");
document.write("The weight of user is " + userInput + " kilograms");

// Q8.
let secret_number = Math.random()*10;
let round_secret_number = Math.round(secret_number);
let user_secret_number = +prompt("enter a secret number");

if(user_secret_number === secret_number){
    console.log("Congrats You Right!");
}else{
    console.log("Sorry! Please try again");
}



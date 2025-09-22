// CHAPTERS 31-34 [DATE METHODS]:

// Q1.
let current_date_ = new Date();
document.write(current_date_);

// Q2.
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let current_date = new Date().getMonth();
document.write("Current Month: ",months[current_date])

// Q3.
let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
];
let days_ = new Date() .getDay();
console.log(days[days_]);
console.log(days.indexOf(days[days_]))

// Q4.
if(days[days_] == days[5]){
    console.log("Its fun day!");
};

// Q5.
let days_five = new Date().getDate();
if (days_five < 15) {
    console.log("First fifteen days of the month");
};

// Q6.
let current_date_six = new Date();
console.log(current_date_six);

let ms_since_1970 = new Date().getTime();
console.log(ms_since_1970);

// Q7.
let time_seven = new Date().getHours();
if (time_seven > 11 && time_seven < 25) {
    console.log("its PM");
}else{
    console.log("its AM");
};

// Q8.
let laterDate = new Date(2020, 11, 31);
console.log("Later date:", laterDate);

// Q14
let months_bill = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let month = new Date().getMonth();


let cus_name = "ABC Customer";
let months_bill_ = months_bill[month];
let units_num = 410;
let per_unit = 16;
document.write("Customer Name: ", cus_name, "</br>");
document.write("Month: ", months_bill_, "</br>");
document.write("Number of units: ", units_num, "</br>");
document.write("Changes per unit: ", per_unit, "</br>");

let only_bill = 6560;
let late_payment = 350;
let late_bill = only_bill + late_payment;
let after_date;

let date_ = new Date().getDate();

if (date_ > 10) {
    after_date = only_bill+late_payment;
};


document.write("Net Amount Payable (within Due Date): ",only_bill , "</br>");
document.write("Late Payment surchage: ", late_payment,"</br>");
document.write("Gross Amount Payable (after Due Date): ", after_date ,"</br>");


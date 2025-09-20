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
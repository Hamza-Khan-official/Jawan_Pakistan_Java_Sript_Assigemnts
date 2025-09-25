// FUNCTION
// Q1.
function date(){
    let date = new Date();
    console.log(date);
};
date();

// Q2.
function fullName(){
    let first_name = prompt("Enter your first name ");
    let last_name = prompt(" Enter your last_name name");
    let full_name = first_name + last_name;
    console.log("Hy ",full_name); 
};
fullName();

// Q3.
function sum(num_1, num_2){
    nums = num_1 + num_2;
    return nums;
};
sum(20, 30);
console.log(nums);

// Q4.
function calculator(Num_1, Num_2, Num_3){
    Num_1 = +prompt("enter a first Num");
    Num_2 = +prompt("enter a second Num");
    Num_3 = +prompt("enter a third Num");
    let nums_operation = prompt("Choose your operation, +,-,x,/");

    if(nums_operation === "+"){
        console.log(Num_1 + Num_2 + Num_3);

    }else if(nums_operation === "-"){
        console.log(Num_1 - Num_2 - Num_3);

    }else if(nums_operation === "x"){
        console.log(Num_1 * Num_2 * Num_3);

    }else if(nums_operation === "/"){
        console.log(Num_1 / Num_2 / Num_3);
    }else{
        console.log("Please enter a valid number and valid operation");
    }
};

calculator();


// Q5.
function squre(number){
    let user_num = number;
    let square_nums = number * number
    console.log(square_nums);
    return user_num;
}
squre(prompt("Enter a number"));
console.log("Your Number is", user_num);

// Q6.
function factorial() {
    let n = Number(prompt("Enter a number"));
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    console.log("Factorial of", n, "is:", result);
}
factorial();

// Q7.
let start_num = +prompt("Enter a start number");
let end_num = +prompt("ËNter a end number");

for(start_num; start_num <= end_num; start_num++){
    console.log(start_num);
}

// Q8.
function Hypotenuse(main_Hypotenuse) {


    function sub_Hypotenuse(Base, perpendicular){
        Base = +prompt("Enter a base number");
        perpendicular = +prompt("Ener a perpendicular number");
        base_squre = Base * Base;
        perpendicular_squre_ = perpendicular * perpendicular;
        sum_base_per = base_squre + perpendicular_squre_;
        console.log(sum_base_per); 
    }

    sub_Hypotenuse();
    main_Hypotenuse = sum_base_per*sum_base_per;
    console.log(main_Hypotenuse);

};
// Hypotenuse();


// Q9.
function Value(width, height){
    let a = width * height;
    console.log(a)
};
Value(23, 45);

function variables(){
    let width_v = +prompt("Enter your width");
    let height_v = +prompt("Enter your height");
    let b = width_v * height_v;
    console.log(b)
};
variables();

// Q10.
let word = prompt("enter a word");
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];

};

if (reversed == word) {
    console.log("your word is plandorm word");
} else {
    console.log("not plandorm word!");
};



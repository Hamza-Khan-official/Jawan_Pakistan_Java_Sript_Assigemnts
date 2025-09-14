// CHAPTERS 15 TO 16

// Q1.
let student_name_feature = [];
console.log(student_name_feature);

// Q2.
let student_name_features = new Array();
console.log(student_name_feature);

// Q3.
let str = ["hamza", "osman", "ahmed"];

// Q4.
let num = [1, 2, 3, 4];

// Q5.
let bool = [true, false];

// Q6.
let mixed = [1, 2, 3, "karachi", "pindi", true, 3, 4];

// Q7.
let available_education = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M.phil",
  "Phd",
];
document.write("<h1>Qualifications</h1>");

for (let i = 0; i < available_education.length; i++) {
  document.write(i + 1 + " " + available_education[i] + "</br>");
}

// Q8.

document.write("Program" + "<br>");

let student = ["ali", "hamza", "osman"];

let stu_score = [360, 420, 470];


for (let p = 0; p < student.length; p++) {
    document.write("Score of " + student[p] + " is "+stu_score[p] +  
    " and your percentage is "+ stu_score[p] / 500 *100 + "%"+"<br>");
};

// Q9.
let color_names = ["red", "yellow", "green"];
console.log(color_names);

for (let c=0; c < color_names.length; c++){
    document.write(color_names[c] + "</br>");
};


// a
let user_color = prompt("enter a color");
color_names.unshift(user_color);

document.write("<h2>Updated Code </h2>")
for (let c=0; c < color_names.length; c++){
    document.write(color_names[c] + "</br>");
}


// b
let user_color_ = prompt("enter a color");
color_names.push(user_color_);

document.write("<h2>Updated Code </h2>")
for (let c=0; c < color_names.length; c++){
    document.write(color_names[c] + "</br>");
}

// c
let user_colors = prompt("enter a two more color");
color_names.unshift(user_colors);

document.write("<h2>Updated Code </h2>")
for (let c=0; c < color_names.length; c++){
    document.write(color_names[c] + "</br>");
}

// d.
let first_del = color_names;
first_del.pop();
document.write("<h2>Updated Code </h2>")
for (let c=0; c < color_names.length; c++){
    document.write(color_names[c] + "</br>");
}

// e
let last_del = color_names;
last_del.shift();
document.write("<h2>Updated Code </h2>")
for (let c=0; c < color_names.length; c++){
    document.write(color_names[c] + "</br>");
};

// f
let add_color = color_names.length; 
let index_color = +prompt("enter a index which you add a color");

if(index_color === add_color ){
    new_color = prompt("emter a color name");
    after_add_color =  color_names.splice(new_color);
}else{
    "some thing went wrong!";
};

for(let i=0; i<after_add_color; after_add_color++){
    document.write(after_add_color, "</br>");
}



// Q10.

let score_student = [324, 420, 250, 250];
for(let d=0; d=5; d++){
  document.write()
}

// Q11.

document.write("<h3>Your Cities:</h3>")
let city = ["karachi", "islamabad", "lahore", "quetta", "peshawar"];

for(let cites=0; cites < city.length; cites++){
  document.write(city[cites] + " ");

};
document.write("<h3>Selected Cities:</h3>")

let Selected_cities = prompt("enter your selectd cities");

city = [Selected_cities];

for(let cites=0; cites <city.length; cites++){
  document.write(city[cites] + "</br>");
};

// Q12.
let para = ["this", "is","my","cat"];
document.write("Array"+"</br>"+para + "</br>");

let Str_ = para.join(" ");
document.write( "String"+ "</br>"+Str_);

// Q13.
let devices = [];

devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift() + "<br>");

document.write("</br br br br>")
// Q16.

let devices_out = [];

devices_out.push("keyboard");
devices_out.push("mouse");
devices_out.push("printer");
devices_out.push("monitor");

document.write("Out: " + devices_out.pop() + "<br>");
document.write("Out: " + devices_out.pop() + "<br>");
document.write("Out: " + devices_out.pop() + "<br>");
document.write("Out: " + devices_out.pop() + "<br>");


// Q17.

let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h3>Select a Phone Manufacturer</h3>");
document.write("<select>");

for(let i = 0; i < manufacturers.length; i++){
    document.write("<option>" + manufacturers[i] + "</option>");
}

// document.write("</select>"); 


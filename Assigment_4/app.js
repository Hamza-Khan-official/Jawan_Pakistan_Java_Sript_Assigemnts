// // chapter 17-20 ARRAYS AND LOOPS

// // Q1.
let mul_arr = [
    [],
    [],
    []
];
console.log(mul_arr);

// // Q2.
let mul_ini_arr = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];
for(let i=0; i<mul_ini_arr.length; i++){
    document.write(mul_ini_arr[i] , "</br>");
}
console.log(mul_ini_arr);

// // Q3.
for (let a=1; a <= 10; a++){
    document.write(a, "</br>");
}

// Q4.
let table_ = +prompt("enter a number to show its multiplication on table");
let tabel_len = +prompt("enter length multiplication table");

 document.write("multiplication table of ", table_, "</br>", "Length", tabel_len, "</br br>");

for (let t=1; t <= tabel_len; t++){
    console.log(table_[t]);
    document.write(table_, " x ", t, " = ", table_*t,"</br>");
}

// // Q5.
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(let f=0; f<fruits.length; f++){
    document.write(fruits[f], "</br>");
};
for(let f=0; f<fruits.length; f++){
    document.write("Elemnt at index ", f, " is ", fruits[f], "</br>");
};

// // Q6.

// a.
document.write("<h3>Counting :<h3>");
for(let g=1; g <= 15; g++){
    document.write(g, ", ");
    console.log(g);
};

// b
document.write("<h3>Reverse Counting :<h3>");
for(let g=10; g > 0; g--){
    document.write(g, ", ");
    console.log(g);
};

// c.
document.write("<h3>Even :<h3>");
for(let e=0; e <= 20; e++){
    if(e % 2 === 0){
        console.log(e);
        document.write(e , ", ");
    };
};

// d.
document.write("<h3>Odd :<h3>");
for(let e=0; e <= 20; e++){
    if(e % 2 != 0){
        console.log(e);
        document.write(e , ", ");
    };
};

// e.
document.write("<h3>Series :<h3>");
for(let e=2; e <= 20; e++){
    if(e % 2 === 0){
        console.log(e, "K");
        document.write(e ,"k", ", ");
    };
};

// Q7.
let user_bakery = prompt("welcome to our bakery. what do you want to order?").toLowerCase();
let A =["cake", "apple pie", "cookie","chips","patties"];

if(A.includes(user_bakery)){
    let index = A.indexOf(user_bakery)
    document.write(user_bakery, " "," is <strong>available</strong> at index ", index," in our bakery ");
}else if(user_bakery !==A){
    document.write( " We are Sorry. ",user_bakery," is <strong>not available</strong> ", "in our bakery");

}else{
    document.write("please enter a valid order");
};

// Q8.
let lar_num = [24,53,78,91,21];
let largest = Math.max(...lar_num);

document.write("Array items:", lar_num, "</br>");
document.write("The largest Number is ", largest);

// Q9.
let small_num = [24,53,78,91,21];
let smallest = Math.min(...small_num);

document.write("Array items:", small_num, "</br>");
document.write("The largest Number is ", smallest);

// Q10.
for(let five=5; five <= 100; five++){
    if(five % 5 === 0){
        console.log(five);
        document.write(five , ", ");
    };
};

console.log("Hello JavaScript");
            alert("Welcome to Javascript")
            let name1="Vaishu";
            console.log(name1);
            let age=20;
            let city="Bengaluru";
            let isStudent="false"
            console.log(age);
            console.log(city);
            console.log(isStudent);
            age=21;
            console.log(age);
            const country="India";
            console.log(country);
//String
            let college="JIT";
            let college1="JIT";
            console.log(college);
            console.log(college1);
//Number
            let a=5;
            let b=5.6;
            let c=56.89;
            console.log(a);
            console.log(b);
            console.log(c);
//Boolean
            let isTrue=true;
            let isFalse=false;
            console.log(isTrue);
            console.log(isFalse);

//undefined
            let address;
            console.log(address);

//null
let phone=null;
console.log(phone);

//symbol
let uniqueId=Symbol("id");
console.log(uniqueId);

//object
let Student={
    name2:"Chandu",
    age:20,
    course:"MERN Stack"
};
console.log(Student);

//BigInt
let bigNumber=1234567890123456789;
console.log(bigNumber);

//typeof
console.log(typeof name1);
console.log(typeof(college));
console.log(typeof null);

//Arithmetic operators
let a1=10;
let b1=3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//comparsion operators
console.log(a1>b1);
console.log(a1<b1);
console.log(a1>=b1);
console.log(a1<=b1);
console.log(a1!=b1);

//===
console.log(5=="5");
console.log(5===5);
//logical operators
console.log(age>=18 && age<=60);

let day="Sunday";
console.log(day=="Saturday"||day=="Sunday");

let isLoggedin=true;
console.log(!isLoggedin);

//user input
let clg=prompt("Enter college name");
console.log(clg);
//String to Number
let ticketcost=Number(prompt("Enter ticket fare"));
console.log(ticketcost);
console.log(typeof ticketcost);

//conditional statement
let marks=85;
if(marks>=90){
    console.log("A+");
}
else if(marks>=75){
    console.log("A");
}
else if(marks>=60){
    console.log("B");
}
else if(marks>=40){
    console.log("C");
}
else{
    console.log("Fail");
}
//ternary statements
let num=10;
let result=num>=5?"Yes":"No";
console.log(result);

//switch
let day1=2;
switch(day1){
    case 1:console.log("Monday");break;
    case 2:console.log("Tuesday");break;
    case 3:console.log("Wednesday");break;
    case 4:console.log("Thursday");break;
    case 5:console.log("Friday");break;
    case 6:console.log("Saturday");break;
    default:console.log("Invaild day");
}
//Loops
for(let i=1;i<=5;i++){
    console.log(i);
}

//function
//1.function with no parameter
function fun1(){
    console.log("Hello Folks");
}
fun1();

//2.function with parameters
function fun2(name){
    console.log("Hello"+name)
}
fun2("Vaishu");
fun2("Chandu");
function add(x,y){
    console.log(x+y);
}
add(10,20);

function sum(u,v){
    return u+v;
}
sum(10,30);
let res=sum(10,30);
console.log(res);
//area of rectangle

function area(l,b){
    return l*b;
 }
let res1=area(10,6)
console.log(res1);

//area of circle
 function area(r){
    return 3.14*r*r;
 }
let res2=area(10)
console.log(res2);

//Arrow Function
function func(){
    console.log("Hello Coders");
}
func();

const funct=()=>{
    console.log("Hello Coders");
};
func();

function sum(u,v){
    return u+v;
}
let res6=sum(10,30);
console.log(res);

//with parameters-arrow function
//1st method
const sum2=(u,v)=>{
    return u+v;
};
console.log(sum2(10,30));
//2nd method
const sum3=(u,v)=>u+v;
console.log(sum3(10,30));

const isEven=num=>(num&1)==0;
console.log(isEven(7));
console.log(isEven(18));

//Arrays
let students=["Viart","Rohit","Rahul"];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
//length
console.log(students.length);
//update array element
students[1]="Pandya";
console.log(students);
//push()->Adds element at last
students.push("Shreya");
console.log(students);
//unshift()->Adds at the beginning
students.unshift("Dhoni");
console.log(students);
//pop->removes from last
students.pop();
console.log(students);
//shift()->removes from beginning
students.shift;
console.log(students);
//for loop
for(let i=0;i<students.length;i++){
    console.log(students[i]);
}
for(let student of students){
    console.log(student);
}
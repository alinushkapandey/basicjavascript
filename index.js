//variables
// var x=90;
// x=120;
// var x= 17+8;
// console.log(x);
//for let
// let x=70;
// console.log(x);
// x=80;
// console.log(x);
// let x=100;
// console.log(x);
//const
// const a=75;
// console.log(a);
// a=100;
// console.log(a);
// const a=45;
// console.log(a);
//data type
// const y=90;
// console.log(y);
// console.log(typeof y);
// const name="ali";
// console.log(name);
// console.log(typeof name);
//another way of finding dTtype
//const result="hari pradhan";
// console.log(result);
// console.log(typeof result);
// console.log(typeof Number(result));
// const num=12+14;
// console.log(num);
// console.log(typeof num);
// console.log(typeof String(num));
//boolean
// let x=90;
// let y=60;
// let z=false;
// console.log(x+y+z);
// let x="harka rai";
// let y=120;
// console.log(x+y);
// const name="ali";
// const surname="pandey";
// console.log("my name is : "+ name+ " " +surname);
// console.log(`my name is : ${name} ${surname}.`);
// let z;
// console.log(z);
// console.log(typeof z);
// let z=null;
// console.log(z);
// console.log(typeof z);
//string methods
//string method
//const result ="my named is lod krishna!";
//  length
//  console.log (result.length);
//concat
// console.log(result.concat("yekdin tw sabbai janunai xa!"))

//substring
// console.log(result.substring(1,7));
// console.log(result.substr(1,7));
//repalce
//console.log(result.replace("krishna", "shiva"));

//includes
//console.log(result.includes("mama"));
//charat

//console.log(result.charAt(7));

//indexof
//console.log(result.indexOf("l");

//last index of
//console.log(result.lastIndexOf("d"));

//split
//console.log(result.split(" "));

//lowercase
//console.log(result.toLowerCase());
//uppercase
//console.log(result.toUpperCase());

//trim
//console.log(result.trim());
//statements(if else statements);

//
//const email="alinushkapandey99@gmail.com";
//  const password ="8888888";
//  if (email==="alinushkapandey99@gmail.com" && password==="8888888") {
//     console.log("login sucessfully!");
//  } else {
//     console.log("invalid credetians!");

//  }

//simple arithmetic
// let x=10;
// if(x>15){
//     console.log("xis greater than 15!");
// }
// else if(x>5){
//     console.log("xis greater than 5,but not equals to 15!");
// }else{
//     console.log("x is not greater than 15!");
// }
// let weather= "cloudy";
// if(weather=="sunny"){
//     console.log("its a sunny day!");
// }
// else if (weather =="winter"){
//     console.log("aja dherai jado xa hai!");
// }
// else if(weather=="rainy"){
//     console.log("aaja pani parla jasto xa hai !");
// }
// else if (weather=="cloudy"){
//     console.log("aaja  badal lay aakash dhakko xa !");

// }
// else{
//     console.log("invalid weather !");
// }

//switch statement
// let grade= "A";
// switch (grade) {
//     case "B":
//         console.log("verry good marks");

//         break;
//         case "C":
//             console.log("average marks");
//         break;
//          case "D":
//             console.log("need to improve");
//             break;
//             case "A":
//                 console.log("excellent marks");
//                 break;
//     default:
//         console.log("fail vaya ");
//         break;
// }
// let month = "March";
// switch (month) {
//   case "january":
//   case "februrary":
//   case "March":
//     console.log("the month is in Q1");
//     break;

//   case "April":
//   case "may":
//   case "june":
//     console.log("the month is in Q2");
//     break;

//   case "july":
//   case "august":
//   case "september":
//     console.log("the month is in Q3");
//     break;

//   case "octomber":
//   case "november":
//   case "december":
//     crossOriginIsolated.log("the month is in Q4");
//     break;
//   default:
//     console.log(" vetiyena hai naresau!");
// }
  
// let weather= "winter";
// switch(weather){
//     case "rainny":
//         case "spring":
//             console.log("the weather is in A1");
//              break;

//              case "summer":
//                 case "winter":
//              console.log("the weather is in A2");
//              break;
//               default:
//                 console.log("weather ramro xaina");       
//             }
 //dom(document object model);
//   const title =document.getElementById("mytitle");
//   title.innerText= "parul ";
//   title.style.backgroundColor="blue";
//   title.style.color="red";
//   title.style.cursor="pointer";

// loop
//1. for loop
// for(let i= 1; i<=10; i++){
//     console.log(i);
// }
    //sum of 10 postive numbers
//    let sum =0;
//     for(let i=1; i<=10; i++){
//         sum +=i;


//     }
//     console.log(sum);
 //while loop
   //let i=1;
//    let sum =0;
//     while (i<=10) {
//        console.log(i);
//         i++;
    
// }
 //do while
//  let i= 0;
//  let sum = 0;
//   do {
//     sum+=i;
//     i++;
    
//   } while (i <=10);
//   console.log(sum);

//array
//  const arr =[2,4,6,7,8,9];
//  const arr1= ["ram", "sita"];
//  console.log(arr[2]);
//  console.log(arr1);
// const arr =[7,9,3,4,"gita"];
// console.log(arr);
// array methods(basic array method);
//const arr=[6,3,4,5,7,9,1];
//length
//console.log(arr.length);

//push
// arr.push(23);
// console.log(arr);
 //pop
// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift(99);
// console.log(arr);
//includes
// const newarr= arr.includes(8);
// console.log(arr);
//console.log(newarr);

//reverse
// arr.reverse();
// console.log(arr);
//splice:it remove

// arr.splice(1,3);
// console.log(arr);
//slice
// const newarr = arr.slice(1,7);
// console.log(arr);
// console.log(newarr);

// const newarr =arr.filter((n)=>n>3);
// console.log(arr);
// console.log(newarr);


// let arr = [];
// for(let i = 0; i<100; i++){
//     arr[i]=i;
//     //arr.push(i)
// }
// console.log(arr);

//object
// const profile ={
//     firstName:"Ram bahadur",
//     lastName:"Badal",
//     age:66,
//     job:"minster",
//     issalary:10000000,
//     issingle: function(){
//         console.log("lutana sakya loot");
//         return true;s
//     },
// };

//console.log(profile)

// function myfunc(){
//     let x=2;
//     let y=8;
//     let ans= x+y;
//     console.log(ans);
// }
// myfunc();

//function are building block of the language used to encopsulate reusable logic.
// scoping 
// scoping determines the visibility variables, function , and object in some particular code.
// it has two types of scopes: 
//global scope:variables declared out side of any function .
//local scope: variables declared inside of the function.
// var :global scope or function scope;
//let,const:block scope, they r local scope;
// dom:Document object model;
//dom refers to the programming interface for html ,xml documents;
// dom manuplate the content of a web page dynamically using javascript;
// dom represents the structue of a documents as a tree- like hierarchy of objects.

// functions
// function name() {
//   console.log("ram bahadur");
// }
//  name();
// function add() {
  
//   let x=9;
//   let y=2;
//   let ans=x+y;
//   console.log(ans);
// }
// add();
//parameters & arguments in function

// function sum(a,b,c){
//   let results= a+b+c /2;
//   console.log(results);
// }
// sum(9,3,0);

//return type
// function sum(a,b){
//   let ans= a+b;
//   return ans;
// }
//  const result = sum(5,4)
// console.log(result);

// function greeting( name,address){
//   console.log(`my name is ${name}.i live at ${address}`);
// }
// greeting("ali", "mahendranagr");
 
// function sum(arr=[]){
//  let sum=0;
//  for(let i= 0; i<arr.length; i++){
//  sum +=arr[i];
//  }
// return sum;
// }

// const ans= sum ([1,2,4,6,7,8,9,0,])
//  console.log(ans);

//scoping


// var x=9;
// console.log(x);
// function scope(){
//   let y= 8+8;
//   console.log(x);
//   console.log(y);
// }
// scope();
 
// function mysum(){
//    let x= 10;
//   if(x>5){
//     console.log("x is greater than 15");
//   }
// }


// mysum();

// const name=(a,b)=>{
//   return a*b;

// }
// const ans=name(2,4);
// console.log(ans);

  
  //dom 
  //dom manipulation
  // advance array method;


  //dom amnipulation
 //console.log(document.body);
//  const myhow = document.getElementById("how");
//   const myIs=document.getElementsByClassName("is");
//  const myInput= document.getElementsByName("email");
//  const mySpan = document.getElementsByTagName("span");
//   const merobody=document.querySelector("#ali");
//   const mybutton= document.querySelector(".hey");
    


 
      
//   //button
//   mybutton.style.backgroundcolor="blue";
//   mybutton.style.color="black";
//   mybutton.style.padding="2vmax 4vmax";
//   mybutton.style.cursor="pointer";


//   //console.log(newData);
// //foe id

//   myhow.innerHTML  = 'why'
//    myhow.style.backgroundcolor="red" ;
  // myhow.style.color="white";
  //for class
  // myIs[0].innerHTML= "hello";
  

//using func
// function myadd(){


// const newH1= document.createElement("h1");
// newH1.innerHTML="yubalai bidesh jana bata rokaum!";
// document.body.prepend(newH1);
// }

// mybutton.onclick=myadd;


//event listner : add to event in the html.
// event listners are typically add to an elments using addeventlistner()method. 
//which takes two arguments the type of event listner and this function to call .


//addevent listner
 const mytitle=document.getElementsByClassName("title");
 const Box=document.getElementsByTagName("span");
 console.log(Box[0]);
  const button=document.getElementById("heyclick");
 const myinput= document.querySelector("input")
   
  Box[0].style.padding="20px";
  Box[0].style.color="white";
  Box[0].style.backgroundColor="purple";

  button.style.padding="2vmax 4vmax";
  button.style.backgroundColor="gray";
  button.style.color="white";
  button.addEventListener("click",()=>{
    mytitle[0].innerHTML="haina k ho yesto yo chakka parchu ";
    mytitle[0].classList.add("mybox");
    // mytitle[0].style.backgroundColor="red";
    // mytitle[0].style.color="white";
    
  });
 

  Box[0].addEventListener("mouseover",()=>{
    mytitle[0].style.backgroundColor="yellow";
  button.style.transform="scale(1.1)";
  });
  Box[0].addEventListener("mouseout",()=>{
    button.style.transform="";
    });
    button.addEventListener("contextmenu",()=>{
      e.preventDefault();
      button.style.backgroundColor="crimson";
    });
    addEventListener("contextmenu",(e)=>{
      e.preventDefault();
      button.style.filter="blur(10px)";
      

    });
    Box[0].addEventListener("dblclick",()=>{
      document.body.style.backgroundColor="black";
    });
 Box[0].addEventListener("click", ()=>{
  document.body.style.backgroundColor="white";

 });
    myinput.addEventListener("change",(e)=>{
      console.log(e.target.value);
    })


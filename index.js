// const a = [1,2,3];

// const b=a;

//  b[1]=3;

//  const c=b;

//  c[2]=5

//  console.log(a);
//  console.log(b);
//  console.log(c);

// obj

// const user={
//     name:"setu",
//     age:22,
// }

// const user2=user;

// const key= "name";
// console.log(user)

// console.log(user2[key])

// Programming paradigm

// 1.structure programming language => C
// 2.object oriented programming language = java,python,php,c#
// 3.functional programming language => SVGFEFuncAElement,ruby,racket
// 4. oop and functional language=>javascript

// function sum(a,b)
// {
//     var c=a+b;
//     return c;
// }

// var d= sum(5,6);

// console.log(d);

// const a=[1,2,3,4,5,6];

// // for( var value of a)
// // {
// //     console.log(value);
// // }
// // for( var value in a)
// // {
// //     console.log(value)
// // }

// function visit(element)
// {
//     console.log(element);
// }

// a.forEach(visit);

//excusion context
// const a=10;
// const b=20;

// console.log(a);
// console.log(b);
// console.log(p);

// const b=20;

// function print(a)
// {

//     console.log(a)

// }
// print(b);

// console.log(b);

//scope,scope chain,lexical environment

// function a()
// {
//     console.log(b);

//     sum();

//     function sum(){
//         console.log(b);
//     }
// }

// const b=10;

// console.log(b);
// a();

// (function (name)
// {
//     console.log(name);
// }) ('setu')

// function a()
// {
//     function b()
//     {
//         console.log("setu");
//     }
//     b();
// }
// // a();
// console.log(a);

// function a(b)
// {
//     console.log(b);
// }

// function c()
// {
//     console.log("setu");
// }

// a(c);

// function a(b)
// {
//     b();
//     return d;
//     function d()
//     {
//         console.log('hello');
//     }

// }

// function c()
// {
//     console.log('habib');
// }

// var p= a(c);

// console.log(p);

// p();

// p();

// a=[1,2,4];

// function print(num)
// {
//     console.log(num);
// }

// a.forEach(print);
//print call back function and forEach fcf function

// print();
// a();

// function print()
// {
//     console.log("habib");
// }

// const a= function print()
// {
//     console.log("habib2");
// }

// var a = (flag,callback)=>{
//     if(flag==='success')
//     {
//         callback('Successfully Executed');
//     }
//     else{
//         callback("Rejected");
//     }
// }

// function notify(msg){
//     console.log(msg);
// }

// a('success',notify);

//closure

// function a()
// {
//     var c=11;

//   return function b()
//     {
//         console.log(c);
//     }

// }

// d=a();
// d();
// console.log(d);
// // callback

// function a(num,callback)
// {
//     console.log(num*num);
//     callback();
// }

// function add(d)
// {
//     console.log(d)
// }

// a(7,()=>{
//     add('setu');
// })

// function a()
// {
//     const c=10;
//     function b()
//     {
//         console.log(c);
//     }
//     b();

// }

// p= a();

// function a()
// {
//     var  c=10;

//     var d=function b()
//     {
//         console.log(c);
//     }
//     return d;

// }

// const p= a();

// function a()
// {
//     return function b()
//     {
//         console.log(b);
//     }

// }

//   a();
// function a(c)
// {
//     function b()
//     {
//         console.log(c);
//     }
//     b();
// }

//   a(5);

// function a()
// {

//     var c=100;
//   return  function b()
//     {
//         ++c;
//         console.log(c);
//     }

// }
// var d=a();

// d();
// d();
// d();

// var a=10;

// function b()
// {
//   console.log(a);
//   var a=40;
// }

// console.log(a);

// b();
// console.log(a);

// console.log("Setu");

// setTimeout(()=>{
//   console.log("chowhan");
// });

// console.log("lal")

//  const student = [
//    student1 ={
//      Name:"Setu",
//      Id:1814351063,
//      Dep:"CSE"
//    },
//    student2=
//    {
//      Name:"Amit",
//      Id:1814351072,
//      Dep:"CSE"
//    },
//    student3=
//    {
//      Name:"Robi",
//      Id:1814351021,
//      Dep:"CSE"
//    },
//    student4=
//    {
//      Name:"Sourav",
//      Id:1814351075,
//      Dep:"CSE"
//    }
//  ]

// console.table(student.indexOf(student3));

// console.log("HI there");

// function x() {
//   setTimeout(function cb() {
//     console.log("call back");
//   }, 5000);
// }

// x();

// console.log("By there");

// console.log("Hi there");

// function x() {

//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function cb() {
//       console.log(i);
//     }, i * 1000);

//   }
// }

// x();
// console.log("Bye there");

// function a(name) {
//   console.log(name);
// }

// function b(a, b) {
//   console.log(a + b);
// }

// let c = 10;

// a(4, b(10, 5));

// const arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((number, index) => {
//   console.log(`The value of ${index} index is ${number}`);
// });

// function forEach()
// {
//   for(let number of arr)
//   {
//     console.log(number)
//   }
// }

// forEach();

// const print = (number) => {
//   // console.log(number);

//    number * 3;
//    if(number>3) return true;
//    else return false;
// };

// arr.forEach(print);
// const newArr = arr.map(print);
// // const filterArray = arr.filter(print)
// console.log(newArr)
// console.log(filterArray);

// const finalArray = arr.filter((number) => {
//   if (number > 2) return true;
//   else   return false;
// });

// console.log(finalArray);

// const ComputerParse = [
//   { Product: "Ram", Price: 2000 },
//   { Product: "GraphicsCard", Price: 2600 },
//   { Product: "Monitor", Price: 3000 },
//   { Product: "Processor", Price: 4000 },
//   { Product: "MotherBoard", Price: 5000 },
// ];

// // console.table(ComputerParse);
// // ComputerParse.forEach( products=> console.log (products.Price));

// // const newPharse = ComputerParse.map((products)=>{
// //   return products.Price;
// // })
// // console.log(newPharse)
// const newPharse = ComputerParse.filter((products) => {
//   if (products.Price > 3500) return true;
//   else false;
// }).map((products) => {
//   return products.Product;
// });
// console.log(newPharse);

//class

// class User {
//   constructor(a, b, c) {
//     this.firstName = a;
//     this.lastName = b;
//     this.age = c;
//     this
//   }
// //   print = (c) => {
// //     console.log(c);
// //   };

// }

// const obj1 = new User("Setu", "Chowhan", 22);
// const obj2 = new User("Robi", "Mankhin", 23);
// // console.log(obj1.firstName);
// // obj1.print(4);

// const allObj=[obj1,obj2];

// console.log(allObj);

// closure example
// function a()
// {
//     var b=10;
//     return function c()
//     {
//         console.log(b);
//     }
// }

// var d=a();
// d();

// const a = 10;

// function sum(a,b){
//     console.log(a+b);
// }

// module.exports = sum;

// console.log(global);

// FS
// const fs=require('fs');
// const path = require('path');
// const os = require('os');
// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('prem',(arg)=>{
//     if(arg.name==='setu')
//     console.log("I love you")
//     else{
//         console.log("I hate you");
//     }
// })

// emitter.emit('prem',{name:"setuf",age:27})

// const fileRead = fs.readFile("TEXT",'utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data);
//     }

// })
// fs.writeFile('TEXT','hehehe',(err)=>{
//     if(err)
//     throw err;
//     else{
//         console.log("data added");
//     }
// })

// fs.mkdir('./setu',(err)=>{
//     if(err)
//     throw err
//     else{
//         console.log("file added");
//     }
// })
// const obj = path.parse(__filename);
// const obj = path.parse(__dirname);

// console.log(obj);

// const toalRam = os.totalmem()/1024/1024/1024;
// const freeRam = os.freemem()/1024/1024/1024;
// console.log(freeRam);

// Promise

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("HEllo Setu");
//   }, 4000);
// });

// promise1
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("error");
//   });

// console.log("Hahahaha");





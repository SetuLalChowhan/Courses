// Primitve Data type

// 1.Number
// 2.String
// 3.Boolean //true or false
// 4.Undefined
// 5.BigInt //Max number=2**53-1 
// 6.Symbol //Unique

// 2.structural type

// 1.Object
// 1.1.Function //non-data strucutre ,callback
// 1.2 Array
// 1.3.Maps
// 1.4.Set
// 1.5 Date

// 3.structural roo



// let students = [
//     {
//         Name: "Setu",
//         cgpa: 4.2

//     },
//     {
//         Name: "ronjon",
//         cgpa: 4.55
//     },

//     {
//         Name: "Akash",
//         cgpa: 4.75
//     },

//     {
//         Name:"LALBaba",
//         cgpa:4.5
//     }


// ];

// students.forEach((student)=>{
//     student.cgpa=student.cgpa-1;
//     console.log(student);
// });

// const allStudents= students.filter((student)=>{
//     student.cgpa=student.cgpa-1;
//     return student.cgpa>3.5;
// });
// console.log(students);
// console.log(allStudents);


// const users=[
//     {
//         fName:"Setu",
//         lName:"Chowhan"
//     },
//     {
//         fName:"Amit",
//         lName:"Ghosh"
//     },
//     {
//         fName:"Robi",
//         lName:"Mankhin"
//     }
// ];

// const finalUser=users.map((fullName)=>{
//    return  {
//         fullNames:`${fullName.fName} ${fullName.lName}`
//     }

// });

// console.log(finalUser); 

// const movies=[
//     {
//         Name:"Titanic",
//         boxOffice:2
//     },
//     {
//         Name:"Avator",
//         boxOffice:3
//     },
//     {
//         Name:"TransFormer",
//         boxOffice:1.1
//     }
// ];

// const totalBudget= movies.reduce((accu,movie)=>{
//     return accu+=movie.boxOffice;
// },0);
//  console.log(`Total Budget ${totalBudget} Billion`);



//  const arr=[4,5,6,7,8,9,12];

//  const final=arr.map((index)=>{
//     return index+1;
//  }).reduce((accu,index)=>{
//    return accu+=index ;
//  },0 );

//  console.log(final/arr.length);

// const finalText= function(text){
//      return text.toUpperCase();
// }

// console.log(finalText('hello'));



// callback

// function formatText(text, formatCb) {
//     return typeof formatCb === 'function' ? formatCb(text) : text.toUpperCase();
// }

// const result = formatText('hello', (text) => text.charAt(0).toUpperCase() + text.slice(1));


// console.log(result);




// immiditae function call

// (function text()
// {
//     console.log("Hello World");
// })();

// arrow function

//  const sum =(a,b)=> a+b;

//  console.log(sum(4,5));

// Asynchronous

// console.log("Hello");

// setTimeout(()=>{
//     console.log("My Name is Setu");
// },2000)

// console.log("World");
// const print =()=>{
//     console.log("My name is Setu");
// }

// setTimeout(print,2000)

// callback and promises

// function register(callback) {
//     setTimeout(() => {

//         console.log("Regester End");
//         callback();
//     }, 3000)

// }
// function sendEmail(callback) {
//     setTimeout(() => {
//         console.log("Send Email End");
//         callback();
//     }, 2000)

// }
// function login(callback) {
//     setTimeout(() => {
//         console.log("Login end");
//         callback();
//     }, 1000)

// }
// function getUSerData(callback) {
//     setTimeout(() => {
//         console.log("Got User Data");
//         callback();
//     }, 1000)

// }
// function displayData() {
//     setTimeout(() => {
//         console.log("Displayed Data Completed");
        
//     }, 2000)
// }

// register(() => {
//     sendEmail(() => {
//         login(() => {
//             getUSerData(() => {
//                 displayData();
//             });

//         });

//     });

// });


// console.log("Other activities has been completed");



function register(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            //   return reject("Can't register");
             console.log("register End");
             resolve();
         },3000)
     })
}
function sendEmail(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             console.log("Send Email End");
             resolve();
         },2000)
     })
}
function login(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             console.log("Login End");
             resolve();
         },1000)
     })
}
function getUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Got User Data");
            resolve();
        },0)
    })
}
function displayData(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             console.log("Displayed Data");
             resolve();
         },0)
     })
}

// console.log("Other activities has been completed");

// register().
// then(sendEmail).
// then(login).
// then(getUserData).
// then(displayData).
// catch((err)=>{
//     console.log(err)
// })

 async function allDone(){
    
      try{
        await register();
        await sendEmail();
        await login();
        await getUserData();
        await displayData();
      }  catch(err){
          console.log(err);
          throw new Error();

      }

  
}
  allDone().then(()=>{
      console.log("All Set");
  }).catch((err)=>{
      console.log(err)
  })


// bulb project



// Es6

// ES6 AKA Ecmascript 2015
// let const
// var productName = 'Laptop';
// code polute

// function register() {
//     var username = 'rakesh';
//     var password = 'secret';
// }

// console.log(username);

// let product = 'Laptop';

// console.log(product);
// const product = 'Laptop';
// product = 'Mobile';
// let age = 20; // undefined
// console.log(age);

// const age = {
//     years: 19,
// };
// age = 20;

// console.log(age);
// Arrow functions
// function greet() {
//     console.log('Good morning');
// }

// const addition = a => console.log(a + a);
// addition(5);

// console.log(this);

// const shop = {
//     purchase: () => {
//         console.log(this);
//     },
// };

// shop.purchase();

// const myButton = document.querySelector('#myButton');

// const shop = {
//     price: 100,
//     buy: function () {
//         myButton.addEventListener('click', () => {
//             // console.log(this);
//             console.log('I spent ' + this.price);
//         });
//     },
// };
// shop.buy();

// Template literals AKA backticks

// const firstName = 'Rakesh';
// const lastName = 'K';

// console.log(firstName + ' ' + lastName);

// hello
// how are you

// const message = 'hello \n' + 'how are you';
// const name = 'Rakesh';
// const message = `hello ${5 + 6}
// how are you
// `;
// console.log(message);

// Enhanced object literals
// computed propery keys
// Method defination shorthand
// Property shorthand

// const accessToken = 'dsjfhkadhskfhk';
// const refreshToken = 'adkjfljdlffdd';

// const user = {
//     accessToken,
//     refreshToken,
// };

// console.log(user);

// Destructuring
// const user = {
//     name: 'John Doe',
//     age: 30,
// };

// const { name: fullName, age } = user;

// console.log(fullName);
// console.log(user.name);


// const data = ['Rakesh', 30, 'Engineer'];
// const [name, age, profession] = data;
// const [count, setCount] = useState();

// Default parameters

// const register = (name, password, image = 'test.png') => {
//     // const img = image || 'test.png';
//     console.log(name, password, image);
// };

// register('Rakesh', 'secret', 'photo.png')

// Spread ...

// const languages = ['c', 'c++', 'javascript'];
// const newLanguages = [...languages, 'typescript'];

// const settings = {
//     volumn: 10,
//     brightness: 80,
// };

// const newSettings = { ...settings, volumn: 20 };

// console.log(newSettings);



// Rest ...

// const addItems = (...items) => {
//     console.log(items);
// };

// addItems(3, 2, 4, 10, 30);


// For of loop
// Array, string, Object, set, map

// const numbers = [2, 4, 5, 7];

// for (const num of numbers) {
//     console.log(num);
// }

// const language = 'Javascript';

// for (const char of language) {
//     console.log(char);
// }

// const person = {
//     name: 'Rakesh',
//     city: 'Moscow',
//     brand: 'apple',
// };

// for (const [key, value] of Object.entries(person)) {
//     console.log(key, value);
// }

// Promises

// function login(cb) {
//     setTimeout(() => {
//         console.log('Login..');
//         cb();
//     }, 0);
// }

// login(() => {
//     // async

//     console.log('Redirecting');
// });

// function login() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Login...');
//             reject();
//         }, 0);
//     });
// }

// login()
//     .then(() => {
//         console.log('Redirecting..');
//     })
//     .catch((err) => {
//         console.log('Error...');
//     });


// find (Array methods)

// const users = [{ name: 'Rakesh' }, { name: 'John' }];

// const user = users.find((user) => {
//     return user.name === 'John';
// });

// console.log(user);

// findIndex
// const users = [{ name: 'Rakesh' }, { name: 'John' }];

// const user = users.findIndex((user) => {
//     return user.name === 'Jane';
// });

// console.log(user);

// Set
// const uniqueNumbers = new Set();
// uniqueNumbers.add(3);
// uniqueNumbers.add(5);
// uniqueNumbers.add(6);
// uniqueNumbers.add(3);
// console.log(uniqueNumbers.has(10));

// const numbers = [4, 5, 6, 4, 7, 6];
// const uniqueNumbers = new Set(numbers);
// console.log(Array.from(uniqueNumbers));


// map (Hashtables)

// const urls = new Map();
// urls.set('development', 'dev.example.com');
// urls.set('production', 'prod.example.com');

// console.log(urls.get('production'));
// O(1)

// const urlsObj = {
//     development: 'dev.example.com',
//     production: 'prod.example.com',
// };

// for (const [key, value] of urls) {
//     console.log(key, value);
// }

// console.log(urls.size);

// order
// size



// class Product{
//     name;
//     price;

//     constructor(name,price){
//         this.name=name;
//         this.price=`${price}Tk`;
        
//     }
//     greet(){
//         console.log("good Morning");
//     }
// }

// const Ram= new Product('Corsair','8000');
// const HDD= new Product('segate','3500');



// console.log(Ram);
// console.log(HDD);



// / ESM ( ES6 modules )
// import { libName as myLibName } from './lib.js';
// import myLogin from './lib.js';
// myLogin();
// // console.log(myLibName);





  

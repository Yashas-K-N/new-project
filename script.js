// let arr = [1 , 2, 3];
//   arr.forEach(function(a,b,c){
//     console.log( a+b+c);
// })


// let arr = [1 , 2, 3];
//  output = arr.map(function(a,b,c){
//     return a+b+c;
// })
// console.log(output);

// let arr = [1 , 2, 3];
//  output = arr.filter(function(a,b,c) {
//     return a % 2 == 1 ;
//   }
//  )
// console.log(output);
// let arr = [1 , 2, 3];
//  output = arr.filter(function(a,b,c) {
//     return a + b + c ;
//   }
//  )
// console.log(output);


// let arr = [1 , 2, 3];
//  output = arr.reduce(function(a,b,c){
//     return a+b+c;
// })
// console.log(output);

//  let arr = [1,2,3];

// for (let i in arr){
//     console.log(i,arr[i]);
// }

//  let arr = [1,2,3];

// for (let i of arr){
//     console.log(i);
// }

// let a = 20;
// function callme(x,y){
//    let f= (m,n) =>{
//     console.log(m+n);
//    }
//    let k = f(x+y,x-y);
   
// }
// let r = callme(10,20);
//  console.log(r);


 






// let a = 20;
// function callme(){
//     let b = 30;
//     console.log(a,b);
// }
// callme()
// console.log(a,b);


/*let user = {
   firstName : "priya",
   age : 21,
   printName:function(){
      console.log(this)
   },

//inside arrow function this equal to undefined
// printAge:()=> {
//    console.log(this)
//   }
}
user.printName();*/



/*let obj ={
   name:"priya",
   age:21,
   f:function(){
      console.log(this);
   }
}

let x = obj.age;
console.log(x);*/


// function User(name,age){
//    console.log(name,age);
// }
// let user = new User("priya", 21);
// console.log(user);



// function firstNonRepeatedChar(string) {
//    for (let i = 0; i < string.length; i++) {
//        const char = string[i].charAt(0);
//        if (string.indexOf(char) === i && string.indexOf(char, i +1) === -1) {
//            return char;
//        }
//    }
//    return null;
// }

// // Example usage:
// const inputString = "snbdkbakbkaa";
// const result = firstNonRepeatedChar(inputString);
// console.log(`First non-repeated character: ${result}`);



// function fibonacci(num) {
//    // your code here
//     let num1= 0;
//     let num2= 1;
//     let next=0;
      
//       for(let i = 0; i<num; i++){
//          next = num1 + num2;
//           num1 = num2;
//           num2 = next;
         
//          }
//          return next;
      
//       }
//       console.log(fibonacci(5));

      
// let user = {
//    firstName : "priya",
//    age : 21,
//    printName:function(){
//       console.log(this)
   
//    let f1 = function(){
//         console.log(this);
//      }
//      f1();
//    }
// }




// function User(name,age){
//    this.name=name,
//    this.age=age,
//    console.log(this);
// }
// let user = new User("priya", 21);
// console.log(user);


// function product(name, price){
//    this.name=name;
//    this.price=price;
// }
// let p1 = new product("iphone", '88000');
// console.log(p1);

// let p2 = new product("macbook", 88000);
// console.log(p2);

// class BlinkitProduct{
//    college = "harvard";
//    course = "geography";

//    printName = function(){
//       console.log(this);
//       console.log("inside print name");
//    }

//    constructor(n,a){
      
//       this.name = n;
//       this.age  = a;
      
      
//    }
// }

// let BlinkitProduct1 = new BlinkitProduct("priya","21");
// console.log(BlinkitProduct);
// BlinkitProduct1.printName();


// class BlinkitProduct{


//    constructor(n,p){
//       this.name =n;
//       this.price=p;
//    }

//    getName(){
//       return this.name;
//    }
// }
// let BlinkitProduct1 = new BlinkitProduct('iphone', 8000);
// console.log(BlinkitProduct1);
// let r1=BlinkitProduct1.getName();
// console.log(r1);

// let arr = [20,12,34,56];
// let a = arr[1], b=arr[2];
// console.log(a,b);


// let arr = [20,12,[10,15,16],34,56];
// let [,a,[,,b]]=arr;
// console.log(a,b);

// let [x]="priya";
// console.log(x);

// let user ={
//    name:"priya",
//    age:21,
//    address:{
//       city:"bengaluru",
//       pincode:560096
//    }

// };

//  let {name:firstName,age} = user;
//  console.log(firstName,age);

// let {address:{pincode,city}} = user;
// console.log(pincode,city);


// let sum = (...nums) => {
//    return nums.reduce((prev, e,) => prev + e)
// }
// let r1 = sum(10,20);
// let r2 = sum(8,8);
// console.log(r1,r2);

// function callme([a,b]){
//    // a = [10,20] b=undefined;
//    console.log(a,b);//[10,20]
// }

//  callme([10,20]);

//  //or

//  function callme(a,b){
//    // a = [10,20] b=undefined;
//    console.log(a,b);//[10,20]
// }

//  callme(...[10,20]);

// dow.JSON = JSON;

// window.alert(hello); win

// let r=JSON.stringify({name:"priya",
// agr:20});
// console.log(r);


// let obj = {
//    name:"priya",
//    age:20,
//    address:{
//       city:"bengaluru",
//       pincode:560088,
//    }
// }

// let r = JSON.stringify(obj);
// console.log(r);

let user = {name:"priya", age:"20"};

let jsonUser = JSON.stringify(user);
console.log(typeof jsonUser);


let objUser = JSON.parse(jsonUser);
console.log(objUser);
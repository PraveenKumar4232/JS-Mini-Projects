// let fruit=['apple','watermelon','mango','grapes'];
// console.log(fruit.splice(1,2,'banana','orange','pomogranet'));
// console.log(fruit)

function User (name,age){

    let msg=`hi my name is ${name} and i am ${age} years old`;  // factory function 
    console.log(msg.toUpperCase());

}
User('praveen kumar','twentyone');
User ('rahul',24)

let person={
    age:21,
    isAlive:true,

    address:{
        city:"chennai",
        state:"tamil nadu"
    },

    intrest:['coding','drawing','riding motorcycle'],

    greetings: function(name){
        let msg=`hi my name is ${name} and  iam ${this.age } years old and my intrests are  ${this.intrest} and i am from ${this.address.city},${this.address.state}`;
        console.log(msg.toUpperCase());
    }
};
person.greetings('praveen kumar');
person.age=50;


let product='crackers';
let box='apple, banana ,pineapple, brinjal ,tomato, carrot, orange';
console.log(product.charCodeAt('2'));
console.log(product.charAt(2));
console.log(product.length);
console.log(product.toUpperCase());
console.log(product.substring(4,0));
console.log(product.substring(0,5));
console.log(product.slice(-5));
console.log(product.replace('k','K'));
console.log(product.replaceAll('c','C'));
console.log(product.padStart(20,'#'));
console.log(box.split(","));
console.log(box.includes("apple",1));


let enterString="praveenkumar";
let x=enterString.split("")
console.log(x);

let y=x.reverse();
console.log(y);
console.log(y.join(""));

function reverse(enterString){

    let x=enterString.split("");
    let y=x.reverse();
    console.log(y.join(""));
    
}

reverse("praveenkumar")
reverse("epsi")
reverse("crazilllas");
reverse("madam");









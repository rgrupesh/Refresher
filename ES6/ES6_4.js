//OLD_WAY
// const square = function(number){
//     return number*number;
// };

//arrow function
const square = number => number*number;

console.log(square(5));



const full_name = (f_name,l_name) => console.log(`My name is ${f_name} ${l_name}`);

full_name("Rupesh","Gelal");



const hello = () => console.log("Hello World!");

hello();

//filter method

const jobs = [
    {id:1,isActive:true},
    {id:2,isActive:true},
    {id:3,isActive:false}
]

const active = jobs.filter(job => job.isActive);
console.log(active);

//call back function and 'this'

const person = {
    name:"Rupesh",
    walk(){

        var self = this; //old school
        setTimeout(function() { //this is standalone function, return window object
            console.log("self", self);
        },1000);
        
    }
}

person.walk();

const place = {
    name(){
        setTimeout(() => console.log("this", this),1000); // arrow function inherits 'this'
    }
}

place.name();

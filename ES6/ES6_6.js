class Person {

    constructor(name){
        this.name= name;
    }

    walk(){
        console.log("Walk");
    }
};

// Inheritance 
class Teacher extends Person{
    constructor(name,degree){
        super(name); //calling construtor of parent class
        this.degree=degree;
    }

    teach(){
        console.log("Teaches")
    }
}

const teacher = new Teacher("Rupesh","Engineering"); //have access to all methods and properties
teacher.walk();
console.log(teacher);

// default and named export

// import {} from './'; => named export
// import ... from './'; => default export
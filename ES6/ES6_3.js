const person = {
    name : "Rupesh",
    walk(){
        console.log(this);
        /* 'this' value determined by how function is called*/ 
    }                      
}

person.walk(); 
/* reference to person object
since method is called with object*/

const activity = person.walk;
console.log(activity);

activity();//returns global object since it is standalone//

//binding this

const acti = person.walk.bind(person);
acti();



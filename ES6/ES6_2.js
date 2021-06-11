const person = { //obj defined; key value pair
    name : '',
    walk : function(){}, // old syntax
    talk(){} // method inside obj in ES6
};

person.walk(); // method called
person['name'] = 'Ted';

const targetValue = 'name'; // used dynamically, say for input field
person['name'] = 'Hola';

console.log(person.name);

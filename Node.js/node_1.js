function my_name(name){
    console.log(`Hello ${name}`);
}

const my_name = name => console.log(`Hello ${name}`);

my_name("Rupesh");

// console.log(window); // no window/document object in node(no global scope)

const msg = "";
console.log(global.msg); //undefined(in node only scoped within module)

//every file is module, every var and function defined within file are scoped with that module

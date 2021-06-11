//map in ES6

const colors = ["red","blue","green"];

const l_colors = colors.map(color => `<ul>${color}</ul>`);

console.log(l_colors);

//object destructering 

const country = {
    name: "Nepal",
    region: "South-East Asia",
    continent: "Asia"
}

const {name:nm, region, continent} = country;

console.log(nm,region);

//spreading object

const first = { game: "football"};
const second = { country: "Spain"};

const combined = {...first,...second,player:"Xavi"};
console.log(combined);

//spreading array

const even = [2,4,6];
const odd = [1,3,13,5];

const natural_num = [...even,...odd,7];
console.log(natural_num);

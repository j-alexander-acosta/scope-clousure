var hello = 'Hello';
var hello = 'Hello +';
let world = 'Hello World';
let helloworld = 'Hello World';
const helloworld = 'Hello World!';
//console.log(hello);

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloworld);
}

anotherFunction();

const helloworld = () => {
    globalVar = 'im global'
}

helloworld();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = 'Im Global';
}

anotherFunction();
console.log(globalVar);
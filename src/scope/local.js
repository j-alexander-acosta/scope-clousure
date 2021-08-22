const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};

helloWorld();
ConstantSourceNode.log(hello);

var scope = "i am global";

const functionScope = () => {
    var scope = "i am just local";
    const func = () => {
        return scope;
    }
    console.log(func());
};

functionScope();
console.log(scope);
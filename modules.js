//this code has to be put in separate files for it to work
//working with modules
const { SomeMathObject } = require('./modules');

const modules = require('./modules'); 
console.log(modules.sum(1,1));
console.log(modules.PI);
console.log(new modules.SomeMathObject());


//the items below can be called using the codes above.


const sum = (num1,num2) => num1 + num2;
const PI = 3.14;
class SomeMathObject{
    constructor(){
        console.log('object created');
    }
}

module.exports = { sum : sum, PI : PI, SomeMathObject : SomeMathObject}  //this allows the function to be called or to return an output

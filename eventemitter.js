//working with eventemitter
const EventEmitter = require('events');
const eventEmitter = new EventEmitter()

//this is a function
eventEmitter.on('tutorial', ()=>{
    console.log('tutorial event has occurred');
});

eventEmitter.emit('tutorial');

//Another scenario passing parameters into the function
eventEmitter.on('tutorial', (num1,num2)=>{
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial',1,2);

//this is another scenario entirely, it shows how to use modules in adiffernt way 
class verbose extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }

}

let ridwan = new verbose('Ridwan');
let halima = new verbose('halima');
halima.on('name',()=>{
    console.log('my name is ' + halima.name);
});
ridwan.on('name',()=>{
    console.log('my name is ' + ridwan.name);
});

ridwan.emit('name');
halima.emit('name');

//working with the readline module
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});
let num1 = Math.floor((Math.random() * 10) + 1); 
let num2 = Math.floor((Math.random() * 10) + 1); 
let answer = num1 + num2;

//readline interface starts from here,this scenario elaborates more on the example above, making use of the if/else statement to validate the accuracy of user input
rl.question( `What is ${ num1 } + ${ num2 }? \n` ,
(userInput)=>{
    if(userInput.trim() == answer){
        rl.close();
    }
    else{
        rl.setPrompt('incorrect answer please try again\n');
        rl.prompt();
        rl.on('line',(userInput)=>{              //this ia a line event listener, when user enters input it triggers the line listener
            if(userInput.trim() == answer)
                rl.close();
            else{
                rl.setPrompt(`Your answer ${ userInput } is incorrect try again \n`)
                rl.prompt()
            }
        })
    }

});

rl.on('close',()=>{
    console.log('correct!!!');
})






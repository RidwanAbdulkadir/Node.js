// //working with file system module
//  const fs = require('fs');
// fs.writeFile('sample.txt', "this is a sample",(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log('file created successfully');
//         fs.readFile('sample.txt','utf8',(err,file)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log(file);
//         });
//     }
       
// });

// //this is another scenario building on the one above, using rename method to rename files
// fs.rename('sample2.txt','sample.txt',(err)=>{
//     if (err)
//         console.log(err);
//     else
//         console.log('successfully renamed file');
// });

// //another scenario which involves appending data to a file
// fs.appendFile('sample.txt','addition of data to the file',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully appended data to file');
// // })

//another scenario which involves deleting a file
fs.unlink('sample.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('file successfully deleted')
})


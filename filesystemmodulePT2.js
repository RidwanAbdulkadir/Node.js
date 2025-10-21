//working with module pt2 (working with folders here)
const fs = require('fs');
// fs.mkdir('testing',(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         fs.writeFile('./testing/sample.txt','Home: A place for everything and everything in its place',(err)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log('File created successfully');
//         })
//         // fs.rmdir('testing',(err)=>{
//         //     if(err)
//         //         console.log(err);
//         //     else{
//         //         console.log('folder deleted successfully')
//         //     }

//         // })
//         //console.log('folder created successfully')
//     }
// })

// fs.unlink('./testing/sample.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         fs.rmdir('testing',(err)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log('folder deleted')
//         })
//     }
// })

fs.readdir('karma',(err,files)=>{
    if(err)
        console.log(err);
    else{
        for(let file of files){
            fs.unlink('./karma/' + file,(err)=>{
                if(err)
                    console.log(err);
                else
                    console.log('deleted successfully')
            })
        }
        //console.log(files); // this prints out the content of the file
    }
        
})

const {deleteFile,generateJSON,getJSON,createDirectory} = require('./problem1')


createDirectory('Random-JSON')
.then(data=>{
    console.log(data);
    jsonData = getJSON()
    return generateJSON('Random-JSON',jsonData)  
})
.then(()=>{
   // console.log(data);
    return deleteFile('Random-JSON')   
})
.then(()=>{
    console.log("Execution Complete");   
})
.catch(err=>{
    console.log(err);
    
})
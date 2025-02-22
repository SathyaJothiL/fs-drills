const {createDirectory, getJSON, generateJSON, deleteFile} = require('./problem1.js')

const dirName = '/Random-JSON'
createDirectory(dirName)
.then(function(){
    console.log(`directory ${dirName} created succcessfully`);
    return getJSON()
})
.then(function(jsonData){
    console.log("json data get successfully"); 
    return generateJSON(dirName,jsonData)
})
.then(function(filePaths){
    console.log("Generated JSON Files");   
    return deleteFile(filePaths)
})
.catch(function(err){
    console.log("Error occured",err);     
})
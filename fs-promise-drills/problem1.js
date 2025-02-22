const fs = require('fs')
const fsPromises = fs.promises

function createDirectory(fileName){
    let filePath = __dirname + fileName
    let promise = fsPromises.mkdir(filePath)
    return promise
}
function getJSON(){
    json1='{"Name" : "Sathya", "Role" : "Full-stack developer"}'
    json2='{"Name" : "Virat Kohli", "Score":"100"}'
    let jsonArray=[json1,json2]
    let promise =new Promise(function(resolve){
        resolve(jsonArray)
    })
    return promise
}

function generateJSON(dirName,jsonArray){
    let promises = [],promise
    console.log(jsonArray);  
    jsonArray.map((json,index)=>{
        let writePath = __dirname + '/' + dirName + '/' + `Random ${index}.json`
        promise = fsPromises.writeFile(writePath,json).then(()=>writePath)
        promises.push(promise)
    })
    return Promise.all(promises)
}

function deleteFile(filePaths){ 
    let promises=[]  
        filePaths.forEach(filePath=>{
            resolvedPromise = fsPromises.unlink(filePath)
            promises.push(resolvedPromise)
        })
    let promise =Promise.all(promises)
  //  console.log(p);
    promise.then(()=>console.log("All files deleted successfully"))
}

module.exports = {createDirectory, getJSON, generateJSON, deleteFile}
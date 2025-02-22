
const fs = require("fs");
const { resolve } = require("path");

function fetchFile(url) {  
  return new Promise((resolve,reject)=>{
    fetch(url).then(response=>response.text())
        .then(data=>resolve(data))
        .catch(err=>reject(err))
  })
}

function readFile(fileName) {
  let filepath = __dirname + "/" + fileName;
  return new Promise((resolve,reject)=>{
    fs.readFile(filepath,'utf-8',(err,data)=>{
        if(!err){
            resolve(data)
        }else{
            reject(err)
        }
    })
  })
  
}

function writeFile(fileName, data) {
  let filepath = __dirname + '/' + fileName
  return new Promise((resolve,reject)=>{
    fs.writeFile(filepath,data,(err)=>{
        if(!err){
            resolve("Data written successfully")
        }else{
            reject("Failed writing")
        }
    })    
  }) 
}
function upperCaseConverter(data) {
  console.log("Converting to upper case");
  let upperCase = data.toUpperCase();
  return upperCase;
}

function lowerCaseConverter(data) {
    console.log("Converting to lower case and splitting into sentences");
  let lowercase = data.toLowerCase().split(" ").filter(word=>word!=="").join("\n");
  return lowercase;
}

function sorter(data) {
    console.log("Sorting the data");
  let sorted = data.split(" ").sort().join(" ");
  return sorted
}
function deletFile(fileNames) {
  let promises = fileNames.map(fileName=>{
    let filePath = __dirname + '/' + fileName
    return new Promise((resolve,reject)=>{
        fs.unlink(filePath,err=>{
            if(!err){
                resolve("File deleted successfully")
            }else{
                reject("Error deleting file")
            }
        })
    })
  })
  return Promise.all(promises)
}

module.exports = {fetchFile,readFile,writeFile,upperCaseConverter,lowerCaseConverter,sorter,deletFile}


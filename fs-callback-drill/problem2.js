const fs = require('fs')
const path = require('path')

function generateString(callback){
    let javaString = "JavaScript is a synchronous single threaded language."
    let nodeString = "Node.js helps to run JavaScript outside the brower. "
    let apiString = "APIs helps JavaScript to interact with filesystems, networks, user-devices, databases and so on"
    let fileContent = javaString+nodeString+apiString 
   // let fileContent = string1+string2+string3
    callback(fileContent)
   
}

function readFile(fileName,callback){
    let filePath=(__dirname+'/'+fileName)
    fs.readFile(filePath,'utf-8', function(err,data){
        if(err){
            console.log(err);           
        }else{
            console.log(`File ${fileName} read successfully`);
            callback(data)
        }
    })
}

function upperCaseConverter(data,callback){
    console.log("Converting all text to uppercase");    
    let upperCase = data.toUpperCase()
    callback(upperCase)
}
function writeFile(data,fileName, callback){
    let filePath = __dirname+ '/' + fileName
    fs.writeFile(filePath,data,'utf-8',function(err){
        if(err){
            console.log(err);           
        }else{
            console.log(`File ${fileName} written successfully`);
            callback(fileName);
        }
    })   
}
function lowerCaseConverter(data,callback){
    console.log("Converting all text to lowercase and splitting into new sentences");
    let lowerCase = data.toLowerCase()
    let newSentence = lowerCase.split(' ').join('\n')
    callback(newSentence)
}
function sorter(data,callback){
    console.log("Sorting the words")    
    let sorted = data.split('').sort().join('')
    callback(sorted)
}
function renameFile(oldName,newName,callback){
    let oldPath = __dirname + '/' + oldName
    let newPath = __dirname + '/' + newName
    fs.rename(oldPath,newPath,function(err){
        if(err){
            console.log(err);           
        }else{
            console.log(`File ${oldName} renamed to ${newName}`);            
            callback(newName)
        }
    })
}
function deleteFile(fileNames,callback){
    let count=0;
    fileNames.forEach(fileName=>{
        let filePath = __dirname + '/' + fileName
        fs.unlink(filePath,function(err){
            if(err){
                console.log(err);               
            }else{                             
                count++               
            }
        })
    })
    if(count === fileNames.length-1){
        console.log("New files deleted successfully");       
        callback();
    }
}

module.exports = {generateString,readFile,writeFile,upperCaseConverter,lowerCaseConverter,sorter,renameFile,deleteFile}

const fs = require('fs')
const path =require('path')

function createDirectory(dirPath,callback){
    fs.mkdir(dirPath,function(err){
        if(err){
            console.error(err)
        }else{
            console.log("File directory created successfully");
            callback()           
        }
    })
}

function getJSON(callback){
    const json1 = '{"Book" : "Harry-Potter", "Author" : "JK Rowling"}'
    const json2 = '{"Name" : "Sathya", "Age" : "26"}'
    callback([json1,json2])
}

function generateJSON(dirPath,jsonArray, callback){
    let filePaths = []
        jsonArray.forEach((json,index) => {
            const filePath = path.join(dirPath,`/random-${index}.json`)
            fs.writeFile(filePath,json,function(err){
            if(err){
                console.error(err);       
            }
            else{
                console.log(`Generated Random file-${index}`);
                filePaths.push(filePath)            
            }
            if(index+1 === jsonArray.length){
                callback(filePaths)
            }
        })
        
    })
    }   
function deleteFile(filePaths,callback){
        filePaths.forEach((filePath,index) =>{
            fs.unlink(filePath,function(err){
                if(err){
                    console.log(err);
                    
                }
                if(index+1 === filePaths.length){
                    callback()
                }
            })
        })
        

}
module.exports = {createDirectory,getJSON,generateJSON,deleteFile}



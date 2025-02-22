

const fs = require('fs')
function deleteFile(fileName){
    return new Promise((resolve,reject)=>{
        let filepath = __dirname + '/' + fileName
        fs.unlink(filepath,(err)=>{
            if(!err){
                resolve("Deleted successfully")
            }else{
            reject("Error occured while deleting the file")
            }
        })
    })
}

function createDirectory(fileName){
    return new Promise((resolve,reject)=>{
        let filepath = __dirname + '/' + fileName
        fs.mkdir(filepath,(err)=>{
            if(!err){
                resolve("Created directory successfully")
            }else{
                reject("Error occured while creating the directory")
            }
        })
    })
}

function getJSON(){
let json1 = {Name : "Harbajan", Country : "India"}
let json2 = {Name: "Harry Potter", Author:"JK Rowling"}
jsonArr = [json1,json2]
return jsonArr.map(json=>JSON.stringify(json))
}
function generateJSON(dirname,jsonData){
    let promises = jsonData.map((data,index)=>{
        return new Promise((resolve,reject)=>{
            let filepath = __dirname + '/' + dirname + `/Random-File${index}.json`
            fs.writeFile(filepath,data,err=>{
                if(!err){
                    console.log(`File ${index+1} written successfully`);   
                    resolve(`File ${index+1} written successfully`)                
                }else{
                    flag=true
                    console.log(`Error while writing File ${index+1}`);  
                    reject(`Error while writing File ${index+1}`)                 
                }
            })
        })
    })

   return Promise.all(promises)
}
function deleteFile(dirname){
    let promises = jsonData.map((data,index)=>{
        return new Promise((resolve,reject)=>{
            let filepath = __dirname + '/' + dirname + `/Random-File${index}.json`
            fs.unlink(filepath,err=>{
                if(!err){
                    console.log(`File ${index+1} deleted successfully`);   
                    resolve(`File ${index+1} deleted successfully`)                
                }else{
                    flag=true
                    console.log(`Error while deleting File ${index+1}`);  
                    reject(`Error while deleting File ${index+1}`)                 
                }
            })
        })
    })

   return Promise.all(promises)
}

module.exports = {deleteFile,generateJSON,getJSON,createDirectory}



const {createDirectory,getJSON,generateJSON,deleteFile} = require('./problem1')

const dirPath = './Random-JSON'
createDirectory(dirPath,()=>{
    getJSON((jsonData)=>{
        generateJSON(dirPath,jsonData,(deletePaths)=>{
            deleteFile(deletePaths,()=>{
                console.log(`All files deleted successfully`);
            })               
        })
    })
})
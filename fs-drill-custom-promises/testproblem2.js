const {fetchFile,readFile,writeFile,upperCaseConverter,lowerCaseConverter,sorter,deletFile} = require('./problem2')

let url = "https://www.w3.org/TR/2003/REC-PNG-20031110/iso_8859-1.txt"
let fileNames = [];

fetchFile(url)
.then(data=>{
    console.log("Fetching the text file");
    return writeFile("File.txt",data)   
})
.then((data)=>{
    console.log(data); 
    console.log("Reading the File....");
    return readFile("File.txt")
})
.then((data)=>{
    let upperCase = upperCaseConverter(data);
    return writeFile("filename.txt",upperCase)
})
.then((data)=>{
    console.log(data);   
    console.log("Reading the File....");
    return readFile("filename.txt")
})
.then((data)=>{
    let lowercase = lowerCaseConverter(data);
    fileNames.push("lowerCaseFile.txt");
    return writeFile("lowerCaseFile.txt",lowercase)
})
.then((data)=>{
    console.log(data); 
    console.log("Reading the File....");
    return readFile("lowerCaseFile.txt")
})
.then(data=>{
    let sorted = sorter(data);
    return writeFile("filename.txt",sorted)
})
.then((data)=>{
    console.log(data);   
    console.log("Reading the File....");
    return readFile("filename.txt")
})
.then((data)=>{
    console.log(data);
    return deletFile(fileNames)   
})
.then(()=>{
    console.log("All files deleted successfully");   
    console.log("Execution complete");  
})
.catch(err=>{
    console.log(err);
    
})
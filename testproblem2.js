const {generateString,readFile,writeFile,upperCaseConverter,lowerCaseConverter,sorter,renameFile,deleteFile} = require('./problem2')

let fileNames=[]
generateString((jsData)=>{
    let fileName = 'lipsum.txt'
    writeFile(jsData,fileName, (writtenFile)=>{
        readFile(writtenFile,(lipsumData)=>{
            upperCaseConverter(lipsumData,(convertedData)=>{
                let fileName = 'filenames.txt'
                writeFile(convertedData,fileName,(writtenFile)=>{
                    readFile(writtenFile,(upperCaseData)=>{
                        lowerCaseConverter(upperCaseData,(lowerCaseData)=>{
                            let fileName = 'lowerCaseText.txt'
                            fileNames.push(fileName)
                            writeFile(lowerCaseData,fileName,(writtenFile)=>{
                                readFile(writtenFile,(lowerCaseData)=>{
                                    let fileName='sorted.txt'
                                    writeFile(lowerCaseData,fileName,(writtenFile)=>{
                                        let newPath = 'filenames.txt'
                                        renameFile(writtenFile,newPath,(newName)=>{
                                            readFile(newName,(newData)=>{
                                                //console.log(newData);
                                                deleteFile(fileNames,()=>{
                                                    console.log("Execution finished");                                                    
                                                })
                                            })
                                        })
                                    })
                                    
                                })
                            })
                        })
                    })
                })
            })
        })
    })

})
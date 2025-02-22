const {fetchFile,readFile,writeFile,upperCaseConverter,lowerCaseConverter,sorter,deletFile} = require('./problem2')

let url = "https://www.w3.org/TR/2003/REC-PNG-20031110/iso_8859-1.txt";
let fileNames = [];
fetchFile(url)
  .then((responseData) => {
    return writeFile("File.txt", responseData);
  })
  .then(() => {
    console.log(`Reading the File.....`);
    return readFile("File.txt");
  })
  .then((data) => {
    let upperCase = upperCaseConverter(data);
    return writeFile("filenames.txt", upperCase);
  })
  .then(() => {
    console.log(`Reading the File.....`);
    return readFile("filenames.txt");
  })
  .then((data) => {
    //console.log(data);
    let lowercase = lowerCaseConverter(data);
    fileNames.push("lowerCaseFile.txt");
    return writeFile("lowerCaseFile.txt", lowercase);
  })
  .then(() => {
    console.log(`Reading the File.....`);
    return readFile("lowerCaseFile.txt");
  })
  .then((data) => {
    let sorted = sorter(data);
    return writeFile("filenames.txt", sorted);
  })
  .then(() => {
    console.log(`Reading the File.....`);
    return readFile("filenames.txt");
  })
  .then((data) => {
    console.log(data);
    return deletFile(fileNames);
  })
  .then(() => console.log("execution over"))
  .catch((err) => {
    console.log(err.name);
  });
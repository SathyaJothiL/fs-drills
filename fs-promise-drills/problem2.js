const fs = require("fs");
const fsPromises = fs.promises;

function fetchFile(url) {
  let fecthPromise = fetch(url)
    .then((response) => response.text())
    .catch((err) => {
      console.log("Error while fetching the url", url);
      console.log(err);
      throw err
    });
  return fecthPromise;
}

function readFile(fileName) {
  let filepath = __dirname + "/" + fileName;
  return fsPromises.readFile(filepath, "utf-8");
}

function writeFile(fileName, data) {
  let filepath = __dirname + '/' + fileName
  return fsPromises
    .writeFile(filepath, data)
    .then(() => {
      console.log("data written successfully");
    })
    .catch((err) => {
      console.error(`Error while writing to the File ${fileName}`);
      throw err
    });
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
  let promises = [];
  fileNames.forEach((fileName) => {
    let path = __dirname + "/" + fileName;
    promises.push(
      fsPromises
        .unlink(path)
        .then(() => console.log(`File ${fileName} deleted successfully`))
        .catch(() => console.log(`Error while deleting the File ${fileName}`))
    );
  });
  return Promise.all(promises);
}

module.exports = {fetchFile,readFile,writeFile,upperCaseConverter,lowerCaseConverter,sorter,deletFile}

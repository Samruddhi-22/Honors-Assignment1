import { readFile } from 'fs'; // importing named function readFile
import { getDirName } from './util.js'; // importing named function getDirName

// Invoking 'getDirName' function and storing the result in the constant '__dirname'
const __dirname = getDirName();

// Defining an async function 'readFilePromise' that takes a filename as an argument
const readFilePromise = (filename) => {
  // Returning a new Promise that takes two arguments: 'resolve' and 'reject'
  return new Promise((resolve, reject) => {
    // Invoking 'readFile' function with the provided filename, encoding, and a callback function
    readFile(filename, 'utf8', (err, data) => {
      // If there is an error, reject the Promise with the error as an argument
      if (err) {
          reject(err);
          return;
      }      
      // If there is no error, resolve the Promise with the data as an argument
      resolve(data);
    });
  });
};
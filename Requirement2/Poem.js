import { readFileSync } from 'fs';

// Function to print the content of poem.txt synchronously
function printPoemContent() {
    try {
        // Read the file 'poem.txt' and store its content in the 'data' variable
        // The file is read in 'utf8' encoding
        const data = readFileSync('poem.txt', 'utf8');

        // Log the content of 'data' to the console
        console.log(data);
    } 
    // If there's an error while reading the file, catch it here
    catch (err) {
        // Log an error message to the console, including the error details
        console.error('Error reading the file:', err);
    }
}

// Call the 'printPoemContent' function to print the poem content
printPoemContent();
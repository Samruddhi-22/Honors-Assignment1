import path from 'path';
import { fileURLToPath } from 'url';

// exporting a named function
export const getFileName = () => fileURLToPath(import.meta.url);

// exporting a named function
export const getDirName = () => path.dirname(fileURLToPath(import.meta.url));

// exporting a default object
export default {
    getFileName,
    getDirName,
};
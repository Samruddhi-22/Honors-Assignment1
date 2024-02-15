// Function to check if a year is a leap year
export function isLeapYear(year) {
    // Check if the year is evenly divisible by 4, but not by 100*
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    // Otherwise, check if the year is evenly divisible by 400*
    } else if (year % 400 === 0) {
        // If so, it's a leap year*
        return true;
    // Otherwise, it's not a leap year*
    } else {
        return false;
    }
}

export default {
    isLeapYear: isLeapYear
};
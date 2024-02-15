import fetch from 'node-fetch';
import querystring from 'querystring';

// API source - https://data.gov.in/resource/all-india-pincode-directory
const baseUrl = 'https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6';
const apiKey = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b';

const createRequestUrl = (offset) => {
    const parameters = {
        'api-key': apiKey,
        format: 'json',
        limit: 10,
        offset,
    };
    return `${baseUrl}?${querystring.stringify(parameters)}`;
};

const fetchData = async (offset) => {
    const response = await fetch(createRequestUrl(offset));
    const { records } = await response.json();
    return records;
};

const offsets = [31, 51, 61];

// Fetch data for all offsets concurrently and combine into one array
const combinedDataArray = await Promise.all(offsets.map(offset => fetchData(offset)))
    .then(dataArrays => dataArrays.flat());

console.log('Combined data:');
console.log(combinedDataArray);
console.log('Script microtask execution complete.');